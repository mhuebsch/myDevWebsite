import '../styles/globals.css';
import '../styles/flipPanel.scss';
import '../styles/contactForm.scss';
import '../styles/globals.scss';
import '../styles/navHamburger.module.scss';
import NavigationHamburger from './components/navigationHamburger.tsx';
import Particles from './components/particles';

export const metadata = {
  title: 'Mark Huebsch | Designer | Developer | Engineer',
  description: 'Mark Huebsch is an experienced front end specialist.',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black">
      <body>
        <NavigationHamburger className="fixed" />
        <Particles
          className="bg-gradient-to-tl from-gray-900 via-green-800/60 to-gray-900 fixed inset-0 -z-10"
          quantity={500}
        />
        {children}
      </body>
    </html>
  );
}
