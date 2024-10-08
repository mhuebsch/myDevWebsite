import ContactForm from 'app/components/contactForm';

const ContactPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen max-w-full sm:max-w-[70%] lg:max-w-[1200px] mx-auto">
      <div className="min-h-screen w-4/5 sm:w-full">
        <div className="flex flex-col justify-start sm:justify-center items-center h-full w-full">
          <h1 className="text-4xl text-center font-semibold animate-fade-in lowercase text-green-300 py-10">
            contact
          </h1>
          <p className="w-full sm:w-2/5 pb-8 px-8 sm:px-0 text-center">
            Please feel free to reach out so we can get in touch!
          </p>
          <div className="contact-form w-full max-w-full sm:max-w-[70%] flex justify-start sm:justify-center items-center">
            <ContactForm></ContactForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
