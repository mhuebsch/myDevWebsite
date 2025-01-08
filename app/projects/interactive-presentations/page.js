'use client';

import { motion } from 'framer-motion';

const Section = ({ children, reverse }) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } items-center justify-between w-full py-10`}
    >
      {children}
    </div>
  );
};

const FadeInWhenVisible = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

const InteractivePresentationsPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen max-w-full sm:max-w-[70%] lg:max-w-[1200px] mx-auto">
      <div className="min-h-screen">
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="text-4xl text-center font-semibold animate-fade-in lowercase text-green-300 pt-24 sm:py-16">
            Interactive Presentations
          </h1>
          <p className="w-full px-8 sm:px-0 sm:w-3/5 text-center py-4">
            These presentations were built in the Digideck, Sportsdigita's
            flagship application, using JavaScript, jQuery, HTML, CSS, and
            Bootstrap.
          </p>
          <p className="w-full px-8 sm:px-0 sm:w-3/5 text-center py-4">
            They are all fully custom with varius integrations and
            interactivity to meet each client's needs. Below are just some
            examples of my favorites, as I built hundreds of these during my
            first years at Sportsdigita.
          </p>
        </div>

        {/* Section 1 */}
        <Section>
          <FadeInWhenVisible>
            <div className="w-full p-6 sm:p-12">
              <h2 className="text-3xl font-bold text-green-700">
                Hailey Sault
              </h2>
              <p className="my-8 text-lg">
                Hailey Sault (hay-lee-soo) is a marketing agency with expertise
                focused on health care. test
              </p>
              <Link
                href="https://haileysault.com/"
                target="_blank"
                className="text-green-300 hover:text-sky-400 ext-nav-link"
              >
                Visit Hailey Sault
              </Link>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <div className="flex flex-row">
              <div className="w-1/2 p-6 flex flew-col sm:flex-row justify-center">
                <img
                  src="/images/desktop-hailey-sault.png"
                  alt="image of hailey sault website on dekstop computer"
                  className="w-auto h-auto max-h-96 object-contain"
                />
              </div>
              <div className="w-1/2 flex flew-col sm:flex-row justify-center">
                <img
                  src="/images/screens-hailey-sault.png"
                  alt="image of hailey sault website on different screens"
                  className="w-auto h-auto max-h-96 object-contain"
                />
              </div>
            </div>
          </FadeInWhenVisible>
        </Section>

        {/* Section 2 */}
        <Section reverse>
          <FadeInWhenVisible>
            <div className="w-full p-6 sm:p-12">
              <h2 className="text-3xl font-bold text-green-700">
                Community Action Duluth
              </h2>
              <p className="my-8 text-lg">
                Community Action Duluth (CAD) is a nonprofit organization
                fighting poverty through community engagement in the Duluth, MN
                area.
              </p>
              <Link
                href="https://www.communityactionduluth.org/"
                target="_blank"
                className="text-green-300 hover:text-sky-400 ext-nav-link"
              >
                Visit Community Action Duluth
              </Link>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <div className="flex flex-row">
              <div className="w-1/2 flex flew-col sm:flex-row justify-center">
                <img
                  src="/images/screens-community-action-duluth.png"
                  alt="image of community action duluth website on different screens"
                  className="w-auto h-auto max-h-96 object-contain"
                />
              </div>
              <div className="w-1/2 flex flew-col sm:flex-row justify-center">
                <img
                  src="/images/desktop-community-action-duluth.png"
                  alt="image of community action duluth website on desktop computer"
                  className="w-auto h-auto max-h-96 object-contain"
                />
              </div>
            </div>
          </FadeInWhenVisible>
        </Section>

        {/* Section 3 */}
        <Section>
          <FadeInWhenVisible>
            <div className="w-full p-6 sm:p-12">
              <h2 className="text-3xl font-bold text-green-700">
                CarePoint Health
              </h2>
              <p className="my-8 text-lg">
                CarePoint Health is a three-hospital company serving the
                northern New Jersey area.
              </p>
              <Link
                href="https://carepointhealth.org/"
                target="_blank"
                className="text-green-300 hover:text-sky-400 ext-nav-link"
              >
                Visit CarePoint Health
              </Link>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <div className="flex flex-row">
              <div className="w-1/2 p-6 flex flew-col sm:flex-row justify-center">
                <img
                  src="/images/desktop-carepoint-health.png"
                  alt="image of carepoint health website on dekstop computer"
                  className="w-auto h-auto max-h-96 object-contain"
                />
              </div>
              <div className="w-1/2 flex flew-col sm:flex-row justify-center">
                <img
                  src="/images/screens-pampered-pregnancy.png"
                  alt="image of carepoint health's pampered pregnancy website on different screens"
                  className="w-auto h-auto max-h-96 object-contain"
                />
              </div>
            </div>
          </FadeInWhenVisible>
        </Section>

        {/* Section 4 */}
        <Section reverse>
          <FadeInWhenVisible>
            <div className="w-full p-6 sm:p-12">
              <h2 className="text-3xl font-bold text-green-700">
                The Belive In Better Project
              </h2>
              <p className="my-8 text-lg">
                The Believe in Better Project is a first-of-its-kind annual
                event bringing together health care innovators and visionaries
                from across the country.
              </p>
              <Link
                href="https://www.believeinbetterproject.com/"
                target="_blank"
                className="text-green-300 hover:text-sky-400 ext-nav-link"
              >
                Visit The Believe In Better Prject
              </Link>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <div className="flex flex-row">
              <div className="w-1/2 flex flew-col sm:flex-row justify-center">
                <img
                  src="/images/screens-believe-in-better.png"
                  alt="image of community action duluth website on different screens"
                  className="w-auto h-auto max-h-96 object-contain"
                />
              </div>
              <div className="w-1/2 flex flew-col sm:flex-row justify-center">
                <img
                  src="/images/desktop-believe-in-better.png"
                  alt="image of community action duluth website on desktop computer"
                  className="w-auto h-auto max-h-96 object-contain"
                />
              </div>
            </div>
          </FadeInWhenVisible>
        </Section>
      </div>
    </div>
  );
};

export default InteractivePresentationsPage;
