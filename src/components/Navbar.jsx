import Link from 'next/link';
import React, { useState } from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { GithubIcon, LinkedInIcon, TwitterIcon } from './Icons';
import { motion } from 'framer-motion';

const CustomLink = ({ href, title, className }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group text-light`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-green-400 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? ' w-full' : ' w-0'
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = '', toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? ' w-full' : ' w-0'
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className=" flex-col justify-center items-center hidden lg:flex"
        onClick={toggle}
      >
        <span
          className={`bg-green-400 transition-all duration-300 ease-out h-0.5 w-6 rounded-s  ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-green-400 transition-all duration-300 ease-out h-0.5 w-6 rounded-s my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-green-400 transition-all duration-300 ease-out h-0.5 w-6 rounded-s  ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          } `}
        ></span>
      </button>
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="about" className="mx-4" />
          <CustomLink href="#projects" title="Projects" className="mx-4" />
          <CustomLink href="#articles" title="Articles" className="ml-4" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://twitter.com/mohamedyahia231"
            target="_blank"
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://github.com/MohamedYahia831"
            target="_blank"
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/mohamdyahia/"
            target="_blank"
            className="w-6 ml-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw]  flex-col justify-between items-center hidden lg:flex fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-light/75 rounded-lg backdrop-blur-md py-32 "
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink href="/" title="Home" toggle={toggle} />
            <CustomMobileLink href="/about" title="about" toggle={toggle} />
            <CustomMobileLink
              href="#projects"
              title="Projects"
              toggle={toggle}
            />
            <CustomMobileLink
              href="#articles"
              title="Articles"
              toggle={toggle}
            />
          </nav>
          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://twitter.com/mohamedyahia231"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://github.com/MohamedYahia831"
              target="_blank"
              className="w-6 mx-3 bg-light rounded-full sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mohamdyahia/"
              target="_blank"
              className="w-6 ml-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
