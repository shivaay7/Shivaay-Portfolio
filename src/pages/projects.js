import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText"; // Remove curly braces for default import
import Link from "next/link";
import Image from "next/image"; // Remove curly braces for default import
import { GithubIcon } from "@/components/Icons";
import React from "react";
import p1 from "../../public/images/projects/canvas (1).png"; // Remove curly braces for direct import
import p2 from "../../public/images/projects/canvas (2).png";
import p3 from "../../public/images/projects/canvas (3).png";
import p4 from "../../public/images/projects/canvas (6).png";
import p5 from "../../public/images/projects/canvas (5).png";
import p6 from "../../public/images/projects/canvas.png";
import Head from "next/head"; // Remove curly braces for default import
import TransitionEffect from "@/components/TransitionEffect";

const FeaturedProject = ({ type, title, summary, img, links, github }) => {
  return (
    <article className="w-full h-[70vh] flex items-center justify-between rounded-3xl border border-solid  bg-light shadow-2xl mt-3 overflow-hidden dark:shadow-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 xs:shadow-lg  ">
      <Link
        href={links}
        passHref={true}
        target="_blank"
        className="w-1/2 h-full cursor-pointer overflow-hidden rounded-lg relative lg:w-full"
      >
        <Image src={img} alt={title} className="w-full h-full lg:w-full"  priority
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,50vw" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-red-700 font-medium text-xl xs:text-base">{type}</span>

        <Link
          href={links}
          passHref={true}
          target="_blank"
          className="hover:underline underline-offset-5 "
        >
          <h2 className="my-2 full text-left text-4xl font-bold sm-text-sm">{title}</h2>
        </Link>

        <p className="my-2 font-medium text-dark sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center justify-between">
          <Link href={github} passHref={true} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={links}
            passHref={true}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-medium sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, summary, img, links, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid shadow-2xl bg-light p-6 relative overflow-hidden dark:shadow-light xs:p-6 xs:shadow-md ">
      <Link
        href={links}
        passHref={true}
        target="_blank"
        className="w-1/2 h-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-full"  priority
                 />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-red-700 font-medium text-xl lg:text-lg md:textbase">{type}</span>

        <Link
          href={links}
          passHref={true}
          target="_blank"
          className="hover:underline underline-offset-5 "
        >
          <h2 className="my-2 full text-left text-3xl font-bold lg:text=2xl">{title}</h2>
        </Link>

        <div className="mt-2 w-full flex items-center justify-between">
          <Link
            href={links}
            passHref={true}
            target="_blank"
            className="   text-lg font-medium hover:underline md:text-base"
          >
            Visit
          </Link>

          <Link href={github} passHref={true} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};
const projects = () => {
  // Change component name to start with an uppercase letter
  return (
    <>
      <Head>
        <title>Shivaay | Projects Page</title>
        <meta name="Description" content="Any Description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-x-hidden">
        <Layout className="pt-16">
          <AnimatedText text={"Creation Is Charismatic !"} className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-5xl xs:!text-5xl"/>
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24  sm:gap-x-4">
            <div className="col-span-12">
              <FeaturedProject
                type={"Mernstack Project"}
                title={"Affable"}
                summary={
                  "Affable is a Food Delivery app which is a complete Mern-stack application using ReactJS, NodeJS, Bootstrap, MongoDB, ExpressJS, BcryptJS, Context-API"
                }
                img={p1}
                links="https://affablefrontend.onrender.com"
                github="https://github.com/shivaay7/AFFABLE" // Replace with actual GitHub link
              />
            </div>
            <div className="col-span-6 xs:col-span-12">
              <Project
                type={"Canvas Project || PC Oriented"}
                title={"Cuban's Edge"}
                img={p3}
                links="https://shivaay7.github.io/Cuban/"
                github="https://github.com/shivaay7/Cuban" // Replace with actual GitHub link
              />
            </div>
            <div className="col-span-6 xs:col-span-12">
              <Project
                type={"Canvas Project || PC Oriented"}
                title={"Cyberfiction"}
                img={p6}
                links="https://shivaay7.github.io/Cyberfiction/"
                github="https://github.com/shivaay7/Cyberfiction" // Replace with actual GitHub link
              />
            </div>
            <div className="col-span-12 ">
              <FeaturedProject
                type={"Mernstack Project"}
                title={"Procure"}
                summary={
                  "Procure, a mernstack application using ReactJS, NodeJS, Bootstrap, MongoDB, ExpressJS, BcryptJS, Context-API"
                }
                img={p2}
                links="https://github.com"
                github="https://github.com" // Replace with actual GitHub link
              />
            </div>
            <div className="col-span-6 xs:col-span-12">
              <Project
                type={"Portfolio Template"}
                title={"Instant Ramen"}
                img={p5}
                links="https://shivaay7.github.io/B19-Protfolio/"
                github="https://github.com/shivaay7/B19-Protfolio" // Replace with actual GitHub link
              />
            </div>
            <div className="col-span-6 xs:col-span-12">
              <Project
                type={"Frontend Project"}
                title={"This Is Digital"}
                img={p4}
                links="https://shivaay7.github.io/thisIsDigital/"
                github="https://github.com/shivaay7/thisIsDigital" // Replace with actual GitHub link
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects; // Change component export name to start with an uppercase letter
