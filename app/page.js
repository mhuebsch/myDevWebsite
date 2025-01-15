import React from 'react';
import Link from 'next/link';

const linkClassName = 'duration-500 text-green-300 hover:text-sky-400';
const listItemClassName = 'mb-1 sm:mb-8 mx-2';

function Header({ title }) {
  return (
    <header className="order-2 sm:order-none text-green-300 mt-2 sm:mt-8 my-8 sm:my-16 uppercase text-center animate-fade-in-delayed tracking-wide">
      <h1 className="text-xl">{title ? title : 'Default title'}</h1>
    </header>
  );
}

export default function HomePage() {
  return (
    <div className="flex mt-16 sm:mt-0 flex-col md:flex-row items-center justify-center w-screen px-10 max-w-full sm:max-w-[70%] lg:max-w-[1200px] mx-auto h-screen">
      <div className="px-6 sm:px-0 mt-52 sm:w-full md:w-3/12 md:mt-0  flex flex-col items-center justify-center animate-fade-in-delayed">
        <img
          src="/images/mark-headshot-nobg.png"
          alt="headshot profile picture of mark huebsch"
          className="w-auto h-auto max-h-96 object-contain rounded-full drop-shadow-lg border-[6px] border-double border-[#166534]"
        />
      </div>

      <div className="sm:w-full md:w-9/12 flex flex-col items-center justify-center pb-16 sm:pb-0">
        <Header title="Frontend Developer" />

        <h1 className="order-1 sm:order-none font-semibold lowercase mt-4 sm:mt-0 py-3.5 px-0.5 z-10 text-3xl text-transparent duration-1000 bg-green-800 cursor-default text-edge-outline animate-title font-display sm:text-6xl xl:text-8xl whitespace-nowrap bg-clip-text ">
          mark huebsch
        </h1>

        <nav className="order-3 sm:order-none home-nav-links my-4 sm:my-16 animate-fade-in-delayed w-full max-w-screen-sm sm:max-w-prose">
          <ul className="flex flex-col flex-wrap sm:flex-row items-center justify-center gap-10 sm:gap-4 max-w-screen-sm">
            <li className={listItemClassName}>
              <Link href="/projects" className={linkClassName}>
                Projects
              </Link>
            </li>
            <li className={listItemClassName}>
              <Link
                href="https://github.com/mhuebsch"
                target="_blank"
                className={linkClassName}
              >
                GitHub
              </Link>
            </li>
            <li className={listItemClassName}>
              <Link href="/about" className={linkClassName}>
                About
              </Link>
            </li>
            <li className={listItemClassName}>
              <Link href="/contact" className={linkClassName}>
                Contact
              </Link>
            </li>
            <li className={listItemClassName}>
              <Link
                href="https://www.linkedin.com/in/markhuebsch/"
                target="_blank"
                className={linkClassName}
              >
                LinkedIn
              </Link>
            </li>
            <li className={listItemClassName}>
              <Link href="/resume" className={linkClassName}>
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
