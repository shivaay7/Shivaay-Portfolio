import { motion } from 'framer-motion'
import React from 'react'

const TransitionEffect = () => {
  return (
    <>
        <motion.div className='fixed top-0 bottom-0 right-[100%] w-screen h-screen z-[999999] bg-orange-500'
            initial={{x:"100%", width:"100%"}}
            animate={{x:"0%",width:"0%"}}
            exit={{x:["0%","100%"], width:["0%","100%"]}}
            transition={{duration:0.8, ease:"easeInOut"}}
        />
         <motion.div className='fixed top-0 bottom-0 right-[100%] w-screen h-screen z-[9999] bg-white'
            initial={{x:"100%", width:"100%"}}
            animate={{x:"0%",width:"0%"}}
            transition={{delay:0.2,duration:0.8, ease:"easeInOut"}}
        />
         <motion.div className='fixed top-0 bottom-0 right-[100%] w-screen h-screen z-[99] bg-green-700'
            initial={{x:"100%", width:"100%"}}
            animate={{x:"0%",width:"0%"}}
            transition={{delay:0.4,duration:0.8, ease:"easeInOut"}}
        />
    </>
  )
}

export default TransitionEffect