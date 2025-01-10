import Link from 'next/link';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const InteractivePresentationsPage = () => {
  const Section = ({ children }) => (
    <div className="flex flex-col md:flex-row items-center justify-between w-full py-10">
      {children}
    </div>
  );

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen max-w-full sm:max-w-[70%] lg:max-w-[1200px] mx-auto">
      <div className="min-h-screen">
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="text-4xl text-center font-semibold animate-fade-in lowercase text-green-300 pt-24 sm:py-16">
            Interactive Presentations
          </h1>
          <p className="w-full px-8 sm:px-0 sm:w-3/5 text-center py-4">
            These presentations were built in the Digideck, Sportsdigita's
            flagship application, using JavaScript, jQuery, HTML, CSS, and
            Bootstrap.
          </p>
        </div>

        <Section>
          <div className="w-full p-6 sm:p-12">
            <h2 className="text-3xl font-bold text-green-700">Hailey Sault</h2>
            <p className="my-8 text-lg">
              Hailey Sault (hay-lee-soo) is a marketing agency with expertise
              focused on health care.
            </p>
            <Link
              href="https://haileysault.com/"
              target="_blank"
              className="text-green-300 hover:text-sky-400 ext-nav-link"
            >
              Visit Hailey Sault
            </Link>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default async function Page() {
  const cookieStore = cookies();
  const password = cookieStore.get('password');

  if (password?.value !== process.env.SECRET_PASSWORD) {
    redirect('/login');
  }

  return <InteractivePresentationsPage />;
}
