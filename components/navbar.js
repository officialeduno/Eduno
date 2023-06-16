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
    const [androidDropdown, setAndroidDropdown] = useState(false);

    const handleAndroidDropdown = (e) =>{
        e.preventDefault();
        if(androidDropdown==false){
            setAndroidDropdown(true);
        } else{
            setAndroidDropdown(false);
        }
    }

    const ref = useRef();

    return (

        <div>

            <div className="navigationbg">
                <div className="mx-auto max-w-screen-4xl px-4 md:px-16">

                    <header className="flex items-center justify-between py-4 md:py-4">
                        <Link href={"/"}><img src="../eduno-white.png" className='h-8' alt="" /></Link>


                        <nav className="hidden gap-12 lg:flex">
                            <Link href={'/'} className="text-lg text-font navbar-menu-text-color transition duration-100 navbar-menu-hover-text-color">Home</Link>
                            <Link href={'/courses/allcourses'} className="text-lg text-font navbar-menu-text-color transition duration-100 navbar-menu-hover-text-color">Course</Link>
                            <Link href={'https://roadmap.sh/'} target='_blank' className="inline-flex items-center navbar-menu-text-color gap-1 text-lg text-font navbar-menu-hover-text-color">RoadMaps</Link>
                            <Link href={'/contests/allcontest'} className="text-lg text-font navbar-menu-text-color transition duration-100 navbar-menu-hover-text-color">Contest</Link>
                            <Link href={'/community/jointhecommunity'} className="text-lg text-font navbar-menu-text-color transition duration-100 navbar-menu-hover-text-color">Community</Link>
                            <Link href={'/mentorship/mentors'} className="text-lg text-font navbar-menu-text-color transition duration-100 navbar-menu-hover-text-color">Mentors</Link>
                            <Link href={'/blogs/blog'} className="text-lg text-font navbar-menu-text-color transition duration-100 navbar-menu-hover-text-color">Blog</Link>
                            <Link href={"/about"} className="text-lg text-font navbar-menu-text-color transition duration-100 navbar-menu-hover-text-color">About</Link>
                        </nav>


                        {!props.user.value && <div className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">

                            <Link href={'/authentication/signin'} className="inline-block rounded-lg px-4 py-3 text-center text-sm text-font outline-none text-[#EEEEEE] transition duration-100 hover:text-[#FD7014] focus-visible:ring md:text-base">Sign in</Link>

                            <Link href={'/authentication/signup'} className="inline-block rounded-lg px-8 py-3 text-center text-sm font-semibold  outline-none  transition duration-300 bg-[#FD7014] button-hover-background button-text button-hover-text focus-visible:ring active:bg-[#a2cc4c] md:text-base">Sign up</Link>
                        </div>}

                        {props.user.value && <a onMouseOver={() => { setDropdown(true) }} onMouseLeave={() => { setDropdown(false) }}>

                            {dropdown && <div onMouseOver={() => { setDropdown(true) }} onMouseLeave={() => { setDropdown(false) }} className="absolute right-16 top-16 border-2 border-[#FD7014] text-white bg-black z-10">
                                <ul className='flex flex-col items-left'>
                                    <li className='cursor-pointer my-2 mx-4 mr-10'><Link href={'/dashboard/profile'}>Profile</Link></li>
                                    <li className='cursor-pointer my-2 mb-4 mx-4 mr-10'><Link href={'/dashboard/yourcourses'}>Your Courses</Link></li>
                                    <hr className='border-1 border-white' />
                                    <li className='cursor-pointer my-2 mx-4 mr-10'><Link href={'/dashboard/achievements'}>Achievements</Link></li>
                                    <li className='cursor-pointer my-2 mb-4 mx-4 mr-10'><Link href={'/dashboard/setting'}>Setting</Link></li>
                                    <hr className='border-1 border-white' />
                                    <li className='cursor-pointer my-2 mx-4 mr-10'><Link href={'/dashboard/help'}>Help</Link></li>
                                    <li className='cursor-pointer my-2 mb-4 mx-4 mr-10' onClick={props.logout}>Sign Out</li>
                                </ul>
                            </div>}
                            {props.user.value && <div onMouseOver={() => { setDropdown(true) }} onMouseLeave={() => { setDropdown(false) }} className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start"><button className="text-font inline-block rounded-lg px-8 py-3 text-center text-sm font-semibold text-white outline-none  transition duration-100 hover:text-white focus-visible:ring active:bg-[#a2cc4c] md:text-base hi-button">Hi! {props.userName.value}</button></div>}

                        </a>}


                        <button type="button" onClick={handleMenu} className="inline-flex items-center gap-2 rounded-lg bg-white px-2.5 py-2 text-sm font-semibold text-black ring-indigo-300 hover:bg-white focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                        </button>

                    </header>
                </div>


                <div ref={ref} className='sidebar flex flex-col items-center h-[100vh] px-3 py-4 fixed top-0 right-0 navbar-hamburger-bg transform transition-transform translate-x-full w-[20rem] shadow-2xl border-2 border-[#FD7014] overflow-y-auto z-10'>

                    <span onClick={handleMenu} className="items-start w-[100%]" ><img src="/icons/x-button.png" className='h-4' alt="" /></span>
                    <img src="/eduno-white.png" className='h-8 mb-8 mt-8' alt="" />


                    <Link href={'/'} onClick={handleMenu} className="py-3 pt-4 text-lg text-font text-white transition duration-100 navbar-menu-hover-text-color">Home</Link>
                    <Link href={'/courses/allcourses'} onClick={handleMenu} className="py-3 text-lg text-font text-white transition duration-100 navbar-menu-hover-text-color">Course</Link>
                    <Link href={"https://roadmap.sh/"} target='_blank' onClick={handleMenu} className="py-3 inline-flex items-center text-white gap-1 text-lg text-font navbar-menu-hover-text-color">RoadMaps</Link>
                    <Link href={'/contests/allcontest'} onClick={handleMenu} className="py-3 text-lg text-font text-white transition duration-100 navbar-menu-hover-text-color">Contest</Link>
                    <Link href={'/community/jointhecommunity'} onClick={handleMenu} className="py-3 text-lg text-font text-white transition duration-100 navbar-menu-hover-text-color">Community</Link>
                    <Link href={'/mentorship/mentors'} onClick={handleMenu} className="py-3 text-lg text-font text-white transition duration-100 navbar-menu-hover-text-color">Mentors</Link>
                    <Link href={'/blogs/blog'} onClick={handleMenu} className="py-3 text-lg text-font text-white transition duration-100 navbar-menu-hover-text-color">Blog</Link>
                    <Link href={"/about"} onClick={handleMenu} className="py-3 text-lg text-font text-white transition duration-100 navbar-menu-hover-text-color">About</Link>


                    {!props.user.value && <div className="flex gap-2.5 flex-col sm:justify-center lg:flex lg:justify-start">

                        <Link href={'/authentication/signin'} onClick={handleMenu} className="inline-block rounded-lg bg-[#EEEEEE] px-8 py-3 text-center text-sm font-semibold text-black outline-none  transition duration-100 hover:bg-black hover:text-[#FD7014] focus-visible:ring active:bg-white md:text-base">Sign in</Link>

                        <Link href={'/authentication/signup'} onClick={handleMenu} className="inline-block rounded-lg px-4 py-3 text-center text-md font-semibold outline-none text-[#FD7014] transition duration-100 hover:text-[#EEEEEE] focus-visible:ring md:text-base">Sign up</Link>
                    </div>}

                    {props.user.value && <div className='flex flex-col'>
                        <button onClick={handleAndroidDropdown} className="inline-block rounded-lg bg-[#EEEEEE] px-8 py-3 text-center text-sm font-semibold text-black outline-none  transition duration-100 hover:bg-white hover:text-[#FD7014] focus-visible:ring active:bg-white md:text-base">Hi! {props.userName.value}</button>
                        {androidDropdown && <ul className='flex flex-col items-left text-white'>
                                    <li className='cursor-pointer my-2 mb-4'><Link href={'/dashboard/profile'}>Profile</Link></li>
                                    <li className='cursor-pointer my-2 mb-4'><Link href={'/dashboard/yourcourses'}>Your Courses</Link></li>
                                    <li className='cursor-pointer my-2 mb-4'><Link href={'/dashboard/achievements'}>Achievements</Link></li>
                                    <li className='cursor-pointer my-2 mb-4'><Link href={'/dashboard/setting'}>Setting</Link></li>
                                    <li className='cursor-pointer my-2 mb-4'><Link href={'/dashboard/help'}>Help</Link></li>
                                </ul>}
                        <Link href={'/'} onClick={props.logout} className=" mt-4 inline-block rounded-lg border-4 border-[#fd7114c5] px-8 py-3 text-center text-sm font-semibold text-white outline-none  transition duration-100 hover:bg-white hover:text-black focus-visible:ring active:bg-white md:text-base">Sign Out</Link>
                    </div>}

                </div>
            </div>
        </div>
    )
}

export default Navbar