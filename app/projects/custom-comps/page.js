'use client';

import { motion } from 'framer-motion';
import VideoComponent from 'app/components/videoPlayer';

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

const CustomComponentsPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen max-w-full sm:max-w-[70%] lg:max-w-[1200px] mx-auto">
      <div className="min-h-screen">
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="text-4xl text-center font-semibold animate-fade-in lowercase text-green-300 py-16">
            Customizable Components
          </h1>
          <p className="w-3/4 text-center">
            With this project, I developed 20+ custom components with
            extensive configuration options. I created these from the ground up
            using primarily vanilla JavaScript, HTML, and SASS, ensuring
            seamless integration with an AngularJS-based software platform.
          </p>
        </div>

        {/* Section 1 */}
        <Section>
          <FadeInWhenVisible>
            <div className="w-full p-6">
              <h2 className="text-3xl font-bold text-green-700">
                presentation tools
              </h2>
              <p className="mt-4 text-lg">
                The components are design tools built for users to dynamically
                create layouts with content in an online presentation software.
              </p>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <div className="w-full p-6">
              <img
                src="/images/featured-components.png"
                alt="Section 1 Image"
                className="w-full h-auto object-cover"
              />
            </div>
          </FadeInWhenVisible>
        </Section>

        {/* Section 2 */}
        <Section reverse>
          <FadeInWhenVisible>
            <div className="w-full p-6">
              <h2 className="text-3xl font-bold text-green-700">
                custom settings
              </h2>
              <p className="mt-4 text-lg">
                Every component includes custom settings based on the capability
                of the component itself, as well as positioning, styling, and
                accessibility options.
              </p>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <div className="w-full p-6">
              <VideoComponent src="/videos/flip-panel-settings-vid.mp4" />
            </div>
          </FadeInWhenVisible>
        </Section>

        {/* Section 3 */}
        <Section>
          <FadeInWhenVisible>
            <div className="w-full p-6">
              <h2 className="text-3xl font-bold text-green-700">
                engaging design
              </h2>
              <p className="mt-4 text-lg">
                Ultimately, the components deliver a distinctive, compelling,
                and visually impressive presentation.
              </p>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <div className="w-full p-6">
              <VideoComponent src="/videos/gameday-technologies-menu.mp4" />
            </div>
          </FadeInWhenVisible>
        </Section>
      </div>
    </div>
  );
};

export default CustomComponentsPage;
