import React from 'react';
import Link from 'next/link';

function Header({ title }) {
  return (
    <header className="text-green-300 my-16 uppercase animate-fade-in-delayed tracking-wide">
      <h1>{title ? title : 'Default title'}</h1>
    </header>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-screen max-w-[70%] lg:max-w-[1200px] mx-auto h-screen overflow-hidden">
      <div className="sm:w-full md:w-3/12 flex flex-col items-center justify-center animate-fade-in-delayed">
        <img
          src="/images/headshot-me.png"
          alt="headshot profile picture of mark huebsch"
          className="w-auto h-auto max-h-96 object-contain rounded-full drop-shadow-lg"
        />
      </div>

      <div className="sm:w-full md:w-9/12 flex flex-col items-center justify-center">
        <Header title="Designer | Developer | Engineer" />

        <h1 className="font-semibold lowercase py-3.5 px-0.5 z-10 text-3xl text-transparent duration-1000 bg-green-800 cursor-default text-edge-outline animate-title font-display sm:text-6xl xl:text-8xl whitespace-nowrap bg-clip-text ">
          mark huebsch
        </h1>

        <nav className="home-nav-links my-16 animate-fade-in-delayed">
          <ul className="flex items-center justify-center gap-4">
            <li>
              <Link
                href="https://github.com/mhuebsch"
                target="_blank"
                className="duration-500 text-green-300 hover:text-sky-400"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="duration-500 text-green-300 hover:text-sky-400"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="duration-500 text-green-300 hover:text-sky-400"
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
