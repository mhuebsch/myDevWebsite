import ContactForm from 'app/components/contactForm';

const AboutPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen max-w-full sm:max-w-[70%] lg:max-w-[1200px] mx-auto">
      <div className="min-h-screen">
        <div className="flex flex-col justify-start sm:justify-center items-center h-full w-full">
          <h1 className="text-4xl text-center font-semibold animate-fade-in lowercase text-green-300 py-16">
            about
          </h1>
          <p className="w-full sm:w-2/5 px-8 sm:px-0 text-center">
            My name is Mark Huebsch (Hipsh). I’ve been designing and programming
            websites and web-based applications for 15+ years now. I thoroughly
            enjoy what I do and am grateful that I’m able to make a career of
            it.
          </p>
          <p className="w-full sm:w-2/5 px-8 sm:px-0 text-center">
            I reside in the mountains in Asheville, North Carolina and enjoy
            outdoor activities in my free time. When I'm not coding or
            designing, you can find me hiking, camping, or spending time on
            a lake or river.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
