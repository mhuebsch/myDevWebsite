import FlipPanel from 'app/components/flipPanel';
import ArrowRightIcon from 'public/svgs/arrow-right.svg';

const ProjectsPage = () => {
  // Customizable Components Flip Panel
  const componentsFrontImage = '/images/featured-components.png';
  const componentsBackImage = '/images/featured-components.png';

  const componentsFrontContent = (
    <div>
      <h2 className="text-xl text-green-300">Customizable Components</h2>
    </div>
  );

  const componentsBackContent = (
    <div className="flex flex-col justify-center items-center">
      <h4 className="font-medium text-sky-400">
        Interactive, modular design tools used within an online presentation
        platform.
      </h4>
      <a className="project-link mt-8" href="/projects/custom-comps/">
        <ArrowRightIcon></ArrowRightIcon>
      </a>
    </div>
  );

  // Website Designs Flip Panel
  const websitesFrontImage = '/images/screens-hailey-sault.png';
  const websitesBackImage = '/images/desktop-hailey-sault.png';

  const websitesFrontContent = (
    <div>
      <h2 className="text-xl text-green-300">Website Designs</h2>
    </div>
  );

  const websitesBackContent = (
    <div className="flex flex-col justify-center items-center">
      <h4 className="font-medium text-sky-400">
        Design, developement, and ongoing maintenance of numerous websites.
      </h4>
      <a className="project-link mt-8" href="/projects/web-designs/">
        <ArrowRightIcon></ArrowRightIcon>
      </a>
    </div>
  );

  return (
    <div className="flex flex-col justify-start sm:justify-center items-center h-screen w-screen">
      <div className="flex flex-col justify-center items-center w-screen">
        <h1 className="text-4xl font-semibold lowercase text-green-300 py-16 animate-fade-in">
          Projects
        </h1>
        <div className="flex flex-col sm:flex-row items-center">
          <div className="flip-panel mx-10 my-6 sm:my-0 w-4/5 sm:w-full md:w-1/4 max-w-[395px] min-w-[300px] sm:min-w-[395px] h-56 sm:h-64 rounded-lg border-dotted border-2 border-green-300 bg-gradient-to-tl from-black via-green-950/30 to-black">
            <FlipPanel
              frontContent={componentsFrontContent}
              backContent={componentsBackContent}
              frontImage={componentsFrontImage}
              backImage={componentsBackImage}
              className="cc-animation-type-flip cc-animation-direction-horizontal w-1/4 h-64"
            />
          </div>

          <div className="flip-panel mx-10 my-6 sm:my-0 w-4/5 sm:w-full md:w-1/4 max-w-[395px] min-w-[300px] sm:min-w-[395px] h-56 sm:h-64 rounded-lg border-dotted border-2 border-green-300 bg-gradient-to-tl from-black via-green-950/30 to-black">
            <FlipPanel
              frontContent={websitesFrontContent}
              backContent={websitesBackContent}
              frontImage={websitesFrontImage}
              backImage={websitesBackImage}
              className="cc-animation-type-flip cc-animation-direction-horizontal w-1/4 h-64"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
