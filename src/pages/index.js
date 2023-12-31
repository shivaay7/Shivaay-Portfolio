import Head from "next/head";
import Layout from "./../components/Layout";
import profilePic from "../../public/images/profile/profile_image.png";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "../components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";
export default function Home() {
  const profileStyle = {
    filter: "drop-shadow(20px 20px 50px grey)",
  };

  return (
    <>
      <Head>
        <title>Shivaay | Home Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <TransitionEffect/>

      <main className="flex items-center text-dark w-full min-h-screen pt-0 dark:text-light ">
        <Layout className=" pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col md:flex-col-reverse">
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center ">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects, showcasing my expertise in MERN and web development.
              </p>
              <div className=" flex items-center self-start -mt-2 lg:self-center">
               <Link href="/SHIVAM_MISHRA76.pdf"
                target="_blank"
                className="flex items-center bg-dark text-light px-6 py-2.5 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light hover:dark:shadow-[inset_0px_0px_30px_rgba(255,255,255,0.2)] md:p-2 md:px-4 md:text-base"
                download
                >
                Resume <LinkArrow className="w-6 ml-1" />
               </Link>

                <Link
                  href="mailto:shivaay7613@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-xl  capitalize text-dark underline font-semibold  underline-offset-2 dark:text-light md:text-base"
                >
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="w-1/2 flex items-start md:w-full">
              <Image
                src={profilePic}
                alt="Shivaay"
                className="w-full -ml-16 h-auto lg:hidden md:inline-block md:w-full md:-ml-12"
                style={profileStyle}
                priority
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,50vw"
              />
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute left-8 -bottom-32 inline-block w-32 md:hidden lg:-bottom-16">
          <Image src={lightBulb} alt="HI" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
