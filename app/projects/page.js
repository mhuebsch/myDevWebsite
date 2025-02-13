'use client';

import FlipPanel from 'app/components/flipPanel';
import ArrowRightIcon from 'public/svgs/arrow-right.svg';
import { useEffect, useRef } from 'react';
import { staggerFadeInScale } from '@/util/gsapAnimations';

const flipPanelWrapperClasses =
  'flip-panel md:mx-6 md:my-6 my-10 w-4/5 sm:w-full md:w-1/4 max-w-[350px] min-w-[300px] sm:min-w-[350px] h-56 sm:h-64 rounded-lg border-dotted border-2 border-green-300 bg-gradient-to-tl from-black via-green-950/30 to-black opacity-0 scale-0';

const frontContentHeaderClasses = 'text-xl text-green-300';
const backContentHeaderClasses = 'font-medium text-sky-400';

const backContentWrapperClasses = 'flex flex-col justify-center items-center';
const backContentLinkClasses = 'project-link mt-8';

const ProjectsPage = () => {
  const flipPanelRefs = useRef([]);

  // set up animation
  useEffect(() => {
    if (flipPanelRefs.current.length > 0) {
      staggerFadeInScale(flipPanelRefs.current);
    }
  }, []);

  // assign flipPanelRefs dynamically
  const setFlipPanelRef = (el, index) => {
    if (el && !flipPanelRefs.current.includes(el)) {
      flipPanelRefs.current[index] = el;
    }
  };

  // assign each flipPanel property
  const projects = [
    {
      frontContent: (
        <h2 className={frontContentHeaderClasses}>Customizable Components</h2>
      ),
      backContent: (
        <div className={backContentWrapperClasses}>
          <h4 className={backContentHeaderClasses}>
            Interactive, modular design tools used within an online presentation
            platform.
          </h4>
          <a className={backContentLinkClasses} href="/projects/custom-comps/">
            <ArrowRightIcon />
          </a>
        </div>
      ),
      frontImage: '/images/featured-components.png',
      backImage: '/images/featured-components.png',
    },
    {
      frontContent: (
        <h2 className={frontContentHeaderClasses}>Website Designs</h2>
      ),
      backContent: (
        <div className={backContentWrapperClasses}>
          <h4 className={backContentHeaderClasses}>
            Design, development, and ongoing maintenance of numerous websites.
          </h4>
          <a className={backContentLinkClasses} href="/projects/web-designs/">
            <ArrowRightIcon />
          </a>
        </div>
      ),
      frontImage: '/images/screens-hailey-sault.png',
      backImage: '/images/desktop-hailey-sault.png',
    },
    {
      frontContent: (
        <h2 className={frontContentHeaderClasses}>Interactive Presentations</h2>
      ),
      backContent: (
        <div className={backContentWrapperClasses}>
          <h4 className={backContentHeaderClasses}>
            Fully interactive presentations built with JavaScript, HTML, CSS,
            jQuery, and Bootstrap.
          </h4>
          <a
            className={backContentLinkClasses}
            href="/projects/interactive-presentations"
          >
            <ArrowRightIcon />
          </a>
        </div>
      ),
      frontImage: '/images/bahrain-menu.jpg',
      backImage: '/images/bahrain-menu.jpg',
    },
    {
      frontContent: (
        <h2 className={frontContentHeaderClasses}>Rebuild Rocky Fork Road</h2>
      ),
      backContent: (
        <div className={backContentWrapperClasses}>
          <h4 className={backContentHeaderClasses}>
            Website created to raise community awareness and support for
            recovery efforts after Hurricane Helene.
          </h4>
          <a
            className={backContentLinkClasses}
            href="https://rebuildrockyforkroad.org/"
            target="_blank"
          >
            <ArrowRightIcon />
          </a>
        </div>
      ),
      frontImage: '/images/rockyfork.jpeg',
      backImage: '/images/rockyfork-map.png',
    },
    {
      frontContent: (
        <h2 className={frontContentHeaderClasses}>Give with Every Purchase</h2>
      ),
      backContent: (
        <div className={backContentWrapperClasses}>
          <h4 className={backContentHeaderClasses}>
            Website created to give a portion of every sale to nonprofits and
            artists with every purchase.
          </h4>
          <a
            className={backContentLinkClasses}
            href="https://www.givewitheverypurchase.com/"
            target="_blank"
          >
            <ArrowRightIcon />
          </a>
        </div>
      ),
      frontImage: '/images/give-with-every-purchase-shirts.png',
      backImage: '/images/give-with-every-purchase-home.png',
    },
  ];

  return (
    <div className="flex flex-col justify-start m-auto sm:justify-center items-center w-full max-w-[1200px]">
      <div className="flex flex-col flex-wrap justify-center items-center">
        <h1 className="text-4xl font-semibold lowercase text-green-300 py-16 animate-fade-in">
          Projects
        </h1>
        <div className="flex flex-col flex-wrap sm:flex-row items-center justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => setFlipPanelRef(el, index)}
              className={flipPanelWrapperClasses}
            >
              <FlipPanel
                frontContent={project.frontContent}
                backContent={project.backContent}
                frontImage={project.frontImage}
                backImage={project.backImage}
                className="cc-animation-type-flip cc-animation-direction-horizontal w-1/4 h-64"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
