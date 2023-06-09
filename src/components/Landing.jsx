import Layout from '../components/Layout';
import Image from 'next/image';
import profilePic1 from '../../public/images/profile/profile.png';
import AnimatedText from '../components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '../components/Icons';
import HireMe from '@/components/HireMe';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';

const Landing = () => {
  return (
    <main className="flex items-center text-light w-full min-h-screen">
      <Layout className="pt-0 md:pt-16 sm:pt-8">
        <div className="flex items-center justify-between w-full lg:flex-col">
          <div className="w-1/2 md:w-full">
            <Image
              src={profilePic1}
              alt="Yahia"
              className="w-full h-auto lg:hidden md:inline-block md:w-full"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
            <AnimatedText
              text="Turning Vision Into Reality With Code And Design."
              className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl"
            />
            <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications&#46; Explore my latest projects
              and articles, showcasing my expertise in React&#46;js and web
              development&#46;
            </p>
            <div className="flex items-center self-start mt-2 lg:self-center">
              <Link
                href="/cv.pdf"
                target="_blank"
                className="flex items-center bg-green-400	 text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-transparent
                       hover:text-green-400 border-2 border-solid border-transparent hover:border-green-400 transition-all md:p-2 md:px-4 md:text-base"
                download={true}
              >
                Resume <LinkArrow className={'w-6 ml-1'} />
              </Link>
              <Link
                href="mailto:mohamdyahia@outlook.com"
                target="_blank"
                className="ml-4 text-lg font-medium capitalize text-light hover:text-green-400 md:text-base"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>
      <HireMe />
      <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
        <Image src={lightBulb} alt="Lightbulb" className="w-full h-auto" />
      </div>
    </main>
  );
};

export default Landing;
