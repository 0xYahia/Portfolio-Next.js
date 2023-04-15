import React from 'react';
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-black">
      <Layout className="py-8 flex items-center justify-between">
        <span>Rights</span>
        <Link href="/">Yahia</Link>
        <Link href="/">Say hello</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
