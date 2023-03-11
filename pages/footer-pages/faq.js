import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

const FAQ = () => {
    return (
        <>
            <Head>
                <title>FAQ (Frequently Asked Question) | Eduno (Empower yourself with Eduno)</title>
            </Head>
            <div className='bg-[#001719] text-white flex items-center flex-col'>
                <Image src="/logo.png" className='pt-8' width={40} height={40} alt="" />
                <h1 className='text-4xl font-bold pb-2'>Eduno</h1>
                <h1 className='text-4xl pt-4 pb-4'>FAQ (Frequently Asked Questions)</h1>
                <div class="bg-[#001719] py-6 sm:py-8 lg:py-12">
                    <div class="mx-auto max-w-screen-xl px-4 md:px-8">

                        <div class="grid gap-4 sm:grid-cols-2 md:gap-8">
                            {/* <!-- question - start --> */}
                            <div class="rounded-lg bg-[#001719] p-5">
                                <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                                    <h3 class="font-semibold text-[#a2cc4c] sm:text-lg md:text-xl">What is Eduno?</h3>

                                    <span class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </div>

                                <p class="text-gray-500">Eduno is an online platform that provides courses for technical skills such as web development, android development, and more.</p>
                            </div>
                            {/* <!-- question - end --> */}
                            {/* <!-- question - start --> */}
                            <div class="rounded-lg bg-[#001719] p-5">
                                <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                                    <h3 class="font-semibold text-[#a2cc4c] sm:text-lg md:text-xl">What kind of courses are available on Eduno?</h3>

                                    <span class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </div>

                                <p class="text-gray-500">Eduno provides courses for technical skills such as web development, android development, machine learning, data science, and more.</p>
                            </div>
                            {/* <!-- question - end --> */}
                            {/* <!-- question - start --> */}
                            <div class="rounded-lg bg-[#001719] p-5">
                                <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                                    <h3 class="font-semibold text-[#a2cc4c] sm:text-lg md:text-xl">Are the courses on Eduno taught by professionals?</h3>

                                    <span class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </div>

                                <p class="text-gray-500">Yes, all the courses on Eduno are taught by industry professionals with years of experience.</p>
                            </div>
                            {/* <!-- question - end --> */}
                            {/* <!-- question - start --> */}
                            <div class="rounded-lg bg-[#001719] p-5">
                                <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                                    <h3 class="font-semibold text-[#a2cc4c] sm:text-lg md:text-xl">Can I access the courses on Eduno anytime?</h3>

                                    <span class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </div>

                                <p class="text-gray-500">Yes, you can access the courses on Eduno anytime and anywhere as long as you have an internet connection.</p>
                            </div>
                            {/* <!-- question - end --> */}
                            {/* <!-- question - start --> */}
                            <div class="rounded-lg bg-[#001719] p-5">
                                <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                                    <h3 class="font-semibold text-[#a2cc4c] sm:text-lg md:text-xl">Can I get a certificate after completing a course on Eduno?</h3>

                                    <span class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </div>

                                <p class="text-gray-500">Yes, you will receive a certificate of completion after finishing a course on Eduno.</p>
                            </div>
                            {/* <!-- question - end --> */}
                            {/* <!-- question - start --> */}
                            <div class="rounded-lg bg-[#001719] p-5">
                                <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                                    <h3 class="font-semibold text-[#a2cc4c] sm:text-lg md:text-xl">Do I need to have any prior knowledge to take a course on Eduno?</h3>

                                    <span class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </div>

                                <p class="text-gray-500">No, you do not need to have any prior knowledge to take a course on Eduno. Our courses are designed to cater to beginners as well as professionals.</p>
                            </div>
                            {/* <!-- question - end --> */}
                            {/* <!-- question - start --> */}
                            <div class="rounded-lg bg-[#001719] p-5">
                                <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                                    <h3 class="font-semibold text-[#a2cc4c] sm:text-lg md:text-xl">How long does it take to complete a course on Eduno?</h3>

                                    <span class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </div>

                                <p class="text-gray-500">The duration of a course on Eduno varies depending on the course, but most courses take between 4 to 12 weeks to complete</p>
                            </div>
                            {/* <!-- question - end --> */}
                            {/* <!-- question - start --> */}
                            <div class="rounded-lg bg-[#001719] p-5">
                                <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                                    <h3 class="font-semibold text-[#a2cc4c] sm:text-lg md:text-xl">Can I access multiple courses on Eduno at the same time?</h3>

                                    <span class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </div>

                                <p class="text-gray-500">Yes, you can access multiple courses on Eduno at the same time.</p>
                            </div>
                            {/* <!-- question - end --> */}
                            {/* <!-- question - start --> */}
                            <div class="rounded-lg bg-[#001719] p-5">
                                <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                                    <h3 class="font-semibold text-[#a2cc4c] sm:text-lg md:text-xl">Are the courses on Eduno interactive?</h3>

                                    <span class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </div>

                                <p class="text-gray-500">Yes, the courses on Eduno are interactive and involve quizzes, assignments, and projects.</p>
                            </div>
                            {/* <!-- question - end --> */}
                            {/* <!-- question - start --> */}
                            <div class="rounded-lg bg-[#001719] p-5">
                                <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                                    <h3 class="font-semibold text-[#a2cc4c] sm:text-lg md:text-xl">Is there any support available if I face any issues while taking a course on Eduno?</h3>

                                    <span class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </div>

                                <p class="text-gray-500">Yes, we have a dedicated support team that is available 24/7 to assist you with any issues you face while taking a course on Eduno.</p>
                            </div>
                            {/* <!-- question - end --> */}
                            {/* <!-- question - start --> */}
                            <div class="rounded-lg bg-[#001719] p-5">
                                <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                                    <h3 class="font-semibold text-[#a2cc4c] sm:text-lg md:text-xl">Are the courses on Eduno self-paced?</h3>

                                    <span class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </div>

                                <p class="text-gray-500">Yes, the courses on Eduno are self-paced, which means you can learn at your own pace.</p>
                            </div>
                            {/* <!-- question - end --> */}
                            {/* <!-- question - start --> */}
                            <div class="rounded-lg bg-[#001719] p-5">
                                <div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                                    <h3 class="font-semibold text-[#a2cc4c] sm:text-lg md:text-xl">How can I contact Eduno if I have any queries?</h3>

                                    <span class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </div>

                                <p class="text-gray-500">You can contact Eduno by emailing us at <span className='text-[#1a6f9d]'>officialeduno@gmail.com</span> or by using the contact form on our website.</p>
                            </div>
                            {/* <!-- question - end --> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FAQ