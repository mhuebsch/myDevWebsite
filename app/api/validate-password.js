export default function handler(req, res) {
  if (req.method === 'POST') {
    const { password } = req.body;

    const correctPassword = 'unlockify'; 

    if (password === correctPassword) {
      res.setHeader(
        'Set-Cookie',
        'authenticated=true; Path=/; HttpOnly; Max-Age=3600'
      );
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ error: 'Invalid password' });
    }
  } else {
    res.status(405).end(); 
  }
}
