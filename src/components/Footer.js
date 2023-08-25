import React from 'react'
import Link from 'next/link'
import Layout from './Layout';
const Footer = () => {
  return (
    <footer className="w-full mt-0 border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base  ">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="group" >
          Build With <span className='text-red-600 text-2xl px-1 '>&#9825;</span> by &nbsp; <Link className='underline underline-offset-5' href="/" >Shivaay</Link>
        </div>
        <Link className='underline underline-offset-5' href="mailto:shivaay7613@gmail.com" target={"_blank"}>Say Hi!</Link>
      </Layout>
    </footer>
  )
}

export default Footer