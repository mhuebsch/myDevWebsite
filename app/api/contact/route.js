import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  const { name, email, message, recaptchaToken } = await req.json();

  if (!name || !email || !message || !recaptchaToken) {
    return new Response(JSON.stringify({ error: 'All fields are required.' }), {
      status: 400,
    });
  }

  if (req.body.website) {
    return res.status(400).json({ error: 'Spam detected' });
  }

  // Verify ReCAPTCHA token with Google
  const recaptchaRes = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
  });

  const recaptchaData = await recaptchaRes.json();

  // Check if ReCAPTCHA verification was successful
  if (!recaptchaData.success) {
    return new Response(JSON.stringify({ error: 'ReCAPTCHA verification failed.' }), {
      status: 400,
    });
  }

  try {
    await sendgrid.send({
      to: 'mhipsh@gmail.com', // Your email address
      from: 'mark@markhuebsch.com', // The verified sender email from SendGrid
      subject: 'DevMarkHuebsch New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return new Response(
      JSON.stringify({ message: 'Message sent successfully!' }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Error sending message.' }), {
      status: 500,
    });
  }
}
