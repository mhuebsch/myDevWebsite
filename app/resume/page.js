const ResumePage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen max-w-full sm:max-w-[70%] lg:max-w-[1080px] mx-auto">
      <div className="flex flex-col justify-start items-center max-w-screen-md">
        <div className="flex flex-col justify-center items-center w-screen">
          <h1 className="text-4xl text-center font-semibold animate-fade-in lowercase text-green-300 py-16">
            My Resume
          </h1>
        </div>
      </div>
      <section>
        <div className="flex flex-col gap-4 px-4 md:px-0 lg:px-14">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/4 p-4 animate-slide-in-left">
              <h3 className="text-3xl font-semibold">Mark Huebsch</h3>
              <h5 className="text-sm font-bold uppercase tracking-wider text-green-700">
                Frontend Developer
              </h5>
            </div>
            <div className="w-full md:w-3/4 p-4 animate-slide-in-right">
              <p className="mb-4">
                Mark Huebsch is a seasoned web developer and designer in
                Asheville, North Carolina, specializing in creating dynamic,
                user-focused digital experiences. With over 15 years of
                expertise in front-end development and UI/UX design, Mark
                delivers innovative solutions that bridge design and technology.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/4 p-4 animate-slide-in-left">
              <h3 className="text-3xl font-semibold">Technical Skills</h3>
            </div>
            <div className="w-full md:w-3/4 p-4 animate-slide-in-right space-y-4">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Strong—</strong> JavaScript, HTML, CSS/SCSS/LESS,
                  Adobe Creative Suite, WordPress, SEO, Responsive Web Design,
                  UI/UX Design & Development
                </li>
                <li>
                  <strong>Experienced—</strong> TypeScript, NodeJS, ReactJS,
                  NextJS, AngularJS, Git, Bootstrap, Tailwind CSS, JSON, jQuery,
                  RESTful API, ES6, MongoDB
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/4 p-4 animate-slide-in-left">
              <h3 className="text-3xl font-semibold">
                Professional Experience
              </h3>
            </div>
            <div className="w-full md:w-3/4 p-4 animate-slide-in-right space-y-4">
              <h5 className="text-lg font-bold uppercase tracking-wider text-green-300">
                Software Engineer | Sportsdigita (Jan 2022 - Dec 2024)
              </h5>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Played a key role in transforming the design software of
                  Sportsdigita’s flagship application, Digideck, from a
                  code-based editing system into an interactive and
                  user-friendly AngularJS based UI with RESTful APIs.
                </li>
                <li>
                  Developed 20+ interactive presentation editing plugins using
                  JavaScript, SCSS, and HTML, integrating features like flip
                  panels, image sliders, and video players with a focus on SOLID
                  and OOPS principles.
                </li>
                <li>
                  Converted legacy CommonJS modules to ES6 modules to improve
                  compatibility and enable tree shaking in accordance with
                  modern JavaScript practices.
                </li>
              </ul>
              <h5 className="text-lg font-bold uppercase tracking-wider text-green-300">
                Frontend Web Developer | Sportsdigita (Oct 2018 - Dec 2021)
              </h5>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Led the onboarding design team to develop and implement
                  complex client projects by using JavaScript, jQuery, HTML,
                  CSS, and Bootstrap. Delivered innovative solutions to meet
                  intricate client requirements, enhancing platform
                  functionality and driving software versatility.
                </li>
                <li>
                  Developed a custom animation library with CSS and, after being
                  promoted to the development team, set up JSON and helped
                  develop a user-friendly interface in the AngularJS based
                  platform. This upgrade allowed users to effortlessly select
                  and customize animations and settings, eliminating the need
                  for custom coding and significantly improving accessibility
                  and usability.
                </li>
                <li>
                  Developed custom templates for the Digideck platform,
                  including single slides, various navigation styles, and
                  complete presentation templates, establishing a standard that
                  streamlined project creation and enhanced user experience.
                </li>
              </ul>
              <h5 className="text-lg font-bold uppercase tracking-wider text-green-300">
                Web Developer & Digital Designer | HTK Marketing / Hailey Sault
                (Nov 2015 - Oct 2018)
              </h5>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Initially hired as a Digital Designer, I was quickly promoted
                  to Web Developer, where I managed all client websites. My
                  responsibilities included setting up email campaigns,
                  designing and developing microsites, and working with a
                  variety of content management systems. For new site builds, I
                  specialized in creating user-friendly solutions using
                  WordPress.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row mb-8">
            <div className="w-full md:w-1/4 p-4 animate-slide-in-left">
              <h3 className="text-3xl text-center font-semibold">Education</h3>
            </div>
            <div className="w-full md:w-3/4 p-4 animate-slide-in-right">
              <p className="font-bold">University of Minnesota, Duluth</p>
              <p>Bachelor of Fine Arts, Graphic Design | 2012</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumePage;
