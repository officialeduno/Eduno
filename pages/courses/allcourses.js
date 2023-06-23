/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const All_Courses = () => {
    return (
        <>
            <Head>
                <title>Eduno Offer Courses | Eduno (Empower Yourself with Eduno)</title>
            </Head>

            <div>
                <section className='headerbg md:px-32 flex flex-col justify-center items-center md:py-12 md:pt-2 md:pb-0 pb-8'>
                    <div className='flex md:flex-row flex-col justify-center items-center pt-8 md:pt-4'>
                        <h1 className='text-white text-4xl md:text-6xl text-center text-font md:pl-2'>All Courses</h1>
                    </div>

                    <div className='flex flex-col md:flex-row gap-6 md:gap-8 md:justify-center py-4 md:py-12'>

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
                                    <Link href={"/courses/training"} class="text-lg font-bold text-[#EEEEEE] transition duration-100 hover:text-[#FD7014] lg:text-xl">Training & Internships 2023</Link>
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
                                    <Link href={"/courses/datascience"} class="text-lg font-bold text-[#EEEEEE] transition duration-100 hover:text-[#FD7014] lg:text-xl">Data Science</Link>
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
                                    <Link href={"/courses/aiml"} class="text-lg font-bold text-[#EEEEEE] transition duration-100 hover:text-[#FD7014] lg:text-xl">AI & ML</Link>
                                    <span class="text-gray-500">by EDUNO</span>
                                </div>

                                <div class="flex flex-col items-end">
                                    <span class="font-bold text-white lg:text-lg">₹1999</span>
                                    <span class="text-sm text-red-500 line-through">₹3998</span>
                                </div>
                            </div>
                        </div>




                    </div>

                    <div className='flex flex-col md:flex-row gap-6 md:gap-8 md:justify-center py-2 md:py-8'>

                        <div>
                            <Link href={"/courses/android"} class="group relative mb-2 w-72 md:w-96 h-40 md:h-80 block overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                                <img src="/img/android.png" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                <div class="absolute left-0 bottom-2 flex gap-2">
                                    <span class="rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">-50%</span>
                                </div>
                            </Link>

                            <div class="flex items-start justify-between gap-2 px-2">
                                <div class="flex flex-col">
                                    <Link href={"/courses/android"} class="text-lg font-bold text-[#EEEEEE] transition duration-100 hover:text-[#FD7014] lg:text-xl">Android Development</Link>
                                    <span class="text-gray-500">by EDUNO</span>
                                </div>

                                <div class="flex flex-col items-end">
                                    <span class="font-bold text-white lg:text-lg">₹2499</span>
                                    <span class="text-sm text-red-500 line-through">₹4998</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link href={"/courses/fullstack"} class="group relative mb-2 w-72 md:w-96 h-40 md:h-80 block overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                                <img src="/img/webdev2.png" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                <div class="absolute left-0 bottom-2 flex gap-2">
                                    <span class="rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">-50%</span>
                                </div>
                            </Link>

                            <div class="flex items-start justify-between gap-2 px-2">
                                <div class="flex flex-col">
                                    <Link href={"/courses/fullstack"} class="text-lg font-bold text-[#EEEEEE] transition duration-100 hover:text-[#FD7014] lg:text-xl">Full Stack Web Dev</Link>
                                    <span class="text-gray-500">by EDUNO</span>
                                </div>

                                <div class="flex flex-col items-end">
                                    <span class="font-bold text-white lg:text-lg">₹1499</span>
                                    <span class="text-sm text-red-500 line-through">₹2998</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link href={"/courses/java"} class="group relative mb-2 w-72 md:w-96 h-40 md:h-80 block  overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                                <img src="/img/java.png" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                <div class="absolute left-0 bottom-2 flex gap-2">
                                    <span class="rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">-50%</span>
                                </div>
                            </Link>

                            <div class="flex items-start justify-between gap-2 px-2">
                                <div class="flex flex-col">
                                    <Link href={"/courses/java"} class="text-lg font-bold text-[#EEEEEE] transition duration-100 hover:text-[#FD7014] lg:text-xl">Java with DSA</Link>
                                    <span class="text-gray-500">by EDUNO</span>
                                </div>

                                <div class="flex flex-col items-end">
                                    <span class="font-bold text-white lg:text-lg">₹999</span>
                                    <span class="text-sm text-red-500 line-through">₹1998</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default All_Courses