import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null)
  return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
    <LiIcon reference={ref} />
    <motion.div
      initial={{ y: 75 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1, type: "spring" }}



    >
      <h3 className='capitalize font-bold text-3xl -ml-1 sm:text-2xl xs:text:xl'>{position}&nbsp;<a className='text-red-700 capitalize' href={companyLink} target='_blank'>@{company}</a></h3>
      <span className='capitalize font-[600] mb-2 text-dark/75 xs:text-sm'>
        {time} | {address}
      </span>
      <p className='font-medium w-full md:text-sm'>{work}</p>
    </motion.div>
  </li>
}

const Experience = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll(

    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )
  return (
    <>
      <div className="my-64 xs:my-32 ">
        <h2 className='font-bold text-9xl mb-32 w-full text-center lg:text-8xl md:text-6xl sm:text-5xl xs:text-5xl md:mb-16'>Experience</h2>
        <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
          <motion.div style={{ scaleY: scrollYProgress }} ref={ref} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-2px md:left-[30px] xs:left-[18px] xs:w-[1.5px]' />
          <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
            <Details position={"Web Mentor"} companyLink={"https://sheryians.com/"} company={"Sheryians Coding School"} time={"Sep 2022-April 2023"} address={"23-B, Near Chai Sutta Bar Indrapuri Sector C, Bhopal(MP),462041"} work={"Instructed and mentored 100+ students at Sheryians Coding School about Front-End Development. Creating interesting projects and awwwards website with and for Students."} />

            <Details position={"Web Intern"} companyLink={"https://oasisinfobyte.com/"} company={"Owasis InfoByte"} time={"Dec 2022-Feb 2023"} address={"Satya Niketan, South West New Delhi, India - 110021"} work={"Created Multiple Project Assignments of frontend Web Dev. Designed the UI/Ux."} />

            <Details position={"Web Intern"} companyLink={"https://bharatintern.live/b/i/index.html"} company={"Bharat Intern"} time={"April 2022-June 2023"} address={"Bhopal, Madhya Pradesh India"} work={"Created Multiple Project Assignments of frontend Web Dev. Designed the UI/Ux."} />
          </ul>

        </div>
      </div>
    </>
  )
}

export default Experience