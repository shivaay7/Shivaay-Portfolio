import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y }) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-medium bg-dark dark:bg-light text-light dark:text-dark py-3 px-6 shadow-dark cursor-pointer text-2xl absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent  xs:text-dark xs:dark:text-light xs:font-bold sm:text-light sm:dark:bg-light sm:bg-dark sm:dark:text-dark sm:font-bold'
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y , transition:{ duration: 1.5 } }}
            viewport={{ once: true }}>
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
            <h2 className="font-bold text-9xl mt-64 w-full text-center md:text-6xl md:mt-32">Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circulardark lg:h-[80vh] sm:h-[60vh] xs:h-[40vh] lg:bg-circularLightlg lg:dark:circularDarklg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm '>
                <motion.div className='flex items-center justify-center rounded-full font-medium bg-dark dark:bg-light text-light dark:text-dark p-6 shadow-dark cursor-pointer text-2xl lg:p-6 md:p-4 xs:text-xs xs:p-2'
                    whileHover={{ scale: 1.05 }}>
                    WEB
                </motion.div>
                <Skill name="HTML" x="-20vw" y='7vw' />
                <Skill name="CSS" x="-5vw" y='-10vw' />
                <Skill name="Javascript" x="20vw" y='6vw' />
                <Skill name="ReactJS" x="0vw" y='12vw' />
                <Skill name="NextJS" x="-20vw" y='-17vw' />
                <Skill name="Web Design" x="32vw" y='0vw' />
                <Skill name="MongoDB" x="0vw" y='-20vw' />
                <Skill name="GSAP" x="32vw" y='-15vw' />
                <Skill name="LocomotiveJS" x="18vw" y='16vw' />
                <Skill name="Bootstrap" x="14vw" y='-12vw' />
                <Skill name="Java" x="-30vw" y='13vw' />
                <Skill name="MySQL" x="-35vw" y='0vw' />
                <Skill name="Tailwind CSS" x="-10vw" y='20vw' />
                <Skill name="NodeJS" x="-39vw" y='-10vw' />
                <Skill name="Express JS" x="-20vw" y='-5vw' />



            </div>
        </>
    )
}

export default Skills