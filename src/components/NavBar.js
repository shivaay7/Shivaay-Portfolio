import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  FacebookIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import { motion } from "framer-motion"; // Import motion from 'framer-motion'
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1.5px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"
          } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();


  const handleClick = () => {
    toggle();
    router.push(href)
  }

  return (
    <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}
      <span
        className={`h-[1.5px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"
          } dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [IsOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!IsOpen);
  };

  return (
    <>
      <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8 ">
        <button
          className=" flex-col items-center justify-center hidden lg:flex"
          onClick={handleClick}
        >
          <span
            className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm -translate-y-0.5 transition-[1] ${IsOpen ? "rotate-45 translate-y-1" : "-translate -y-0.5"
              }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 ${IsOpen ? "opacity-0" : "opacity-100"
              }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm translate-y-0.5 transition-[1] ${IsOpen ? "-rotate-45 -translate-y-1" : "translate -y-0.5"
              }`}
          ></span>
        </button>
        
        {/* mobile view */ }
        {
          IsOpen ?

            
            <motion.div initial={{scale:0,opacity:0,x:"-50%" , y:"-50%"}} animate={{scale:1, opacity:1,transition:{duration:0.25}}}    className="min-w-[70vw] flex flex-col fixed justify-between items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">
        <nav className="flex items-center flex-col justify-center ">
          <CustomMobileLink href="/" title="Home" className=" text-xl text-center" toggle={handleClick} />
          <CustomMobileLink href="/about" title="About" className=" text-xl text-center " toggle={handleClick} />
          <CustomMobileLink
            href="/projects"
            title="Projects"
            className=" text-xl text-center"
            toggle={handleClick}
            
          />
        </nav>

        <nav className="flex justify-center flex-wrap items-center mt-5">
          <motion.a
            href="https://www.instagram.com/s__hivaa__y/"
            target="_blank"
            whileHover={{ y: -2 }}
            className="w-7 mx-4"
            whileTap={{ scale: 0.9 }}
          >
            <InstagramIcon />
          </motion.a>
          <motion.a
            href="https://github.com/shivaay7"
            target="_blank"
            whileHover={{ y: -2 }}
            className="w-7 mx-4  bg-light rounded-full dark:bg-dark "
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/shivam-mishra-0965661bb/"
            target="_blank"
            whileHover={{ y: -2 }}
            className="w-7 mx-4"
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>
          {/* <motion.a
            href="https://gmail.com"
            target="_blank"
            whileHover={{ y: -2 }}
            className="w-7 mx-4"
            whileTap={{ scale: 0.9 }}
          >
            <GmailIcon />
          </motion.a> */}
          <motion.a
            href="https://www.facebook.com/profile.php?id=100088076251631"
            target="_blank"
            whileHover={{ y: -2 }}
            className="w-7 ml-4"
            whileTap={{ scale: 0.9 }}
          >
            <FacebookIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-6 flex items-center justify-center rounded-full p-1 ${mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"
              }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </motion.div>

      :null
        }

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4 text-xl" />
          <CustomLink href="/about" title="About" className="mx-8 text-xl" />
          <CustomLink
            href="/projects"
            title="Projects"
            className="mr-6 text-xl"
          />
        </nav>

        <nav className="flex justify-center flex-wrap items-center">
          <motion.a
            href="https://www.instagram.com/s__hivaa__y/"
            target="_blank"
            whileHover={{ y: -2 }}
            className="w-7 mx-4"
            whileTap={{ scale: 0.9 }}
          >
            <InstagramIcon />
          </motion.a>
          <motion.a
            href="https://github.com/shivaay7"
            target="_blank"
            whileHover={{ y: -2 }}
            className="w-7 mx-4"
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/shivam-mishra-0965661bb/"
            target="_blank"
            whileHover={{ y: -2 }}
            className="w-7 mx-4"
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>
          {/* <motion.a
            href="https://gmail.com"
            target="_blank"
            whileHover={{ y: -2 }}
            className="w-7 mx-4"
            whileTap={{ scale: 0.9 }}
          >
            <GmailIcon />
          </motion.a> */}
          <motion.a
            href="https://www.facebook.com/profile.php?id=100088076251631"
            target="_blank"
            whileHover={{ y: -2 }}
            className="w-7 ml-4"
            whileTap={{ scale: 0.9 }}
          >
            <FacebookIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-6 flex items-center justify-center rounded-full p-1 ${mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"
              }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      <div className="absolute z-50 left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header >
    </>
  );
};

export default NavBar;
