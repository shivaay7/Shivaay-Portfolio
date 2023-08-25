import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { animate } from 'framer-motion';

const LiIcon = ({ reference }) => { // Make sure to receive props as an object
    const { scrollYProgress } = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"],
        }
    );

    return (
        <figure className='absolute left-0 stroke-dark dark:stroke-light'>
            <svg className='-rotate-90 md:w-[65px] xs:w-[40px] xs:-left-10' width="75" height="75" viewBox='0 0 100 100'>
                <circle cx="75" cy="50" r="20" className='stroke-red-700 stroke-1 fill-none ' />
                {/* Apply motion to the circle with pathLength */}
                <motion.circle
                    cx="75"
                    cy="50"
                    r="20"
                    className='stroke-[5px] fill-light dark:fill-dark'
                    style={{ pathLength: scrollYProgress }}
                />
                <circle cx="75" cy="50" r="10" className='animate-pulse stroke-1 fill-red-700 ' />
            </svg>
        </figure>
    );
};

export default LiIcon;
