/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Android = (props) => {
    const buyNow = (e) => {
        e.preventDefault();
        props.buyNow("training")
    }
    return (

        <>
            <Head>
                <title>Training & Internship 2023 | Eduno (Empower yourself with Eduno)</title>
            </Head>

            <div>
                <div class="bg-black pt-6 sm:pt-8 lg:pt-12">
                    <div class="mx-2 px-2 md:px-4 md:mx-4 lg:mx-24">
                        <div class="grid gap-8 md:grid-cols-2">
                            {/* <!-- images - start --> */}
                            <div class="space-y-4">
                                <div class="relative overflow-hidden rounded-lg bg-gray-100">
                                    <img src="../img/training.png" loading="lazy" alt="Photo by Himanshu Dewangan" class="h-full w-full object-cover object-center" />

                                    <span class="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">50% Off</span>
                                </div>
                            </div>
                            {/* <!-- images - end --> */}

                            {/* <!-- content - start --> */}
                            <div class="md:py-8">
                                {/* <!-- name - start --> */}
                                <div class="mb-2 md:mb-3">
                                    <h2 class="text-xl md:text-3xl font-bold text-white lg:text-3xl text-font">Training and Internship 2023</h2>
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
                                </div>
                                {/* <!-- rating - end --> */}

                                {/* <!-- price - start --> */}
                                <div class="mb-4">
                                    <div class="flex items-end gap-2">
                                        <span class="text-xl font-bold text-white md:text-2xl text-font">₹899</span>
                                        <span class="mb-0.5 text-red-500 line-through text-font">₹1,798</span>
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
                                        Training in Computer Science (CS) is an excellent way to gain skills and knowledge in the field of computing. With the rapid growth of technology, training in CS has become increasingly popular and valuable. <br /> <br />

                                        CS training programs can vary in length and focus, but typically cover a wide range of topics such as programming, data structures, algorithms, computer architecture, operating systems, software engineering, databases, artificial intelligence, and more. <br /> <br />

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
                                                <h2 class="font-medium title-font text-white mb-1 text-xl md:text-2xl">Skill Development and Knowledge Enhancement</h2>
                                                <p>This course provides participants with an opportunity to develop valuable skills and gain in-depth knowledge in the field of computing. With the rapidly evolving technology landscape, CS training has become highly sought after and valuable.</p>
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
                                                <h2 class="font-medium title-font text-white mb-1 text-xl md:text-2xl">Customizable Program</h2>
                                                <p>CS training programs can be tailored to suit the needs and goals of participants. </p>
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
                                                <h2 class="font-medium title-font text-white mb-1 text-xl md:text-2xl">Hands-on Learning</h2>
                                                <p>The course emphasizes practical, hands-on learning experiences. Participants have the opportunity to apply the theoretical knowledge gained in real-world scenarios, working on projects and assignments that simulate industry challenges. </p>
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
                                                <h2 class="font-medium title-font text-white mb-1 text-xl md:text-2xl">Internship Opportunities</h2>
                                                <p>Alongside the training, participants may have the chance to engage in internships, which provide valuable industry exposure and practical work experience. Internships allow participants to apply their skills in real-world settings, gain insights into professional workflows, and build a professional network..</p>
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
                                                <h2 class="font-medium title-font text-white mb-1 text-xl md:text-2xl">Experienced Instructors</h2>
                                                <p>The course is facilitated by experienced instructors who have expertise in various CS domains. They bring industry knowledge and practical insights into the classroom, ensuring that participants receive high-quality instruction and mentorship.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex relative md:pb-2 sm:items-center">
                                        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                        </div>
                                        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#FD7014] text-black relative z-10 title-font font-medium text-sm">6</div>
                                        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">

                                            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                                <h2 class="font-medium title-font text-white mb-1 text-xl md:text-2xl">Career Advancement</h2>
                                                <p>Completion of the training and internship course in CS equips participants with the skills and knowledge that are highly valued by employers in the industry. It enhances their career prospects, opening doors to a variety of opportunities in software development, data analysis, systems architecture, and more.</p>
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
                                        <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">7+</h2>
                                        <p class="leading-relaxed text-[#FD7014]">Fields</p>
                                    </div>
                                    <div class="p-4 sm:w-1/4 w-1/2">
                                        <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">14+</h2>
                                        <p class="leading-relaxed text-[#FD7014]">Days</p>
                                    </div>
                                    <div class="p-4 sm:w-1/4 w-1/2">
                                        <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">37+</h2>
                                        <p class="leading-relaxed text-[#FD7014]">Subscriber</p>
                                    </div>
                                    <div class="p-4 sm:w-1/4 w-1/2">
                                        <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">243+</h2>
                                        <p class="leading-relaxed text-[#FD7014]">View</p>
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
                                            <span class="block text-sm font-bold md:text-base text-white">Shreyansh Abhisekh</span>
                                            <span class="block text-sm text-gray-400">May 28, 2023</span>
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

                                        <p class="text-gray-400">Furthermore, these training programs have a remarkable industry focus. Guest lectures and workshops led by experienced professionals from the tech industry provide invaluable industry insights, exposing participants to the latest trends, emerging technologies, and real-world applications of CS concepts. This exposure allows individuals to stay current and prepares them for future employment opportunities.</p>
                                    </div>
                                    <div class="flex flex-col gap-3 rounded-lg border p-4 md:p-6">
                                        <div>
                                            <span class="block text-sm font-bold md:text-base text-white">Somya Goyal</span>
                                            <span class="block text-sm text-gray-400">May 21, 2023</span>
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

                                        <p class="text-gray-400">The program's greatest strength lies in its ability to equip individuals with comprehensive skills and knowledge. The instructors are highly knowledgeable and offer valuable insights throughout the training. Their expertise not only ensures a solid theoretical foundation but also promotes practical application by guiding students through hands-on projects and assignments.</p>
                                    </div>

                                    <div class="flex flex-col gap-3 rounded-lg border p-4 md:p-6">
                                        <div>
                                            <span class="block text-sm font-bold md:text-base text-white">Anmol Jaiswal</span>
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

                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </div>

                                        <p class="text-gray-400">Enrolling in a Training in Computer Science (CS) course was an exceptional decision that bolstered my expertise and understanding in the world of computing. As technology continues to advance rapidly, the significance and demand for CS training have grown exponentially.</p>
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