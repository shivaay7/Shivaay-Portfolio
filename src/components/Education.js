import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import LiIcon from './LiIcon';

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null)
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]'>
        <LiIcon reference={ref} />
        <motion.div
            initial={{ y: 75 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, type: "spring" }}
        >
            <h3 className='capitalize font-bold text-3xl -ml-1 sm:text-2xl xs:text:xl'>{type}&nbsp;</h3>
            <span className='capitalize font-[600]  text-dark/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full  md:text-sm'>{info}</p>
        </motion.div>
    </li>
}

const Education = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(

        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <>
            <div className="my-64 xs:mt-56 ">
                <h2 className='font-bold text-9xl mb-32 w-full text-center lg:text-8xl md:text-6xl sm:text-5xl xs:text-5xl md:mb-16'>Education</h2>
                <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                    <motion.div style={{ scaleY: scrollYProgress }} ref={ref} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-2px md:left-[30px] xs:left-[18px] xs:w-[1.5px]' />
                    <ul className='w-full flex flex-col items-start justify-between ml-4  xs:ml-2'>
                        <Details type={"Bachelor of Technology In Computer Science and Engineering"} time={"2022-2024"} place={"LNCT Excellence Bhopal(Madhya Pradesh) India"} info={"Relevant courses included Date Structures and Algorithms, Computer Systems and Networking"} />

                        <Details type={"Inter Schooling"} time={"2017-2019"} place={"Kendriya Vidyalaya S.E.C.L. Dhanpuri(M.P.) India"} info={"CourseWork included Specification in PCM with Computer Science"} />

                        <Details type={"Secondary Schooling"} time={"2017"} place={"Carmel Convent Sr. Sec. School Amlai Shahdol(M.P.) India"} info={"CourseWork included integral knowledge development along with personality development"} />
                    </ul>

                </div>
            </div>
        </>
    )
}

export default Education