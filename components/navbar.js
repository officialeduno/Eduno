/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { useRouter } from 'next/router';

import React, { useEffect, useState } from 'react'

import { useRef } from 'react';

const Navbar = (props) => {

    const router = useRouter();


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

    const [dropdown, setDropdown] = useState(false);


    const ref = useRef();

    return (

        <div>

            <div className="navigationbg">
                <div className="mx-auto max-w-screen-4xl px-4 md:px-16">

                    <header className="flex items-center justify-between py-4 md:py-4">
                        <Link href={"/"}><img src="../eduno-white.png" className='h-8' alt="" /></Link>


                        <nav className="hidden gap-12 lg:flex">
                            <Link href={'/'} className="text-lg text-font navbar-menu-text-color transition duration-100 navbar-menu-hover-text-color">Home</Link>
                            <Link href={'#courses'} className="text-lg text-font navbar-menu-text-color transition duration-100 navbar-menu-hover-text-color">Course</Link>
                            <Link href={'/features/feature'} className="inline-flex items-center navbar-menu-text-color gap-1 text-lg text-font navbar-menu-hover-text-color">Features</Link>
                            <Link href={'/blogs/blog'} className="text-lg text-font navbar-menu-text-color transition duration-100 navbar-menu-hover-text-color">Blog</Link>
                            <a href="#" className="text-lg text-font navbar-menu-text-color transition duration-100 navbar-menu-hover-text-color">Store</a>
                            <a href="#" className="text-lg text-font navbar-menu-text-color transition duration-100 navbar-menu-hover-text-color">About</a>
                        </nav>


                        {!props.user.value && <div className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">

                            <Link href={'/authentication/signin'} className="inline-block rounded-lg px-4 py-3 text-center text-sm text-font outline-none text-[#EEEEEE] transition duration-100 hover:text-[#FD7014] focus-visible:ring md:text-base">Sign in</Link>

                            <Link href={'/authentication/signup'} className="inline-block rounded-lg px-8 py-3 text-center text-sm font-semibold  outline-none  transition duration-300 bg-[#FD7014] button-hover-background button-text button-hover-text focus-visible:ring active:bg-[#a2cc4c] md:text-base">Sign up</Link>
                        </div>}

                        {props.user.value && <a onMouseOver={() => { setDropdown(true) }} onMouseLeave={() => { setDropdown(false) }}>

                            {dropdown && <div onMouseOver={() => { setDropdown(true) }} onMouseLeave={() => { setDropdown(false) }} className="absolute right-16 top-16 border-2 border-[#FD7014] text-white bg-black">
                                <ul className='flex flex-col items-left'>
                                    <li className='cursor-pointer my-4 mx-4 mr-10'><Link href={'/dashboard/profile'}>Profile</Link></li>
                                    <hr className='border-1 border-white' />
                                    <li className='cursor-pointer my-2 mx-4 mr-10'><Link href={'/dashboard/achievements'}>Achievements</Link></li>
                                    <li className='cursor-pointer my-2 mb-4 mx-4 mr-10'><Link href={'/dashboard/setting'}>Setting</Link></li>
                                    <hr className='border-1 border-white' />
                                    <li className='cursor-pointer my-2 mx-4 mr-10'><Link href={'/dashboard/help'}>Help</Link></li>
                                    <li className='cursor-pointer my-2 mb-4 mx-4 mr-10' onClick={props.logout}>Sign Out</li>
                                </ul>
                            </div>}
                            {props.user.value && <div onMouseOver={() => { setDropdown(true) }} onMouseLeave={() => { setDropdown(false) }} className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start"><button className="inline-block rounded-lg bg-[#fd7114a8] px-8 py-3 text-center text-sm font-semibold text-white outline-none  transition duration-100 hover:bg-[#fd711452] hover:text-white focus-visible:ring active:bg-[#a2cc4c] md:text-base">Hi! {props.userName.value}</button></div>}

                        </a>}


                        <button type="button" onClick={handleMenu} className="inline-flex items-center gap-2 rounded-lg bg-white px-2.5 py-2 text-sm font-semibold text-black ring-indigo-300 hover:bg-white focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                        </button>

                    </header>
                </div>


                <div ref={ref} className='sidebar flex flex-col items-center h-[100%] px-3 py-4 fixed top-0 right-0 navbar-hamburger-bg transform transition-transform translate-x-full w-[20rem] shadow-2xl border-2 border-[#FD7014] z-10'>

                    <span onClick={handleMenu} className="items-start w-[100%]" ><img src="/icons/x-button.png" className='h-4' alt="" /></span>
                    <img src="eduno-white.png" className='h-8 mb-8 mt-8' alt="" />


                    <Link href={'/'} onClick={handleMenu} className="py-3 pt-4 text-lg text-font text-white transition duration-100 navbar-menu-hover-text-color">Home</Link>
                    <Link href={'/features/feature'} onClick={handleMenu} className="py-3 text-lg text-font text-white transition duration-100 navbar-menu-hover-text-color">Course</Link>
                    <a href="#" onClick={handleMenu} className="py-3 inline-flex items-center text-white gap-1 text-lg text-font navbar-menu-hover-text-color">Features</a>
                    <Link href={'/blogs/blog'} onClick={handleMenu} className="py-3 text-lg text-font text-white transition duration-100 navbar-menu-hover-text-color">Blog</Link>
                    <a href="#" onClick={handleMenu} className="py-3 text-lg text-font text-white transition duration-100 navbar-menu-hover-text-color">Store</a>
                    <a href="#" onClick={handleMenu} className="py-3 text-lg text-font text-white transition duration-100 navbar-menu-hover-text-color">About</a>


                    {!props.user.value && <div className="flex gap-2.5 flex-col sm:justify-center lg:flex lg:justify-start">

                        <Link href={'/authentication/signin'} onClick={handleMenu} className="inline-block rounded-lg bg-[#EEEEEE] px-8 py-3 text-center text-sm font-semibold text-black outline-none  transition duration-100 hover:bg-black hover:text-[#FD7014] focus-visible:ring active:bg-white md:text-base">Sign in</Link>

                        <Link href={'/authentication/signup'} onClick={handleMenu} className="inline-block rounded-lg px-4 py-3 text-center text-md font-semibold outline-none text-[#FD7014] transition duration-100 hover:text-[#EEEEEE] focus-visible:ring md:text-base">Sign up</Link>
                    </div>}

                    {props.user.value && <div className='flex flex-col'>
                        <Link href={'/'} className="inline-block rounded-lg bg-[#EEEEEE] px-8 py-3 text-center text-sm font-semibold text-black outline-none  transition duration-100 hover:bg-white hover:text-[#FD7014] focus-visible:ring active:bg-white md:text-base">Hi! {props.userName.value}</Link>
                        <Link href={'/'} onClick={props.logout} className=" mt-4 inline-block rounded-lg border-4 border-[#fd7114c5] px-8 py-3 text-center text-sm font-semibold text-white outline-none  transition duration-100 hover:bg-white hover:text-black focus-visible:ring active:bg-white md:text-base">Sign Out</Link>
                    </div>}

                </div>
            </div>
        </div>
    )
}

export default Navbar