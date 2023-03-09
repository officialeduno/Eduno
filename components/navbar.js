/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react'
import { useRef } from 'react';
import { AiOutlineArrowRight} from 'react-icons/Ai';

const Navbar = () => {

    const handleMenu = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        }
        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }
    }

    const ref = useRef();

    return (
        <div>
            <div class="bg-[#001719]">
                <div class="mx-auto max-w-screen-4xl px-4 md:px-16">
                    <header class="flex items-center justify-between py-4 md:py-4">
                        {/* <!-- logo - start --> */}
                        <Link href={'/'} class="text-white inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl" aria-label="logo">
                            <img src="logo.png" className='h-10' alt="" />
                            Eduno
                        </Link>
                        {/* <!-- logo - end --> */}

                        {/* <!-- nav - start --> */}
                        <nav class="hidden gap-12 lg:flex">
                            <Link href={'/'} class="text-lg font-semibold text-white transition duration-100 hover:text-[#a2cc4c]">Home</Link>
                            <Link href={'#courses'} class="text-lg font-semibold text-white transition duration-100 hover:text-[#a2cc4c]">Course</Link>
                            <Link href={'/features/feature'} class="inline-flex items-center text-white gap-1 text-lg font-semibold hover:text-[#a2cc4c]">Features</Link>
                            <a href="#" class="text-lg font-semibold text-white transition duration-100 hover:text-[#a2cc4c]">Pricing</a>
                            <Link href={'/blogs/blog'} class="text-lg font-semibold text-white transition duration-100 hover:text-[#a2cc4c]">Blog</Link>
                            <a href="#" class="text-lg font-semibold text-white transition duration-100 hover:text-[#a2cc4c]">Store</a>
                            <a href="#" class="text-lg font-semibold text-white transition duration-100 hover:text-[#a2cc4c]">About</a>
                        </nav>
                        {/* <!-- nav - end --> */}

                        {/* <!-- buttons - start --> */}
                        <div class="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
                            <Link href={'/authentication/signin'} class="inline-block rounded-lg px-4 py-3 text-center text-sm font-semibold outline-none text-[#a2cc4c] transition duration-100 hover:text-white focus-visible:ring md:text-base">Sign in</Link>

                            <Link href={'/authentication/signup'} class="inline-block rounded-lg bg-[#a2cc4c] px-8 py-3 text-center text-sm font-semibold text-white outline-none  transition duration-100 hover:bg-white hover:text-black focus-visible:ring active:bg-indigo-700 md:text-base">Sign up</Link>
                        </div>

                        <button type="button" onClick={handleMenu} class="inline-flex items-center gap-2 rounded-lg bg-[#a2cc4c] px-2.5 py-2 text-sm font-semibold text-white ring-indigo-300 hover:bg-[#6f8d35] focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                            </svg>

                            Menu
                        </button>
                        {/* <!-- buttons - end --> */}
                    </header>
                </div>

                <div ref={ref} className='sidebar flex flex-col items-center h-[100%] px-3 py-4 fixed top-0 right-0 bg-[#001719] transform transition-transform translate-x-full w-[20rem] shadow-2xl border-2 border-[#a2cc4c]'>
                    <span onClick={handleMenu}><AiOutlineArrowRight className='absolute top-3 left-3 cursor-pointer text-white font-bold text-2xl' /></span>
                    <img src="logo.png" className='h-12' alt="" />
                    <h1 className='text-white text-4xl'>Eduno</h1>
                    <a href='#' class="py-3 pt-4 text-lg font-semibold text-white transition duration-100 hover:text-[#a2cc4c]">Home</a>
                    <a href="#" class="py-3 text-lg font-semibold text-white transition duration-100 hover:text-[#a2cc4c]">Course</a>
                    <a href="#" class="py-3 inline-flex items-center text-white gap-1 text-lg font-semibold hover:text-[#a2cc4c]">Features</a>
                    <a href="#" class="py-3 text-lg font-semibold text-white transition duration-100 hover:text-[#a2cc4c]">Pricing</a>
                    <a href="#" class="py-3 text-lg font-semibold text-white transition duration-100 hover:text-[#a2cc4c]">Blog</a>
                    <a href="#" class="py-3 text-lg font-semibold text-white transition duration-100 hover:text-[#a2cc4c]">Store</a>
                    <a href="#" class="py-3 text-lg font-semibold text-white transition duration-100 hover:text-[#a2cc4c]">About</a>
                    <Link href={'/authentication/signin'} onClick={handleMenu} class="inline-block rounded-lg px-4 py-3 mt-8 text-center text-sm font-semibold outline-none text-[#a2cc4c] transition duration-100 hover:text-white focus-visible:ring md:text-base">Sign in</Link>
                    <Link href={'/authentication/signup'} onClick={handleMenu} class="inline-block rounded-lg bg-[#a2cc4c] px-12 mt-4 py-3 text-center text-sm font-semibold text-white outline-none  transition duration-100 hover:bg-white hover:text-black focus-visible:ring active:bg-indigo-700 md:text-base">Sign up</Link>

                </div>
            </div>
        </div>
    )
}

export default Navbar