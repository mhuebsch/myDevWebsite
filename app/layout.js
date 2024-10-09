import '../styles/globals.css';
import '../styles/flipPanel.scss';
import '../styles/contactForm.scss';
import '../styles/globals.scss';
import '../styles/navHamburger.module.scss';
import NavigationHamburger from './components/navigationHamburger.tsx';
import Particles from './components/particles';

export const metadata = {
  title: 'Mark Huebsch | Developer | Designer | Engineer',
  description:
    'Mark Huebsch is a seasoned web developer and designer, specializing in creating dynamic, user-focused digital experiences. With over 15 years of expertise in front-end development and UI/UX design, Mark delivers innovative solutions that bridge design and technology.',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Mark Huebsch | Developer | Designer | Engineer',
    description:
      'Mark Huebsch is a seasoned web developer and designer, specializing in creating dynamic, user-focused digital experiences. With over 15 years of expertise in front-end development and UI/UX design, Mark delivers innovative solutions that bridge design and technology.',
    url: 'https://dev.markhuebsch.com',
    images: [
      {
        url: '/images/website-preview-image.png',
        width: 1200,
        height: 630,
        alt: 'Mark Huebsch website preview image',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    image: '/images/website-preview-image.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black">
      <head>
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:image" content={metadata.twitter.image} />
      </head>
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
