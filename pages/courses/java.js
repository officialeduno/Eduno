/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Android = (props) => {
    const buyNow = (e) => {
        e.preventDefault();
        props.buyNow("java")
    }
    return (
        <>
            <Head>
                <title>Java with DSA | Eduno (Empower yourself with Eduno)</title>
            </Head>

            <div>
                <div class="bg-black pt-6 sm:pt-8 lg:pt-12">
                    <div class="mx-2 px-2 md:px-4 md:mx-4 lg:mx-24">
                        <div class="grid gap-8 md:grid-cols-2">
                            {/* <!-- images - start --> */}
                            <div class="space-y-4">
                                <div class="relative overflow-hidden rounded-lg bg-gray-100">
                                    <img src="../img/java.png" loading="lazy" alt="Photo by Himanshu Dewangan" class="h-full w-full object-cover object-center" />

                                    <span class="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">50% Off</span>
                                </div>
                            </div>
                            {/* <!-- images - end --> */}

                            {/* <!-- content - start --> */}
                            <div class="md:py-8">
                                {/* <!-- name - start --> */}
                                <div class="mb-2 md:mb-3">
                                    <h2 class="text-xl md:text-3xl font-bold text-white lg:text-3xl text-font">Java with DSA</h2>
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

                                    <a href="#" class="ml-4 text-sm font-semibold text-[#320bcfc2] transition duration-100 hover:text-[#a2cc4c] active:text-[#a2cc4c]">view all 47 reviews</a>
                                </div>
                                {/* <!-- rating - end --> */}

                                {/* <!-- price - start --> */}
                                <div class="mb-4">
                                    <div class="flex items-end gap-2">
                                        <span class="text-xl font-bold text-white md:text-2xl text-font">₹999</span>
                                        <span class="mb-0.5 text-red-500 line-through text-font">₹1,998</span>
                                    </div>

                                    <span class="text-sm text-gray-500">incl. GST and all Taxes</span>
                                </div>
                                {/* <!-- price - end --> */}

                                {/* <!-- buttons - start --> */}
                                <div class="flex gap-2.5">
                                    <button class="buynow-button inline-block flex-1 rounded-lg px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-[#a2cc4c] transition duration-100 focus-visible:ring active:bg-[#a2cc4c] sm:flex-none md:text-base" onClick={buyNow}>Buy Now</button>

                                    <Link href="https://drive.google.com/file/d/1NNWnSMBjQVf9qBvsqSGgdjqxQ4Ag_Ewx/view?usp=share_link" target='_blank' class="pdf-button inline-block rounded-lg bg-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-[#a2cc4c] transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">
                                        PDF
                                    </Link>
                                </div>
                                {/* <!-- buttons - end --> */}

                                {/* <!-- description - start --> */}
                                <div class="mt-10 md:mt-8 lg:mt-12">
                                    <div class="mb-3 text-2xl font-bold text-white text-font">Description</div>

                                    <p class="text-white md:text-lg text-sm">
                                    The Java with Data Structures and Algorithms course offered by Eduno is designed to provide students with a comprehensive understanding of Java programming language, data structures, and algorithms. The curriculum covers topics such as Java syntax and semantics, OOPs concepts, data structures, and algorithms. <br /> <br />

The course is taught by experienced teachers and developers who provide hands-on instruction and real-world examples to help students apply what they've learned. The interactive learning experience ensures that students are engaged and able to progress at their own pace.

                                    </p>


                                </div>
                                {/* <!-- description - end --> */}

                            </div>
                            {/* <!-- content - end --> */}
                        </div>


                        {/* Features section start  */}
                        <div className='text-white mt-6'>
                            <h1 className='text-4xl font-bold italic text-font'>Features:</h1>
                            <section class="text-white body-font">
                                <div class="container flex flex-wrap flex-col">
                                    <div class="flex relative pt-4 md:pb-4 sm:items-center">
                                        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                        </div>
                                        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#FD7014] text-black relative z-10 title-font font-medium text-sm">1</div>
                                        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">

                                            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                <h2 class="font-medium title-font text-white mb-1 text-xl md:text-2xl">Certification upon completion</h2>
                                                <p>Students who complete the course receive a certification that can be a valuable asset when applying for jobs in the industry.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex relative md:pb-2 sm:items-center">
                                        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                        </div>
                                        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#FD7014] text-black relative z-10 title-font font-medium text-sm">2</div>
                                        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">

                                            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                <h2 class="font-medium title-font text-white mb-1 text-xl md:text-2xl">Best Comprehensive Curriculum</h2>
                                                <p> The course curriculum covers a wide range of topics essential for Java programming, data structures, and algorithms. It includes Java syntax and semantics, object-oriented programming (OOPs) concepts, data structures, and various algorithms.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex relative md:pb-2 sm:items-center">
                                        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                        </div>
                                        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#FD7014] text-black relative z-10 title-font font-medium text-sm">3</div>
                                        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">

                                            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                <h2 class="font-medium title-font text-white mb-1 text-xl md:text-2xl">Experienced Instructors</h2>
                                                <p>The course is taught by experienced teachers and developers who have a deep understanding of Java programming, data structures, and algorithms. They provide expert guidance and leverage their real-world experience to deliver effective instruction</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex relative md:pb-2 sm:items-center">
                                        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                        </div>
                                        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#FD7014] text-black relative z-10 title-font font-medium text-sm">4</div>
                                        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">

                                            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                <h2 class="font-medium title-font text-white mb-1 text-xl md:text-2xl">Practical Application</h2>
                                                <p>The course focuses on practical application by providing real-world examples and projects. Students learn how to apply Java programming techniques to solve problems using data structures and algorithms. This practical approach enhances their problem-solving skills and prepares them for real-world challenges.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex relative md:pb-2 sm:items-center">
                                        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                        </div>
                                        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#FD7014] text-black relative z-10 title-font font-medium text-sm">5</div>
                                        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">

                                            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                <h2 class="font-medium title-font text-white mb-1 text-xl md:text-2xl">Interactive Learning Experience</h2>
                                                <p>The course offers an interactive learning experience to keep students engaged throughout their journey. Interactive learning materials, quizzes, and assignments enable students to assess their understanding and reinforce their knowledge. The flexibility to progress at their own pace ensures effective learning.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </section>
                        </div>
                        {/* Features section end  */}

                        <section class="text-[#EEEEEE] text-font body-font">
                            <div class="container px-5 pt-12 mx-auto">
                                <div class="flex flex-wrap -m-4 text-center">
                                    <div class="p-4 sm:w-1/4 w-1/2">
                                        <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">40+</h2>
                                        <p class="leading-relaxed text-[#FD7014]">Days</p>
                                    </div>
                                    <div class="p-4 sm:w-1/4 w-1/2">
                                        <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">80+</h2>
                                        <p class="leading-relaxed text-[#FD7014]">Exercise</p>
                                    </div>
                                    <div class="p-4 sm:w-1/4 w-1/2">
                                        <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">17+</h2>
                                        <p class="leading-relaxed text-[#FD7014]">Articles</p>
                                    </div>
                                    <div class="p-4 sm:w-1/4 w-1/2">
                                        <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">80+</h2>
                                        <p class="leading-relaxed text-[#FD7014]">Files</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div class="bg-black pt-6 sm:pt-8 lg:pt-12">
                            <div class="md:px-8">
                                <h2 class="mb-4 text-center text-2xl font-bold text-[#EEEEEE] md:mb-8 lg:text-3xl xl:mb-6 text-font">Customer Reviews</h2>

                                <div class="grid gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
                                    <div class="flex flex-col gap-3 rounded-lg border p-4 md:p-6">
                                        <div>
                                            <span class="block text-sm font-bold md:text-base text-white">Utkarsh Mittal</span>
                                            <span class="block text-sm text-gray-400">April 28, 2023</span>
                                        </div>

                                        <div class="-ml-1 flex gap-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-yellow" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </div>

                                        <p class="text-gray-400">The flexibility to progress at my own pace was another advantage of this course. It allowed me to dedicate more time to challenging topics and move quickly through familiar ones. The interactive learning materials, including quizzes and assignments, provided ample opportunities to reinforce my knowledge.</p>
                                    </div>
                                    <div class="flex flex-col gap-3 rounded-lg border p-4 md:p-6">
                                        <div>
                                            <span class="block text-sm font-bold md:text-base text-white">Mahak Gupta</span>
                                            <span class="block text-sm text-gray-400">June 01, 2023</span>
                                        </div>

                                        <div class="-ml-1 flex gap-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </div>

                                        <p class="text-gray-400">The experienced teachers and developers who taught this course were exceptional. They provided hands-on instruction and real-world examples, which made it easier for me to grasp complex concepts. The interactive learning experience kept me engaged and motivated throughout the course.</p>
                                    </div>

                                    <div class="flex flex-col gap-3 rounded-lg border p-4 md:p-6">
                                        <div>
                                            <span class="block text-sm font-bold md:text-base text-white">Vasudha Gupta</span>
                                            <span class="block text-sm text-gray-400">May 22, 2023</span>
                                        </div>

                                        <div class="-ml-1 flex gap-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </div>

                                        <p class="text-gray-400">One of the highlights of this course was the emphasis on practical application. Through various projects and coding exercises, I gained valuable experience in applying Java and implementing data structures and algorithms. This hands-on approach solidified my understanding and improved my problem-solving skills.</p>
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