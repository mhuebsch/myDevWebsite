import FlipPanel from 'app/components/flipPanel';
import ArrowRightIcon from 'public/svgs/arrow-right.svg';

const flipPanelWrapperClasses =
  'flip-panel md:mx-6 md:my-6 my-10 w-4/5 sm:w-full md:w-1/4 max-w-[350px] min-w-[300px] sm:min-w-[350px] h-56 sm:h-64 rounded-lg border-dotted border-2 border-green-300 bg-gradient-to-tl from-black via-green-950/30 to-black';

const frontContentHeaderClasses = 'text-xl text-green-300';
const backContentHeaderClasses = 'font-medium text-sky-400';

const backContentWrapperClasses = 'flex flex-col justify-center items-center';
const backContentLinkClasses = 'project-link mt-8';

const ProjectsPage = () => {
  // Customizable Components Flip Panel
  const componentsFrontImage = '/images/featured-components.png';
  const componentsBackImage = '/images/featured-components.png';

  const componentsFrontContent = (
    <div>
      <h2 className={frontContentHeaderClasses}>Customizable Components</h2>
    </div>
  );

  const componentsBackContent = (
    <div className={backContentWrapperClasses}>
      <h4 className={backContentHeaderClasses}>
        Interactive, modular design tools used within an online presentation
        platform.
      </h4>
      <a className={backContentLinkClasses} href="/projects/custom-comps/">
        <ArrowRightIcon></ArrowRightIcon>
      </a>
    </div>
  );

  // Website Designs Flip Panel
  const websitesFrontImage = '/images/screens-hailey-sault.png';
  const websitesBackImage = '/images/desktop-hailey-sault.png';

  const websitesFrontContent = (
    <div>
      <h2 className={frontContentHeaderClasses}>Website Designs</h2>
    </div>
  );

  const websitesBackContent = (
    <div className={backContentWrapperClasses}>
      <h4 className={backContentHeaderClasses}>
        Design, developement, and ongoing maintenance of numerous websites.
      </h4>
      <a className={backContentLinkClasses} href="/projects/web-designs/">
        <ArrowRightIcon></ArrowRightIcon>
      </a>
    </div>
  );

  // Interactive Presentations Flip Panel
  const interactivePresentationsFrontImage = '/images/bahrain-menu.jpg';
  const interactivePresentationsBackImage = '/images/bahrain-menu.jpg';

  const interactivePresentationsFrontContent = (
    <div>
      <h2 className={frontContentHeaderClasses}>Interactive Presentations</h2>
    </div>
  );

  const interactivePresentationsBackContent = (
    <div className={backContentWrapperClasses}>
      <h4 className={backContentHeaderClasses}>
        Fully interactive presentations built with JavaScript, HTML, CSS,
        jQuery, and Bootstrap.
      </h4>
      <a
        className={backContentLinkClasses}
        href="/projects/interactive-presentations"
      >
        <ArrowRightIcon></ArrowRightIcon>
      </a>
    </div>
  );

  // rebuildRockyForkRoad Flip Panel
  const rebuildRockyForkRoadFrontImage = '/images/rockyfork.jpeg';
  const rebuildRockyForkRoadBackImage = '/images/rockyfork-map.png';

  const rebuildRockyForkRoadFrontContent = (
    <div>
      <h2 className={frontContentHeaderClasses}>Rebuild Rocky Fork Road</h2>
    </div>
  );

  const rebuildRockyForkRoadBackContent = (
    <div className={backContentWrapperClasses}>
      <h4 className={backContentHeaderClasses}>
        Website created to raise community awareness and support for recovery
        efforts after Hurricane Helene.
      </h4>
      <a
        className={backContentLinkClasses}
        href="https://rebuildrockyforkroad.org/"
        target="_blank"
      >
        <ArrowRightIcon></ArrowRightIcon>
      </a>
    </div>
  );

  // giveWithEveryPurchase Flip Panel
  const giveWithEveryPurchaseFrontImage = '/images/give-with-every-purchase-shirts.png';
  const giveWithEveryPurchaseBackImage = '/images/give-with-every-purchase-home.png';

  const giveWithEveryPurchaseFrontContent = (
    <div>
      <h2 className={frontContentHeaderClasses}>Give with Every Purchase</h2>
    </div>
  );

  const giveWithEveryPurchaseBackContent = (
    <div className={backContentWrapperClasses}>
      <h4 className={backContentHeaderClasses}>
        Website created to give a portion of every sale to nonprofits and artist
        with every purchase.
      </h4>
      <a
        className={backContentLinkClasses}
        href="https://www.givewitheverypurchase.com/"
        target="_blank"
      >
        <ArrowRightIcon></ArrowRightIcon>
      </a>
    </div>
  );

  return (
    <div className="flex flex-col justify-start m-auto sm:justify-center items-center w-full max-w-[1200px]">
      <div className="flex flex-col flex-wrap justify-center items-center">
        <h1 className="text-4xl font-semibold lowercase text-green-300 py-16 animate-fade-in">
          Projects
        </h1>
        <div className="flex flex-col flex-wrap sm:flex-row items-center justify-center">
          <div className={flipPanelWrapperClasses}>
            <FlipPanel
              frontContent={componentsFrontContent}
              backContent={componentsBackContent}
              frontImage={componentsFrontImage}
              backImage={componentsBackImage}
              className="cc-animation-type-flip cc-animation-direction-horizontal w-1/4 h-64"
            />
          </div>

          <div className={flipPanelWrapperClasses}>
            <FlipPanel
              frontContent={websitesFrontContent}
              backContent={websitesBackContent}
              frontImage={websitesFrontImage}
              backImage={websitesBackImage}
              className="cc-animation-type-flip cc-animation-direction-horizontal w-1/4 h-64"
            />
          </div>

          <div className={flipPanelWrapperClasses}>
            <FlipPanel
              frontContent={interactivePresentationsFrontContent}
              backContent={interactivePresentationsBackContent}
              frontImage={interactivePresentationsFrontImage}
              backImage={interactivePresentationsBackImage}
              className="cc-animation-type-flip cc-animation-direction-horizontal w-1/4 h-64"
            />
          </div>

          <div className={flipPanelWrapperClasses}>
            <FlipPanel
              frontContent={rebuildRockyForkRoadFrontContent}
              backContent={rebuildRockyForkRoadBackContent}
              frontImage={rebuildRockyForkRoadFrontImage}
              backImage={rebuildRockyForkRoadBackImage}
              className="cc-animation-type-flip cc-animation-direction-horizontal w-1/4 h-64"
            />
          </div>

          <div className={flipPanelWrapperClasses}>
            <FlipPanel
              frontContent={giveWithEveryPurchaseFrontContent}
              backContent={giveWithEveryPurchaseBackContent}
              frontImage={giveWithEveryPurchaseFrontImage}
              backImage={giveWithEveryPurchaseBackImage}
              className="cc-animation-type-flip cc-animation-direction-horizontal w-1/4 h-64"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
