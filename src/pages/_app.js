import Design from '@/components/Design';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`w-full h-screen`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="{`${montserrat.variable} font-mont  w-full min-h-screen}` bg-banner-bg ">
        {/* <Design></Design> */}
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </div>
  );
}
