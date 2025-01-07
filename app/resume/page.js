const ResumePage = () => {
  return (
    <div>
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
            <div className="col-span-12 sm:col-span-3">
              <div className="mb-14 text-center">
                <h3 className="text-3xl font-semibold">Mark Huebsch</h3>
                <span className="text-sm font-bold uppercase tracking-wider text-green-700">
                  Frontend Developer
                </span>
              </div>
            </div>
            <div className="relative col-span-12 space-y-6 sm:col-span-9 md:px-4">
              <div className="mb-14">
                <p>
                  Mark Huebsch is a seasoned web developer and designer in
                  Asheville, North Carolina, specializing in creating dynamic,
                  user-focused digital experiences. With over 15 years of
                  expertise in front-end development and UI/UX design, Mark
                  delivers innovative solutions that bridge design and
                  technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumePage;
