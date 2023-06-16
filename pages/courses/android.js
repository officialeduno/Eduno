/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Android = (props) => {
    const buyNow = (e) => {
        e.preventDefault();
        props.buyNow("android")
    }
    return (
        <>
            <Head>
                <title>Android App Development | Eduno (Empower yourself with Eduno)</title>
            </Head>

            <div>
                <div className="bg-black pt-6 sm:pt-8 lg:pt-12">
                    <div className="mx-2 px-2 md:px-4 md:mx-4 lg:mx-24">
                        <div className="grid gap-8 md:grid-cols-2">
                            {/* <!-- images - start --> */}
                            <div className="space-y-4">
                                <div className="relative overflow-hidden rounded-lg bg-gray-100">
                                    <img src="../img/android.png" loading="lazy" alt="Photo by Himanshu Dewangan" className="h-full w-full object-cover object-center" />

                                    <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">50% Off</span>
                                </div>
                            </div>
                            {/* <!-- images - end --> */}

                            {/* <!-- content - start --> */}
                            <div className="md:py-8">
                                {/* <!-- name - start --> */}
                                <div className="mb-2 md:mb-3">
                                    <h2 className="text-xl md:text-3xl font-bold text-white lg:text-3xl text-font">Android App Development</h2>
                                </div>
                                {/* <!-- name - end --> */}

                                {/* <!-- rating - start --> */}
                                <div className="mb-6 flex items-center md:mb-10">
                                    <div className="-ml-1 flex gap-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </div>

                                    <span className="ml-2 text-sm text-gray-500">4.8</span>
                                </div>
                                {/* <!-- rating - end --> */}

                                {/* <!-- price - start --> */}
                                <div className="mb-4">
                                    <div className="flex items-end gap-2">
                                        <span className="text-xl font-bold text-white md:text-2xl text-font">₹2,499</span>
                                        <span className="mb-0.5 text-red-500 line-through text-font">₹4,998</span>
                                    </div>

                                    <span className="text-sm text-gray-500">incl. GST and all Taxes</span>
                                </div>
                                {/* <!-- price - end --> */}

                                {/* <!-- buttons - start --> */}
                                <div className="flex gap-2.5">
                                    <button className="buynow-button inline-block flex-1 rounded-lg px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-[#a2cc4c] transition duration-100 focus-visible:ring active:bg-[#a2cc4c] sm:flex-none md:text-base" onClick={buyNow}>Buy Now</button>

                                    <Link href="https://drive.google.com/file/d/1reb1RjxWHeszboyZUFbP7aBnnX6vqvXg/view?usp=sharing" target='_blank' className="pdf-button inline-block rounded-lg bg-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-[#a2cc4c] transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">
                                        PDF
                                    </Link>
                                </div>
                                {/* <!-- buttons - end --> */}

                                {/* <!-- description - start --> */}
                                <div className="mt-10 md:mt-8 lg:mt-12">
                                    <div className="mb-3 text-2xl font-bold text-white text-font">Description</div>

                                    <p className="text-white md:text-lg text-sm">
                                        This course is designed to provide students with a comprehensive understanding of the Android operating system and how to develop apps for it. The curriculum covers topics such as Android architecture, user interface design, database management, and app deployment. <br /> <br />

                                        One of the standout features of this course is the certification that students receive upon completion. This certification is a testament to the skills and knowledge that they have acquired throughout the course and can be a valuable asset when applying for jobs in the industry. <br /> <br />

                                    </p>


                                </div>
                                {/* <!-- description - end --> */}

                            </div>
                            {/* <!-- content - end --> */}
                        </div>


                        {/* Features section start  */}
                        <div className='text-white mt-6'>
                            <h1 className='text-4xl font-bold italic text-font'>Features:</h1>
                            <section className="text-white body-font">
                                <div className="container flex flex-wrap flex-col">
                                    <div className="flex relative pt-4 md:pb-4 sm:items-center">
                                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                        </div>
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#FD7014] text-black relative z-10 title-font font-medium text-sm">1</div>
                                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">

                                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                <h2 className="font-medium title-font text-white mb-1 text-xl md:text-2xl">Comprehensive Understanding of Android OS</h2>
                                                <p>The course aims to provide students with a thorough understanding of the Android operating system. It covers essential topics such as Android architecture, including the various components and layers involved in app development.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex relative md:pb-2 sm:items-center">
                                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                        </div>
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#FD7014] text-black relative z-10 title-font font-medium text-sm">2</div>
                                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">

                                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                <h2 className="font-medium title-font text-white mb-1 text-xl md:text-2xl">Certification upon completion</h2>
                                                <p> One standout feature of this course is the certification awarded to students upon successful completion. This certification serves as a testament to the skills and knowledge they have acquired throughout the course. It can significantly bolster their resumes and demonstrate their expertise to potential employers in the industry.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex relative md:pb-2 sm:items-center">
                                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                        </div>
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#FD7014] text-black relative z-10 title-font font-medium text-sm">3</div>
                                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">

                                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                <h2 className="font-medium title-font text-white mb-1 text-xl md:text-2xl">User Interface Design</h2>
                                                <p>The course delves into user interface (UI) design principles and techniques specific to Android apps. Students learn how to create visually appealing and user-friendly interfaces that enhance the overall user experience.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex relative md:pb-2 sm:items-center">
                                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                        </div>
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#FD7014] text-black relative z-10 title-font font-medium text-sm">4</div>
                                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">

                                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                <h2 className="font-medium title-font text-white mb-1 text-xl md:text-2xl">Database Management</h2>
                                                <p>The curriculum includes instruction on database management for Android apps. Students learn how to incorporate databases into their applications, allowing for efficient storage, retrieval, and manipulation of data.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex relative md:pb-2 sm:items-center">
                                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                        </div>
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#FD7014] text-black relative z-10 title-font font-medium text-sm">5</div>
                                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">

                                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                <h2 className="font-medium title-font text-white mb-1 text-xl md:text-2xl">App Deployment</h2>
                                                <p>The course equips students with the knowledge and skills required to deploy Android apps. They gain an understanding of the app distribution process, including publishing apps on the Google Play Store and ensuring compatibility across different Android devices.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex relative md:pb-2 sm:items-center">
                                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                        </div>
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#FD7014] text-black relative z-10 title-font font-medium text-sm">6</div>
                                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">

                                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                <h2 className="font-medium title-font text-white mb-1 text-xl md:text-2xl">Industry Relevance</h2>
                                                <p>The course content is designed to align with current industry standards and practices. Students are exposed to the latest trends, best practices, and emerging technologies in the field of Android app development.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex relative md:pb-2 sm:items-center">
                                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                        </div>
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#FD7014] text-black relative z-10 title-font font-medium text-sm">7</div>
                                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">

                                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                <h2 className="font-medium title-font text-white mb-1 text-xl md:text-2xl">Practical Application</h2>
                                                <p>The course emphasizes practical application by incorporating hands-on exercises and projects. Students have the opportunity to work on real-world app development scenarios, gaining valuable experience in building functional Android applications.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </section>
                        </div>
                        {/* Features section end  */}

                        <section className="text-[#EEEEEE] text-font body-font">
                            <div className="container px-5 pt-12 mx-auto">
                                <div className="flex flex-wrap -m-4 text-center">
                                    <div className="p-4 sm:w-1/4 w-1/2">
                                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">75+</h2>
                                        <p className="leading-relaxed text-[#FD7014]">Days</p>
                                    </div>
                                    <div className="p-4 sm:w-1/4 w-1/2">
                                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">100+</h2>
                                        <p className="leading-relaxed text-[#FD7014]">Exercise</p>
                                    </div>
                                    <div className="p-4 sm:w-1/4 w-1/2">
                                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">44+</h2>
                                        <p className="leading-relaxed text-[#FD7014]">Articles</p>
                                    </div>
                                    <div className="p-4 sm:w-1/4 w-1/2">
                                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">150+</h2>
                                        <p className="leading-relaxed text-[#FD7014]">Files</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="bg-black pt-6 sm:pt-8 lg:pt-12">
                            <div className="md:px-8">
                                <h2 className="mb-4 text-center text-2xl font-bold text-[#EEEEEE] md:mb-8 lg:text-3xl xl:mb-6 text-font">Customer Reviews</h2>

                                <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
                                    <div className="flex flex-col gap-3 rounded-lg border p-4 md:p-6">
                                        <div>
                                            <span className="block text-sm font-bold md:text-base text-white">Tanisha Tetarwaal</span>
                                            <span className="block text-sm text-gray-400">May 31, 2023</span>
                                        </div>

                                        <div className="-ml-1 flex gap-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </div>

                                        <p className="text-gray-400">One of the standout features of this course was the emphasis on practical application. Hands-on projects and assignments allowed me to apply the concepts learned and gain real-world experience in developing Android apps. The course provided valuable insights into industry best practices and current trends, ensuring that I was well-prepared for app development in the real world.</p>
                                    </div>
                                    <div className="flex flex-col gap-3 rounded-lg border p-4 md:p-6">
                                        <div>
                                            <span className="block text-sm font-bold md:text-base text-white">BalaJi Rai</span>
                                            <span className="block text-sm text-gray-400">May 21, 2023</span>
                                        </div>

                                        <div className="-ml-1 flex gap-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </div>

                                        <p className="text-gray-400">Upon completion of the course, I received a certification that serves as a testament to the skills and knowledge I acquired. This certification has proven to be a valuable asset when applying for jobs in the industry. It has increased my credibility and boosted my confidence in my abilities as an Android app developer. I highly recommend this course to anyone looking to dive into the world of Android app development.</p>
                                    </div>

                                    <div className="flex flex-col gap-3 rounded-lg border p-4 md:p-6">
                                        <div>
                                            <span className="block text-sm font-bold md:text-base text-white">Neharika Puri</span>
                                            <span className="block text-sm text-gray-400">May 26, 2023</span>
                                        </div>

                                        <div className="-ml-1 flex gap-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </div>

                                        <p className="text-gray-400"> this Android app development course provides a solid foundation in Android app development and offers a valuable certification. While there is room for improvement in certain areas, I would recommend this course to individuals seeking a comprehensive understanding of Android app development and aiming to strengthen their job prospects in the industry.</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Android