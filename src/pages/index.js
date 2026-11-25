import Head from 'next/head';
import Landing from '@/components/Landing';
import About from '../components/About';
import Experience from '@/components/Experience';
import Tech from '@/components/Tech';
import Work from '@/components/Work';
import Feedbacks from '@/components/Feedbacks';
import Contact from '@/components/Contact';
import { experiences, testimonials } from '@/constants';

export default function Home() {
  return (
    <main className=" text-white">
      <Head>
        <title>Mohamed Yahia | Software Engineer</title>
        <meta
          name="description"
          content="Portfolio of Mohamed Yahia, a Software Engineer at Advansys ESC."
        />
      </Head>
      <Landing />
      <About />
      {experiences.length > 0 && <Experience />}
      <Tech />
      <Work />
      {testimonials.length > 0 && <Feedbacks />}
      <Contact />
    </main>
  );
}
