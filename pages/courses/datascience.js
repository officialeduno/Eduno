/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Head from 'next/head'

const Android = (props) => {
    const buyNow = (e) => {
        e.preventDefault();
        props.buyNow("datascience")
    }
    return (
        <>
            <Head>
                <title>Data Science | Eduno (Empower yourself with Eduno)</title>
            </Head>

            <div>
                <div class="bg-[#001719] py-6 sm:py-8 lg:py-12">
                    <div class="mx-4 px-4 md:px-4 md:mx-4 lg:mx-24">
                        <div class="grid gap-8 md:grid-cols-2">
                            {/* <!-- images - start --> */}
                            <div class="space-y-4">
                                <div class="relative overflow-hidden rounded-lg bg-gray-100">
                                    <img src="../courses_images/data_science.png" loading="lazy" alt="Photo by Himanshu Dewangan" class="h-full w-full object-cover object-center" />

                                    <span class="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">sale</span>
                                </div>
                            </div>
                            {/* <!-- images - end --> */}

                            {/* <!-- content - start --> */}
                            <div class="md:py-8">
                                {/* <!-- name - start --> */}
                                <div class="mb-2 md:mb-3">
                                    <h2 class="text-3xl font-bold text-white lg:text-3xl">Data Science</h2>
                                </div>
                                {/* <!-- name - end --> */}

                                {/* <!-- rating - start --> */}
                                <div class="mb-6 flex items-center md:mb-10">
                                    <div class="-ml-1 flex gap-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </div>

                                    <span class="ml-2 text-sm text-gray-500">4.2</span>

                                    <a href="#" class="ml-4 text-sm font-semibold text-[#a2cc4c] transition duration-100 hover:text-[#a2cc4c] active:text-[#a2cc4c]">view all 47 reviews</a>
                                </div>
                                {/* <!-- rating - end --> */}

                                {/* <!-- price - start --> */}
                                <div class="mb-4">
                                    <div class="flex items-end gap-2">
                                        <span class="text-xl font-bold text-white md:text-2xl">₹1,999.00</span>
                                        <span class="mb-0.5 text-red-500 line-through">₹3,999.00</span>
                                    </div>

                                    <span class="text-sm text-gray-500">incl. GST and all Taxes</span>
                                </div>
                                {/* <!-- price - end --> */}

                                {/* <!-- buttons - start --> */}
                                <div class="flex gap-2.5">
                                    <button class="inline-block flex-1 rounded-lg bg-[#a2cc4c] px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-[#a2cc4c] transition duration-100 hover:bg-[#a2cc4c] focus-visible:ring active:bg-[#a2cc4c] sm:flex-none md:text-base" onClick={buyNow}>Buy Now</button>

                                    <a href="#" class="inline-block rounded-lg bg-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-[#a2cc4c] transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">
                                        PDF
                                    </a>
                                </div>
                                {/* <!-- buttons - end --> */}

                                {/* <!-- description - start --> */}
                                <div class="mt-10 md:mt-8 lg:mt-12">
                                    <div class="mb-3 text-2xl font-bold text-white">Description</div>

                                    <p class="text-white">
                                    The course covers a wide range of topics, including data exploration, data cleaning, data transformation, and data modeling. It also covers popular programming languages such as Python and R, and tools such as SQL, Tableau, and Hadoop. Students have access to practical, hands-on experience working with real-world data sets, learning how to use statistical techniques and machine learning algorithms to analyze data and gain insights. <br /> <br />

Upon completion of the data science course, students receive a certification that is recognized and valued by employers in the industry. In addition to the certification, Eduno also offers goodies such as t-shirts, mugs, and other types of gifts according to the student's performance in the course, which can serve as a motivator and a symbol of accomplishment. <br /> <br />

One of the key benefits of the Eduno data science course is the ongoing support and resources provided to students even after the completion of the course. The company has a dedicated team of professionals who offer career guidance, mentorship, and networking opportunities to help students advance their careers.
                                    </p>


                                </div>
                                {/* <!-- description - end --> */}

                            </div>
                            {/* <!-- content - end --> */}
                        </div>

                        {/* Features section start  */}
                        <div className='text-white mt-6'>
                            <h1 className='text-4xl font-bold italic mb-6'>Features:</h1>
                            <section class="text-white body-font">
                                <div class="container flex flex-wrap flex-col">
                                    <div class="flex relative pt-6 pb-12 sm:items-center">
                                        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                        </div>
                                        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#a2cc4c] text-white relative z-10 title-font font-medium text-sm">1</div>
                                        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">

                                            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                <h2 class="font-medium title-font text-white mb-1 text-2xl">Certification upon completion</h2>
                                                <p class="leading-relaxed"> Students who complete the course receive a certification that can be a valuable asset when applying for jobs in the industry.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex relative pt-6 pb-12 sm:items-center">
                                        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                        </div>
                                        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#a2cc4c] text-white relative z-10 title-font font-medium text-sm">2</div>
                                        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                            
                                            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                <h2 class="font-medium title-font text-white mb-1 text-2xl">Interactive learning experience</h2>
                                                <p class="leading-relaxed">The course is designed to be engaging and interactive, with hands-on projects and real-world examples to help students apply what theym have learned.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex relative pt-6 pb-12 sm:items-center">
                                        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                        </div>
                                        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#a2cc4c] text-white relative z-10 title-font font-medium text-sm">3</div>
                                        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                            
                                            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                <h2 class="font-medium title-font text-white mb-1 text-2xl">Experienced teachers and developers</h2>
                                                <p class="leading-relaxed"> Eduno's team of teachers and developers are highly skilled and experienced in building high-quality Android apps, ensuring that students receive top-notch instruction.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex relative pt-6 pb-12 sm:items-center">
                                        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                        </div>
                                        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#a2cc4c] text-white relative z-10 title-font font-medium text-sm">4</div>
                                        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                            
                                            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                <h2 class="font-medium title-font text-white mb-1 text-2xl">Comprehensive curriculum</h2>
                                                <p class="leading-relaxed">The course covers all the important aspects of Android app development, including architecture, UI design, database management, and deployment.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex relative pt-6 pb-12 sm:items-center">
                                        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                        </div>
                                        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#a2cc4c] text-white relative z-10 title-font font-medium text-sm">5</div>
                                        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                            
                                            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                <h2 class="font-medium title-font text-white mb-1 text-2xl">Performance-based gifts</h2>
                                                <p class="leading-relaxed">Students who perform well in the course can receive exciting goodies such as t-shirts, mugs, and other types of gifts.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex relative pt-6 pb-12 sm:items-center">
                                        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                        </div>
                                        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#a2cc4c] text-white relative z-10 title-font font-medium text-sm">6</div>
                                        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                            
                                            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                <h2 class="font-medium title-font text-white mb-1 text-2xl">Ongoing suppor</h2>
                                                <p class="leading-relaxed"> Eduno provides ongoing support to students even after they complete the course, ensuring that they have the resources they need to succeed in their careers.</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </section>
                        </div>
                        {/* Features section end  */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Android