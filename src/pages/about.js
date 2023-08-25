import React, { useEffect, useRef } from "react";
import Head from "next/head";
import AnimatedText from "./../components/AnimatedText";
import Layout from "./../components/Layout";
import Image from "next/image";
import profile_pic from "../../public/images/profile/profile_image3.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import { Montserrat } from "next/font/google";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};
const about = () => {
  const fontas = {
    fontFamily: "Montserrat",
  };

  return (
    <>
      <Head>
        <title>Shivaay | About Page</title>
        <meta name="Description" content="Any Description" />
      </Head>

      <TransitionEffect />

      <main className="flex w-full flex-col items-center justify-center dark:text-light overflow-x-hidden">
        <Layout className="pt-8">
          <AnimatedText
            text="F0RTES FORTUNA ADIUVAT"
            className="mb-16 w-full lg:!text-7xl md:!text-7xl sm:!text-6xl lg:w-full md:w-full sm:text-center sm:mb-8"
            style={fontas}
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-3xl font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium text-xl ">
                Hi, I am <span className="text-red-700">Shivam Mishra</span>, a
                web developer and UI/UX designer with a passion for creating
                beautiful, functional, and user-centered digital experiences.
                With 1.5 years of experience in the field. I am always looking
                for new and innovative ways to bring my clients
                 visions to
                life.
              </p>
              <p className="font-medium my-4 text-xl ">
                I believe that design is about more than just making things look
                pretty – it is about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium text-xl ">
                {" "}
                Whether I am working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8 md:w-full ">
              <div className="absolute top-1 -right-3 -z-10 w-[102%] h-[102%] rounded-2xl bg-dark dark:bg-light" />
              <Image
                src={profile_pic}
                alt="Hi"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col itmes-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3 ">
              <div className="flex flex-col items-end justify-center xl:items-center ">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={20} />+{" "}
                </span>
                <h2 className=" text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  FrontEnd Projects
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={5} />
                </span>
                <h2 className=" text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  FullStack Projects
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={1.5} />+
                </span>
                <h2 className=" text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of Experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
