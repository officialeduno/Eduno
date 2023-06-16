/* eslint-disable @next/next/no-img-element */

import React from 'react'
import Head from 'next/head'

const Blog = () => {
    return (
        <>

        <Head>
            <title>Blogs (Be updated with technology with our BLogs)</title>
        </Head>

        <div>

            <div className="bg-black py-4 sm:py-6 lg:py-4">
                <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                    <div className="mb-10 md:mb-16">
                        <h2 className="mb-4 text-center text-4xl font-bold text-white md:mb-6 lg:text-6xl">Blog</h2>

                        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Welcome to the blog section of Eduno, your go-to source for the latest technical updates and insights! At Eduno, we understand the importance of staying ahead in the ever-evolving world of technology. Our blog is designed to keep you informed and inspired, providing you with the knowledge and tools to excel in your field.</p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8">
                        <div className="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
                            <a href="#" className="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
                                <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                            </a>

                            <div className="flex flex-col gap-2 p-4 lg:p-6">
                                <span className="text-sm text-gray-400">July 19, 2021</span>

                                <h2 className="text-xl font-bold text-gray-800">
                                    <a href="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">New trends in Tech</a>
                                </h2>

                                <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>

                                <div>
                                    <a href="#" className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read more</a>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
                            <a href="#" className="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
                                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                            </a>

                            <div className="flex flex-col gap-2 p-4 lg:p-6">
                                <span className="text-sm text-gray-400">April 07, 2021</span>

                                <h2 className="text-xl font-bold text-gray-800">
                                    <a href="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">Working with legacy stacks</a>
                                </h2>

                                <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>

                                <div>
                                    <a href="#" className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read more</a>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
                            <a href="#" className="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
                                <img src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                            </a>

                            <div className="flex flex-col gap-2 p-4 lg:p-6">
                                <span className="text-sm text-gray-400">March 15, 2021</span>

                                <h2 className="text-xl font-bold text-gray-800">
                                    <a href="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">10 best smartphones for devs</a>
                                </h2>

                                <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>

                                <div>
                                    <a href="#" className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read more</a>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
                            <a href="#" className="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
                                <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                            </a>

                            <div className="flex flex-col gap-2 p-4 lg:p-6">
                                <span className="text-sm text-gray-400">January 27, 2021</span>

                                <h2 className="text-xl font-bold text-gray-800">
                                    <a href="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">8 High performance Notebooks</a>
                                </h2>

                                <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>

                                <div>
                                    <a href="#" className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read more</a>
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

export default Blog