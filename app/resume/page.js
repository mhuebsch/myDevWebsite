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
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/4 p-4 animate-slide-in-left">
              <h3 className="text-3xl font-semibold">Mark Huebsch</h3>
              <h5 className="text-sm font-bold uppercase tracking-wider text-green-700">
                Frontend Developer
              </h5>
            </div>
            <div className="w-full md:w-3/4 p-4 animate-fade-in">
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
            <div className="w-full md:w-3/4 p-4 animate-fade-in space-y-4">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Strong—</strong> JavaScript, HTML, CSS/SCSS/LESS...
                </li>
                <li>
                  <strong>Experienced—</strong> TypeScript, NodeJS...
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
            <div className="w-full md:w-3/4 p-4 animate-fade-in space-y-4">
              <h5 className="text-lg font-bold uppercase tracking-wider text-green-300">
                Software Engineer | Sportsdigita (2021 - 2024)
              </h5>
              <ul className="list-disc pl-5 space-y-2">
                <li>Played a key role in transforming...</li>
                <li>Developed over 20 interactive plugins...</li>
                <li>Converted legacy CommonJS modules...</li>
              </ul>
              <h5 className="text-lg font-bold uppercase tracking-wider text-green-300">
                Frontend Web Developer | Sportsdigita (2018 - 2021)
              </h5>
              <ul className="list-disc pl-5 space-y-2">
                <li>Led the onboarding design team...</li>
                <li>Developed a custom animation library...</li>
                <li>Developed custom templates...</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row mb-8">
            <div className="w-full md:w-1/4 p-4 animate-slide-in-left">
              <h3 className="text-3xl text-center font-semibold">Education</h3>
            </div>
            <div className="w-full md:w-3/4 p-4 animate-fade-in">
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
