/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const About = () => {
    return (
        <>
            <Head>
                <title>About Us | Eduno (Empower Yourself with Eduno)</title>
            </Head>

            {/* ########## About Section Start ########## */}
            <div className='bg-black'>
                <div className="bg-black px-4 md:px-32 py-4 md:py-12">
                    <section>
                        <div
                            className="block rounded-lg bg-black shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                            <div className="flex flex-wrap items-center">
                                <div className="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                                    <img src="/img/roadmap2.png" alt="Trendy Pants and Shoes"
                                        className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                                </div>
                                <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                                    <div className="px-2 py-6 md:px-12">
                                        <h2 className="mb-4 text-2xl font-bold text-white">
                                            Eduno (Empower Yourself with Eduno)
                                        </h2>
                                        <p className="mb-4 text-justify text-neutral-500 dark:text-neutral-300">
                                            Eduno is a cutting-edge platform that offers a wide range of technical education courses, including Python programming, web development, Android app development, and more. The platform is designed to provide an engaging and interactive learning experience for students of all levels, from beginners to advanced learners.
                                        </p>
                                        <p className="text-neutral-500 dark:text-neutral-300 mb-4 text-justify">
                                            The courses offered on Eduno are created and curated by leading experts in the field of technology, ensuring that the content is of the highest quality. The instructors are not only knowledgeable but also passionate about their subjects, making the learning experience enjoyable and inspiring for students.
                                        </p>
                                        <p className="text-neutral-500 dark:text-neutral-300 text-justify mb-4">
                                            Eduno also provides students with a supportive and collaborative community that encourages peer learning and networking. Students can interact with each other, share ideas and experiences, and receive feedback on their work. The platform also provides students with access to career resources, including job boards, resume builders, and interview tips.
                                        </p>
                                        <Link href={"/community/jointhecommunity"} className="inline-flex justify-center items-center px-4 py-2 mb-4 md:py-3 md:px-5 md:ml-4 text-base font-medium text-center rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 button2-text">
                                        Learn More
                                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            {/* ########## About Section End ########## */}

        </>
    )
}

export default About