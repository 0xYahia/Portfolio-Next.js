import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import Image from 'next/image';

import { services } from '../constants';
import { SectionWrapper } from '@/hoc';
import { fadeIn } from '../utils/motion';
import AnimatedText from '../components/AnimatedText';
import Layout from '../components/Layout';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="w-[250px] sm:w-full">
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card  flex justify-around "
      >
        <div className="bg-violet-950 rounded-[30px] py-5 px-4 min-h-[320px] flex justify-evenly items-center flex-col w-[90%] ">
          <Image src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center ">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <main
        id="about"
        className="flex w-full flex-col items-center justify-center"
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 text-light sm:gap-8">
            <div className="col-span-5 flex flex-col items-start justify-center xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-light/75">
                Biography
              </h2>

              <p className="font-medium">
                Hi, I&apos;m Yahia, a Software Engineer at Advansys ESC.
              </p>
              <p className="my-4 font-medium">
                I build web applications with JavaScript and TypeScript, using
                Angular, React and Next.js on the front end and Node.js,
                Express and NestJS on the back end.
              </p>
              <p className="font-medium">
                I&apos;m a graduate of the Information Technology Institute
                (ITI) 9-month Web and UI Development program.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark  p-8 xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-light" />
              <Image
                src="/images/profile/profile3.JPG"
                width={80}
                height={80}
                alt="Yahia"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </Layout>
      </main>
      <div className="mt-20 flex w-full flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
