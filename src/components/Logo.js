import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);  

const Logo = () => {
  const style = {
    fontFamily: "Aquire",
  }


  return (
    <div className='flex items-center justify-center mt-2 '>
      <MotionLink href='/' style={style}
        className='w-16 h-16 flex justify-center items-center rounded-full bg-dark text-light text-2xl border border-solid border-transparent dark:border-light'
        whileHover={{
          backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
          transition: {
            duration: 1,
            repeat: Infinity
          }
        }}
      >
        SM
      </MotionLink>
    </div>
  );
}

export default Logo;
