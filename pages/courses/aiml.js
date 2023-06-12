/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Android = (props) => {
    const buyNow = (e) => {
        e.preventDefault();
        props.buyNow("aiml")
    }
    return (
        <>
            <Head>
                <title>Artificial Intelligence / Machine Learning | Eduno (Empower yourself with Eduno)</title>
            </Head>

            <div>
                <div class="bg-black pt-6 sm:pt-8 lg:pt-12">
                    <div class="mx-2 px-2 md:px-4 md:mx-4 lg:mx-24">
                        <div class="grid gap-8 md:grid-cols-2">
                            {/* <!-- images - start --> */}
                            <div class="space-y-4">
                                <div class="relative overflow-hidden rounded-lg bg-gray-100">
                                    <img src="../img/aiml.png" loading="lazy" alt="Photo by Himanshu Dewangan" class="h-full w-full object-cover object-center" />

                                    <span class="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">50% Off</span>
                                </div>
                            </div>
                            {/* <!-- images - end --> */}

                            {/* <!-- content - start --> */}
                            <div class="md:py-8">
                                {/* <!-- name - start --> */}
                                <div class="mb-2 md:mb-3">
                                    <h2 class="text-xl md:text-3xl font-bold text-white lg:text-3xl text-font">Artifical Intelligence / Machine Learning</h2>
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

                                    <span class="ml-2 text-sm text-gray-500">3.9</span>
                                </div>
                                {/* <!-- rating - end --> */}

                                {/* <!-- price - start --> */}
                                <div class="mb-4">
                                    <div class="flex items-end gap-2">
                                        <span class="text-xl font-bold text-white md:text-2xl text-font">₹1,999</span>
                                        <span class="mb-0.5 text-red-500 line-through text-font">₹3,998</span>
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
                                    The course covers a wide range of topics, including the fundamentals of AI/ML, statistical analysis, data preprocessing, model selection, and deployment. It also covers popular programming languages such as Python and R, and tools such as TensorFlow, Keras, and PyTorch. Students have access to practical, hands-on experience working with real-world data sets, learning how to use advanced techniques and algorithms to analyze data, gain insights, and make predictions. <br /> <br />

Upon completion of the AI/ML course, students receive a certification that is recognized and valued by employers in the industry. In addition to the certification, Eduno also offers goodies such as t-shirts, mugs, and other types of gifts according to the student's performance in the course, which can serve as a motivator and a symbol of accomplishment.

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
                                                <h2 class="font-medium title-font text-white mb-1 text-xl md:text-2xl">Comprehensive Coverage</h2>
                                                <p>The course provides an extensive coverage of AI/ML topics, including the fundamentals of artificial intelligence and machine learning. Students gain a solid understanding of statistical analysis, data preprocessing, model selection, and deployment.</p>
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
                                                <h2 class="font-medium title-font text-white mb-1 text-xl md:text-2xl">Recognized Certification</h2>
                                                <p>Upon successful completion of the AI/ML course, students receive a certification that is recognized and valued by employers in the industry.</p>
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
                                                <h2 class="font-medium title-font text-white mb-1 text-xl md:text-2xl">Programming Languages and Tools</h2>
                                                <p>The course introduces popular programming languages such as Python and R, which are widely used in the field of AI/ML. Students learn how to leverage these languages to implement algorithms and perform data analysis. Additionally, the course covers essential AI/ML tools and libraries, including TensorFlow, Keras, and PyTorch, enabling students to build and train advanced machine learning models.</p>
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
                                                <h2 class="font-medium title-font text-white mb-1 text-xl md:text-2xl">Hands-on Experience</h2>
                                                <p>Students have the opportunity to gain practical, hands-on experience through real-world data sets. This practical approach allows students to apply their theoretical knowledge and develop proficiency in using advanced techniques and algorithms to analyze data, extract meaningful insights, and make accurate predictions.</p>
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
                                                <h2 class="font-medium title-font text-white mb-1 text-xl md:text-2xl">Performance-Based Rewards</h2>
                                                <p>Eduno offers additional incentives to motivate and reward students' performance in the course. Students can earn goodies such as t-shirts, mugs, and other types of gifts based on their achievements. These rewards serve as a source of motivation and act as tangible symbols of accomplishment, further enhancing the learning experience.</p>
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
                                        <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">55+</h2>
                                        <p class="leading-relaxed text-[#FD7014]">Days</p>
                                    </div>
                                    <div class="p-4 sm:w-1/4 w-1/2">
                                        <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">32+</h2>
                                        <p class="leading-relaxed text-[#FD7014]">Exercise</p>
                                    </div>
                                    <div class="p-4 sm:w-1/4 w-1/2">
                                        <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">37+</h2>
                                        <p class="leading-relaxed text-[#FD7014]">Articles</p>
                                    </div>
                                    <div class="p-4 sm:w-1/4 w-1/2">
                                        <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">98+</h2>
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
                                            <span class="block text-sm font-bold md:text-base text-white">Pratik Chaudhary</span>
                                            <span class="block text-sm text-gray-400">May 11, 2023</span>
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

                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </div>

                                        <p class="text-gray-400">The AI/ML course offered by Eduno was a remarkable journey into the world of artificial intelligence and machine learning. The course covered a wide range of topics, including the fundamentals of AI/ML, statistical analysis, data preprocessing, model selection, and deployment. Moreover, the inclusion of popular programming languages like Python and R, along with tools such as TensorFlow, Keras, and PyTorch, provided a comprehensive learning experience.</p>
                                    </div>
                                    <div class="flex flex-col gap-3 rounded-lg border p-4 md:p-6">
                                        <div>
                                            <span class="block text-sm font-bold md:text-base text-white">Anjali Panghal</span>
                                            <span class="block text-sm text-gray-400">May 5, 2023</span>
                                        </div>

                                        <div class="-ml-1 flex gap-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </div>

                                        <p class="text-gray-400">The practical aspect of the course was exceptional. Working with real-world datasets allowed me to apply advanced techniques and algorithms, gaining hands-on experience in analyzing data, deriving insights, and making predictions. This practical exposure honed my skills and provided a solid foundation for real-world AI/ML applications.</p>
                                    </div>

                                    <div class="flex flex-col gap-3 rounded-lg border p-4 md:p-6">
                                        <div>
                                            <span class="block text-sm font-bold md:text-base text-white">Neha Verma</span>
                                            <span class="block text-sm text-gray-400">May 16, 2023</span>
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

                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </div>

                                        <p class="text-gray-400">Upon successful completion of the course, I received a recognized certification that holds significant value in the industry. This certification has positively impacted my professional prospects and showcased my proficiency in AI/ML. Additionally, the goodies offered by Eduno, such as t-shirts, mugs, and other gifts based on performance, served as motivating incentives and a tangible symbol of achievement. I highly recommend this AI/ML course for its comprehensive curriculum and practical application.</p>
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