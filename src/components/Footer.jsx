import React from 'react';
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-green-400 font-medium text-lg mt-15 sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span className="text-light">
          {new Date().getFullYear()} &copy; All Rights Reserved
        </span>
        <div className="flex items-center text-light lg:py-2">
          Build With{' '}
          <span className="text-green-400 text-2xl px-1">&#9825;</span>
          by &nbsp;
          <Link href="/" className="text-light">
            Yahia
          </Link>
        </div>
        <Link href="/" className="text-light">
          Say hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
