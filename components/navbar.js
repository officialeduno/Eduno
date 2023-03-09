/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div class="bg-[#001719]">
                <div class="mx-auto max-w-screen-4xl px-4 md:px-8">
                    <header class="flex items-center justify-between py-4 md:py-4">
                        {/* <!-- logo - start --> */}
                        <a href="/" class="text-white inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl" aria-label="logo">
                            <img src="logo.png" className='h-10' alt="" />
                            Eduno
                        </a>
                        {/* <!-- logo - end --> */}

                        {/* <!-- nav - start --> */}
                        <nav class="hidden gap-12 lg:flex">
                            <a href="#" class="text-lg font-semibold text-white transition duration-100 hover:text-[#a2cc4c]">Home</a>
                            <a href="#" class="inline-flex items-center text-white gap-1 text-lg font-semibold hover:text-[#a2cc4c]">
                                Features
                            </a>
                            <a href="#" class="text-lg font-semibold text-white transition duration-100 hover:text-[#a2cc4c]">Pricing</a>
                            <a href="#" class="text-lg font-semibold text-white transition duration-100 hover:text-[#a2cc4c]">About</a>
                        </nav>
                        {/* <!-- nav - end --> */}

                        {/* <!-- buttons - start --> */}
                        <div class="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
                            <a href="#" class="inline-block rounded-lg px-4 py-3 text-center text-sm font-semibold outline-none text-[#a2cc4c] transition duration-100 hover:text-white focus-visible:ring md:text-base">Sign in</a>

                            <a href="#" class="inline-block rounded-lg bg-[#a2cc4c] px-8 py-3 text-center text-sm font-semibold text-white outline-none  transition duration-100 hover:bg-white hover:text-black focus-visible:ring active:bg-indigo-700 md:text-base">Sign up</a>
                        </div>

                        <button type="button" class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                            </svg>

                            Menu
                        </button>
                        {/* <!-- buttons - end --> */}
                    </header>
                </div>
            </div>
        </div>
    )
}

export default Navbar