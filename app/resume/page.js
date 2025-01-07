const ResumePage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen max-w-full sm:max-w-[70%] lg:max-w-[1200px] mx-auto">
      <div className="flex flex-col justify-start items-center max-w-screen-md">
        <div className="flex flex-col justify-center items-center w-screen">
          <h1 className="text-4xl text-center font-semibold animate-fade-in lowercase text-green-300 py-16">
            My Resume
          </h1>
        </div>
      </div>
      <section>
        <div className="container mx-auto max-w-5xl py-12 md:px-4">
          <div className="mx-4 grid gap-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-12 mb-8 text-center">
              <h3 className="text-3xl text-center font-semibold">
                Mark Huebsch
              </h3>
              <h5 className="text-sm text-center font-bold uppercase tracking-wider text-green-700">
                Frontend Developer
              </h5>
              <p className="mb-4">
                Mark Huebsch is a seasoned web developer and designer in
                Asheville, North Carolina, specializing in creating dynamic,
                user-focused digital experiences. With over 15 years of
                expertise in front-end development and UI/UX design, Mark
                delivers innovative solutions that bridge design and technology.
              </p>
              <h3 className="text-3xl text-center font-semibold">
                Technical Skills
              </h3>
              <ul>
                <li>
                  <strong>Strong—</strong> JavaScript, HTML, CSS/SCSS/LESS,
                  Adobe Creative Suite, WordPress, SEO, Responsive Web Design,
                  UI/UX Design & Development
                </li>
                <li>
                  <strong>Experienced—</strong> TypeScript, NodeJS, ReactJS,
                  NextJS, AngularJS, Git, Bootstrap, Tailwind CSS, JSON, jQuery,
                  RESTful API, ES6
                </li>
              </ul>
              <h3 className="text-3xl text-center font-semibold">
                Professional Experience
              </h3>
              <h5 className="text-sm text-center font-bold uppercase tracking-wider text-green-700">
                Software Engineer | Sportsdigita (2021 - 2024)
              </h5>
              <ul>
                <li>
                  Played a key role in transforming the design software of
                  Sportsdigita’s flagship application, Digideck, from a
                  code-based editing system into an interactive and
                  user-friendly AngularJS based UI with RESTful APIs.
                </li>
                <li>
                  Developed over 20 interactive presentation editing plugins
                  using JavaScript, SCSS, and HTML with an in-house JavaScript
                  framework that extended the Custom Web Component API. Each
                  plugin is a self-contained application and includes features
                  like flip panels, image sliders, video players, popup images,
                  and image galleries. By applying SOLID and OOPS principles, I
                  designed and implemented backend functionality, allowing users
                  to customize settings for each plugin with an enhanced UX.
                </li>
                <li>
                  Converted legacy CommonJS modules to ES6 modules to enable
                  tree shaking and align with modern JavaScript practices with
                  improved compatibility.
                </li>
              </ul>
              <h5 className="text-sm text-center font-bold uppercase tracking-wider text-green-700">
                Frontend Web Developer | Sportsdigita (2018 - 2021)
              </h5>
              <ul>
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
                  platform. This upgrade allowed users to eﬀortlessly select and
                  customize animations and settings, eliminating the need for
                  custom coding and significantly improving accessibility and
                  usability.
                </li>
                <li>
                  Developed custom templates for the Digideck platform,
                  including single slides, various navigation styles, and
                  complete presentation templates, establishing a standard that
                  streamlined project creation and enhanced user experience.
                </li>
              </ul>
              <h5 className="text-sm text-center font-bold uppercase tracking-wider text-green-700">
                Web Developer & Digital Designer | HTK Marketing / Hailey Sault
                (2015 - 2018)
              </h5>
              <ul>
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
              <h3 className="text-3xl text-center font-semibold">Education</h3>
              <p>University of Minnesota, Duluth</p>
              <p>Bachelor of Fine Arts, Graphic Design | 2012</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumePage;
