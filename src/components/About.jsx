import Image from "next/image";
import profilePic2 from "../../public/images/profile/profile2.JPG";
import AnimatedText from "./AnimatedText";
import Layout from "./Layout";

const About = () => {
  return (
    <main
      id="about"
      className="flex w-full flex-col items-center justify-center"
    >
      <Layout className="pt-16">
        <AnimatedText text="Passion Fuels Purpose!" className="mb-16" />
        <div className="grid w-full grid-cols-8 gap-16">
          <div className="col-span-3 flex flex-col items-start justify-start">
            <h2 className="mb-4 text-lg font-bold uppercase text-light/75">
              Biography
            </h2>

            <p className="text-light font-medium">
              Hi &#44; I&#39;m CodeBucks &#44; a web developer and UI/UX
              designer with a passion for creating beautiful &#44; functional
              &#44; and user-centered digital experiences&#46; With 4 years of
              experience in the field&#46; I am always looking for new and
              innovative ways to bring my clients&#39; visions to life&#46; to
              life&#46;
            </p>
            <p className="my-4 font-medium">
              I believe that design is about more than just making things look
              pretty – it&#39;s about solving problems and creating intuitive
              &#44; enjoyable experiences for users&#46;
            </p>
            <p className="font-medium text-red-600">
              Whether I&#39;m working on a website &#44; mobile app &#44; or
              other digital product &#44; I bring my commitment to design
              excellence and user-centered thinking to every project I work
              on&#46; I look forward to the opportunity to bring my skills and
              passion to your next project&#46;
            </p>
          </div>
          <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
            <Image
              src={profilePic2}
              alt="Yahia"
              className="w-full h-auto rounded-2xl"
            />
          </div>
          <div className="col-span-2 flex flex-col items-end justify-between">
            <div className="flex flex-col items-end justify-center text-light">
              <span className="inline-block text-7xl font-bold ">50+</span>
              <h2 className="text-xl font-medium capitalize text-light/75">
                satisfied clients
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center text-light">
              <span className="inline-block text-7xl font-bold">40+</span>
              <h2 className="text-xl font-medium capitalize text-light/75">
                projects completed
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center text-light">
              <span className="inline-block text-7xl font-bold ">2+</span>
              <h2 className="text-xl font-medium capitalize text-light/75">
                years of experience
              </h2>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default About;
