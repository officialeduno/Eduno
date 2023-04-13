/* eslint-disable @next/next/no-img-element */

// Import link from the Next link package
import Link from 'next/link';

// Import react from the react package
import React, { useEffect, useState } from 'react'

// Import useRef from the react package
import { useRef } from 'react';
import { useRouter } from 'next/router'

// Create Navbar component
const Navbar = (props) => {
    const router = useRouter();



    const userId = router.query.userId;

    // HandleMenu to handle the menu section of the mobile system
    const handleMenu = () => {
        // If it already open then close 
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        }
        // If it is not open then close the menu
        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }
    }

    const handleUserButton = async(e) => {
        e.preventDefault();
        let data = {userId}
        let res = await fetch('http://localhost:3000/dashboard/getuser', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        let response = res.json();
        console.log(response);
    }

    // Create red variable
    const ref = useRef();

    return (

        // Main div component of navbar
        <div>

            {/* Background ground div  */}
            <div className="bg-[#001719]">
                <div className="mx-auto max-w-screen-4xl px-4 md:px-16">

                    {/* Header Component  */}
                    <header className="flex items-center justify-between py-4 md:py-4">
                        {/* <!-- logo - start --> */}
                        <Link href={'/'} className="text-white inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl" aria-label="logo">
                            <img src="logo.png" className='h-10' alt="" />
                            Eduno
                        </Link>
                        {/* <!-- logo - end --> */}


                        {/* <!-- nav - start --> */}
                        <nav className="hidden gap-12 lg:flex">
                            <Link href={'/'} className="text-lg font-semibold text-white transition duration-100 hover:text-[#a2cc4c]">Home</Link>
                            <Link href={'#courses'} className="text-lg font-semibold text-white transition duration-100 hover:text-[#a2cc4c]">Course</Link>
                            <Link href={'/features/feature'} className="inline-flex items-center text-white gap-1 text-lg font-semibold hover:text-[#a2cc4c]">Features</Link>
                            <Link href={'/blogs/blog'} className="text-lg font-semibold text-white transition duration-100 hover:text-[#a2cc4c]">Blog</Link>
                            <a href="#" className="text-lg font-semibold text-white transition duration-100 hover:text-[#a2cc4c]">Store</a>
                            <a href="#" className="text-lg font-semibold text-white transition duration-100 hover:text-[#a2cc4c]">About</a>
                        </nav>
                        {/* <!-- nav - end --> */}


                        {/* <!-- buttons - start --> */}
                        {!props.user.value ? <div className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">

                            {/* Sign in Button  */}
                            <Link href={'/authentication/signin'} className="inline-block rounded-lg px-4 py-3 text-center text-sm font-semibold outline-none text-[#a2cc4c] transition duration-100 hover:text-white focus-visible:ring md:text-base">Sign in</Link>

                            {/* Sign up button  */}
                            <Link href={'/authentication/signup'} className="inline-block rounded-lg bg-[#a2cc4c] px-8 py-3 text-center text-sm font-semibold text-white outline-none  transition duration-100 hover:bg-[#739235] hover:text-black focus-visible:ring active:bg-[#a2cc4c] md:text-base">Sign up</Link>
                        </div> : <div className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start"><button onClick={handleUserButton} className="inline-block rounded-lg bg-[#a2cc4c] px-8 py-3 text-center text-sm font-semibold text-white outline-none  transition duration-100 hover:bg-[#739235] hover:text-black focus-visible:ring active:bg-[#a2cc4c] md:text-base">Hi! {props.userName.value}</button></div>}


                        {/* Menu button for mobile  */}
                        <button type="button" onClick={handleMenu} className="inline-flex items-center gap-2 rounded-lg bg-[#a2cc4c] px-2.5 py-2 text-sm font-semibold text-white ring-indigo-300 hover:bg-[#6f8d35] focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                        </button>
                        {/* <!-- buttons - end --> */}

                    </header>
                </div>

                {/* Mobile section area  */}

                <div ref={ref} className='sidebar flex flex-col items-center h-[100%] px-3 py-4 fixed top-0 right-0 bg-[#001719] transform transition-transform translate-x-full w-[20rem] shadow-2xl border-2 border-[#a2cc4c] z-10'>


                    {/* Logo for mobile  */}
                    <span onClick={handleMenu} className="items-start w-[100%]" ><img src="/icons/x-button.png" className='h-4' alt="" /></span>
                    <img src="logo.png" className='h-12' alt="" />
                    <h1 className='text-white text-4xl'>Eduno</h1>


                    {/* Button section for the mobile  */}
                    <Link href={'/'} onClick={handleMenu} className="py-3 pt-4 text-lg font-semibold text-white transition duration-100 hover:text-[#a2cc4c]">Home</Link>
                    <Link href={'/features/feature'} onClick={handleMenu} className="py-3 text-lg font-semibold text-white transition duration-100 hover:text-[#a2cc4c]">Course</Link>
                    <a href="#" onClick={handleMenu} className="py-3 inline-flex items-center text-white gap-1 text-lg font-semibold hover:text-[#a2cc4c]">Features</a>
                    <Link href={'/blogs/blog'} onClick={handleMenu} className="py-3 text-lg font-semibold text-white transition duration-100 hover:text-[#a2cc4c]">Blog</Link>
                    <a href="#" onClick={handleMenu} className="py-3 text-lg font-semibold text-white transition duration-100 hover:text-[#a2cc4c]">Store</a>
                    <a href="#" onClick={handleMenu} className="py-3 text-lg font-semibold text-white transition duration-100 hover:text-[#a2cc4c]">About</a>


                    {/* Sign in and Sign up button for the mobile  */}
                    {!props.user.value ? <div className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">

                        {/* Sign in Button  */}
                        <Link href={'/authentication/signin'} className="inline-block rounded-lg px-4 py-3 text-center text-sm font-semibold outline-none text-[#a2cc4c] transition duration-100 hover:text-white focus-visible:ring md:text-base">Sign in</Link>

                        {/* Sign up button  */}
                        <Link href={'/authentication/signup'} className="inline-block rounded-lg bg-[#a2cc4c] px-8 py-3 text-center text-sm font-semibold text-white outline-none  transition duration-100 hover:bg-[#739235] hover:text-black focus-visible:ring active:bg-[#a2cc4c] md:text-base">Sign up</Link>
                    </div> : <Link href={'/'} className="inline-block rounded-lg bg-[#a2cc4c] px-8 py-3 text-center text-sm font-semibold text-white outline-none  transition duration-100 hover:bg-[#739235] hover:text-black focus-visible:ring active:bg-[#a2cc4c] md:text-base">Hi! {props.userName.value}</Link>}

                </div>
            </div>
        </div>
    )
}

// export the navbar component
export default Navbar