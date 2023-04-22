/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import React from 'react'

const Yourcourses = () => {
    return (
        <>

            <Head>
                <title>Your Courses | Eduno (Empower yourself with Eduno)</title>
            </Head>

            <div className='bg-[#001719] md:pt-8 flex flex-col items-center'>
                <h1 className='text-white text-4xl font-bold gap-2.5'>Your Courses</h1>
                <section id='courses' className=" body-font bg-[#001719]">

                    <div className="container px-5 py-12 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            <div className="p-4 md:w-1/3">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="h-56 md:h-72 w-full object-cover object-center" src="android.jpg" alt="blog" />
                                    <div className="p-6">

                                        <h1 className="title-font text-2xl font-medium text-white mb-3">Android App Development</h1>
                                        <p className="leading-relaxed mb-3 text-white">Android app development is a highly sought-after skill in todays job market, and taking an Android app development course can be an excellent way to learn this skill.</p>
                                        <div className='flex flex-col items-center'>
                                            <button className='border-2 border-red-600 text-white px-4 py-2'>Learn Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/3">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="h-56 md:h-72 w-full object-cover object-center" src="web.jpg" alt="blog" />
                                    <div className="p-6">

                                        <h1 className="title-font text-2xl font-medium text-white mb-3">Full Stack Web Development</h1>
                                        <p className="leading-relaxed mb-3 text-white">A full-stack web development course is an educational program that teaches students the skills needed to build web applications from start to finish.</p>
                                        <div className='flex flex-col items-center'>
                                            <button className='border-2 border-red-600 text-white px-4 py-2'>Learn Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/3">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="h-56 md:h-72 w-full object-cover object-center" src="java.jpeg" alt="blog" />
                                    <div className="p-6">

                                        <h1 className="title-font text-2xl font-medium text-white mb-3">Java Programming</h1>
                                        <p className="leading-relaxed mb-3 text-white">A Java programming course is an educational program that teaches students the fundamentals of the Java programming language.</p>
                                        <div className='flex flex-col items-center'>
                                            <button className='border-2 border-red-600 text-white px-4 py-2'>Learn Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Yourcourses