/* eslint-disable @next/next/no-img-element */

import Head from 'next/head'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [email, setEmail] = useState();
  const handleChange = (e) => {
    if (e.target.email == 'email') {
      setEmail(e.target.value);
    }
  }
  const signupNewsletterMessage = () => toast('Successfully Subscribed our News Letter and All the Updates are on your Notification.', {
    autoClose: 2000,
    type: 'success'
  });
  const signupNewsletter = (e) => {
    e.preventDefault();
    signupNewsletterMessage();
  }

  return (
    <>
      <Head>
        <title>Eduno (Empower yourself with Eduno)</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="logo-wbg-icon.ico"></link>
      </Head>

      <section className="footerbg md:pt-32 md:h-[80vh] flex md:flex-row flex-col-reverse md:justify-around md:px-12">

        <div className='md:ml-16 flex flex-col justify-center items-center md:items-start'>

          <h1 className="mb=0 md:mb-4 md:ml-1 text-2xl text-font-heading text-center md:text-left text-[#FD7014] md:text-6xl">Empower yourself
            with </h1> <img src="eduno-white.png" className='h-12 md:h-20 mt-2 md:mt-4' alt="" />

          <div className="flex md:flex-row mt-2 md:mt-8 md:ml-4 md:mb-16 space-y-4 sm:flex-row sm:justify-left sm:space-y-0 sm:space-x-4 text-font">
            <Link href="https://drive.google.com/file/d/1ggceuBmqModIkmCPoDvozN0hZqQzFdkC/view?usp=sharing" target='_blank' className="inline-flex justify-center items-center py-2 mt-3 md:mt-0 md:py-3 px-2 md:px-5 text-center rounded-lg button-background button-hover-background button-text button-hover-text">
              Learn more
              <svg className="w-5 ml-2 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </Link>

            <a href="#" className="inline-flex justify-center items-center px-2 py-2 ml-2 md:ml-4 md:py-2 md:px-5 text-base text-font text-center text-[#FD7014] rounded-lg border border-[#EEEEEE]">
              <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
              Watch video
            </a>
          </div>

        </div>
        <div className='md:mr-24 flex justify-center items-center'>
          <img src="./img/headerimg3.png" className='h-[30vh] md:h-[70vh]' alt="" />
        </div>

      </section>


      <section className='footerbg px-4 py-8 md:py-32 md:px-32'>

        <div className='developer-section-background flex flex-col md:flex-row justify-around items-center rounded-2xl md:rounded-3xl px-2 md:px-8'>
          <img src="img/developers4.png" className='h-[30vh] md:h-[50vh]' alt="" />
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[#FD7014] text-4xl md:text-5xl text-font text-center pb-2 md:pb-6'>Developers</h1>
            <h1 className='text-white text-sm md:text-lg px-2 md:px-12 text-center text-font'>Developers are the creative minds behind the digital world we live in today. They are the architects who design and build the applications, websites, and software that power our daily lives. From the complex algorithms that drive search engines to the sleek user interfaces of our favorite mobile apps, developers play a vital role in shaping our digital experiences.</h1>

            <div className="mt-2 md:mt-6 flex flex-col md:flex-row justify-center items-center">
              <Link href="https://drive.google.com/file/d/1ggceuBmqModIkmCPoDvozN0hZqQzFdkC/view?usp=sharing" target='_blank' className="inline-flex justify-center items-center py-2 mb-2 md:py-3 px-4 md:px-5 text-base font-medium text-center rounded-lg focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 button-background button-hover-background button-text button-hover-text">
                Join the Community
              </Link>

              <a href="#" className="inline-flex justify-center items-center px-4 py-2 mb-4 md:py-3 md:px-5 md:ml-4 text-base font-medium text-center rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 button2-text">
                Learn More

                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
            </div>
          </div>
        </div>

      </section>


      <section className='footerbg px-4 md:px-32 flex md:flex-row flex-col justify-around items-start pb-6'>
        <div className='flex flex-col justify-center items-center pt-6 md:pt-0'>
          <h1 className='text-[#FD7014] text-4xl md:text-5xl text-font-heading text-center pb-2 md:pb-6'>Roadmaps for Developers</h1>
          <h1 className='text-white text-sm md:text-xl text-font px-2 md:px-12 text-center'>EDUNO is a platform dedicated to empowering aspiring developers and individuals interested in starting a career in the programming and development field. With a strong belief in accessible education, EDUNO provides comprehensive roadmaps and personal guidance to help individuals navigate the complex world of programming, all at no cost.</h1>
          <div className="md:mt-6 flex flex-col md:flex-row ">
            <Link href="https://drive.google.com/file/d/1ggceuBmqModIkmCPoDvozN0hZqQzFdkC/view?usp=sharing" target='_blank' className="inline-flex justify-center items-center px-4 py-2 mb-3 mt-2 md:my-0 md:py-2 md:px-5 md:ml-2 text-base font-medium text-center rounded-lg focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 button-background button-hover-background button-text button-hover-text">
              Go to Roadmap
            </Link>

            <a href="#" className="inline-flex justify-center items-center px-4 py-2 md:py-2 md:px-5 md:ml-4 text-base font-medium text-center rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 button2-text">
              Personal Guidance

              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
          </div>
        </div>
        <img src="img/roadmap2.png" className='h-[50vh] md:h-[50vh]' alt="" />
      </section>


      <section className='footerbg md:px-32 flex flex-col justify-center items-center md:py-12 md:pt-16 md:pb-0 pb-8'>
        <div className='flex md:flex-row flex-col justify-center items-center pt-8 md:pt-0'>
          <img src="eduno-white.png" className='h-6 md:h-14 mb-2' alt="" />
          <h1 className='text-white text-4xl md:text-6xl text-center text-font md:pl-2'>Offer Courses</h1>
        </div>

        <div className='flex flex-row gap-4 md:gap-8 md:justify-center py-4 md:py-12 overflow-x-auto scroll whitespace-nowrap scroll-smooth w-[90vw]'>

          <div>
            <Link href={"/courses/training"} class="group relative w-72 md:w-96 h-40 md:h-80 mb-2 block overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
              <img src="/img/training.png" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div class="absolute left-0 bottom-2 flex gap-2">
                <span class="rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">-50%</span>
                <span class="rounded-lg bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-gray-800">New</span>
              </div>
            </Link>

            <div class="flex items-start justify-between gap-2 px-2">
              <div class="flex flex-col">
                <a href="#" class="text-lg font-bold text-[#EEEEEE] transition duration-100 hover:text-gray-500 lg:text-xl">Training & Intership 2023</a>
                <span class="text-gray-500">by EDUNO</span>
              </div>

              <div class="flex flex-col items-end">
                <span class="font-bold text-white lg:text-lg">₹899</span>
                <span class="text-sm text-red-500 line-through">₹1798</span>
              </div>
            </div>
          </div>
          <div>
            <Link href={"/courses/datascience"} class="group relative mb-2 w-72 md:w-96 h-40 md:h-80 block overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
              <img src="/img/datascience.png" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div class="absolute left-0 bottom-2 flex gap-2">
                <span class="rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">-50%</span>
                <span class="rounded-lg bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-gray-800">New</span>
              </div>
            </Link>

            <div class="flex items-start justify-between gap-2 px-2">
              <div class="flex flex-col">
                <a href="#" class="text-lg font-bold text-[#EEEEEE] transition duration-100 hover:text-gray-500 lg:text-xl">Data Science</a>
                <span class="text-gray-500">by EDUNO</span>
              </div>

              <div class="flex flex-col items-end">
                <span class="font-bold text-white lg:text-lg">₹1999</span>
                <span class="text-sm text-red-500 line-through">₹3998</span>
              </div>
            </div>
          </div>
          <div>
            <Link href={"/courses/aiml"} class="group relative mb-2 w-72 md:w-96 block h-40 md:h-80 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
              <img src="/img/aiml.png" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div class="absolute left-0 bottom-2 flex gap-2">
                <span class="rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">-50%</span>
                <span class="rounded-lg bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-gray-800">New</span>
              </div>
            </Link>

            <div class="flex items-start justify-between gap-2 px-2">
              <div class="flex flex-col">
                <a href="#" class="text-lg font-bold text-[#EEEEEE] transition duration-100 hover:text-gray-500 lg:text-xl">AI & ML</a>
                <span class="text-gray-500">by EDUNO</span>
              </div>

              <div class="flex flex-col items-end">
                <span class="font-bold text-white lg:text-lg">₹1999</span>
                <span class="text-sm text-red-500 line-through">₹3998</span>
              </div>
            </div>
          </div>




        </div>
        <div className='flex flex-row gap-4 md:gap-8 md:justify-center py-4 md:py-8 overflow-x-auto scroll whitespace-nowrap scroll-smooth w-[90vw]'>

          <div>
            <a href="#" class="group relative mb-2 w-72 md:w-96 h-40 md:h-80 block overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
              <img src="/img/android.png" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div class="absolute left-0 bottom-2 flex gap-2">
                <span class="rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">-50%</span>
              </div>
            </a>

            <div class="flex items-start justify-between gap-2 px-2">
              <div class="flex flex-col">
                <a href="#" class="text-lg font-bold text-[#EEEEEE] transition duration-100 hover:text-gray-500 lg:text-xl">Android App Development</a>
                <span class="text-gray-500">by EDUNO</span>
              </div>

              <div class="flex flex-col items-end">
                <span class="font-bold text-white lg:text-lg">₹2499</span>
                <span class="text-sm text-red-500 line-through">₹4998</span>
              </div>
            </div>
          </div>
          <div>
            <a href="#" class="group relative mb-2 w-72 md:w-96 h-40 md:h-80 block overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
              <img src="/img/webdev2.png" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div class="absolute left-0 bottom-2 flex gap-2">
                <span class="rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">-50%</span>
              </div>
            </a>

            <div class="flex items-start justify-between gap-2 px-2">
              <div class="flex flex-col">
                <a href="#" class="text-lg font-bold text-[#EEEEEE] transition duration-100 hover:text-gray-500 lg:text-xl">Full Stack Web Development</a>
                <span class="text-gray-500">by EDUNO</span>
              </div>

              <div class="flex flex-col items-end">
                <span class="font-bold text-white lg:text-lg">₹1499</span>
                <span class="text-sm text-red-500 line-through">₹2998</span>
              </div>
            </div>
          </div>
          <div>
            <a href="#" class="group relative mb-2 w-72 md:w-96 h-40 md:h-80 block  overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
              <img src="/img/java.png" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div class="absolute left-0 bottom-2 flex gap-2">
                <span class="rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">-50%</span>
              </div>
            </a>

            <div class="flex items-start justify-between gap-2 px-2">
              <div class="flex flex-col">
                <a href="#" class="text-lg font-bold text-[#EEEEEE] transition duration-100 hover:text-gray-500 lg:text-xl">Java with DSA</a>
                <span class="text-gray-500">by EDUNO</span>
              </div>

              <div class="flex flex-col items-end">
                <span class="font-bold text-white lg:text-lg">₹999</span>
                <span class="text-sm text-red-500 line-through">₹1998</span>
              </div>
            </div>
          </div>
        </div>
        <Link href="https://drive.google.com/file/d/1ggceuBmqModIkmCPoDvozN0hZqQzFdkC/view?usp=sharing" target='_blank' className="inline-flex justify-center items-center px-4 py-2 md:py-3 md:px-5 md:mb-12 text-base font-medium text-center focus:ring-4 rounded-lg focus:ring-primary-300 dark:focus:ring-primary-900 button-background button-hover-background button-text button-hover-text">
          Sell all Courses
          <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </Link>
      </section>

      <section className='bg-[#222831] flex flex-col justify-center items-center md:pt-6 md:px-32 py-8'>
        <h1 className='text-[#EEEEEE] text-xl pb-4 md:py-0 md:text-4xl text-center md:pb-4 text-font'>Provide a path to MNCs</h1>
        <div className='flex flex-wrap justify-around items-center'>
          <img src="mnc/google.png" className='md:px-6 h-14 md:h-24' alt="" />
          <img src="mnc/walmart.png" className='md:px-6 h-14 md:h-24' alt="" />
          <img src="mnc/amazon.png" className='md:px-6 h-14 md:h-28' alt="" />
          <img src="mnc/flipkart.png" className='md:px-6 h-16 md:h-32' alt="" />
        </div>
        <div className='flex flex-wrap justify-around items-center'>
          <img src="mnc/samsung.png" className='md:px-6 h-14 md:h-28' alt="" />
          <img src="mnc/adobe.png" className='md:px-6 h-10 md:h-18' alt="" />
          <img src="mnc/microsoft.png" className='md:px-6 h-10 md:h-18' alt="" />
        </div>
      </section>

      <section className='footerbg md:pt-28 md:pb-28 md:px-32 px-4 py-8'>

        <div className='developer-section-background flex flex-col-reverse md:flex-row justify-around items-center rounded-3xl md:px-8'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[#FD7014] text-3xl md:text-5xl text-center pb-6 text-font-heading'>Weekly Coding Contest</h1>
            <h1 className='text-white md:text-md px-2 md:px-12 text-center text-font'>Join the weekly coding contest to enhance your programming solving skills and boost your career with the help of contest. Get some exciting prizes and goodies (T-shirts, Hoodies,  Stickers, etc). By consistently participating and excelling in these contests, developers can establish a strong reputation within the programming community and enhance their professional credibility</h1>

            <div className="md:mt-6 my-2 flex flex-col md:flex-row">
              <Link href="https://drive.google.com/file/d/1ggceuBmqModIkmCPoDvozN0hZqQzFdkC/view?usp=sharing" target='_blank' className="inline-flex justify-center items-center px-4 py-2 md:py-2 md:px-5 md:ml-2 text-base font-medium text-center focus:ring-4 rounded-lg focus:ring-primary-300 dark:focus:ring-primary-900 button-background button-hover-background button-text button-hover-text">
                Join Contest
              </Link>

              <a href="#" className="inline-flex justify-center items-center px-4 py-2 mt-2 md:mt-0 md:py-3 md:px-5 md:ml-4 text-base font-medium text-center rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 button2-text">
                More Information

                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
            </div>
          </div>
          <img src="img/contest.png" className='h-[30vh] md:h-[45vh]' alt="" />
        </div>

      </section>

      <section className='bg-[#222831] flex md:flex-row flex-col justify-center items-center md:px-32'>
        <img src="img/mentorship2.png" className='h-[30vh] md:h-[50vh]' alt="" />
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-[#FD7014] text-3xl md:text-5xl text-center pb-2 md:pb-6 text-font-heading'>Mentorship</h1>
          <p className='text-white text-md md:px-12 text-center text-font'>A complete solution to address all of your mentoring requirements., including educational materials, communities to join, opportunities, and much more.
            EDUNO is not just limited to providing roadmaps and personal guidance; it offers a comprehensive solution to address all your mentoring requirements. Whether you are a beginner looking to kickstart your programming journey or an experienced developer seeking to expand your knowledge, EDUNO has got you covered.</p>
          <div className="mt-6">
            <Link href="https://drive.google.com/file/d/1ggceuBmqModIkmCPoDvozN0hZqQzFdkC/view?usp=sharing" target='_blank' className="inline-flex justify-center items-center px-4 py-2 mb-6 md:py-3 md:px-5 md:ml-2 text-base font-medium text-center rounded-lg focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 button-background button-hover-background button-text button-hover-text">
              Learn More
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </Link>
          </div>
        </div>
      </section>




    </>
  )
}
