import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { setCookie } from 'cookies-next';

const Signup = (props) => {    
    let router= useRouter()
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [phoneNo, setPhone] = useState();
    const [password, setPassword] = useState();
    const handleChange = (e) => {
        if (e.target.name == 'firstName') {
            setFirstName(e.target.value);
        } else if (e.target.name == 'lastName') {
            setLastName(e.target.value);
        } else if (e.target.name == 'email') {
            setEmail(e.target.value);
        } else if (e.target.name == 'phoneNo') {
            setPhone(e.target.value);
        } else if (e.target.name == 'password') {
            setPassword(e.target.value);
        }
    }
    const emailAlreadyExistsToast = () => toast('Email Already Exists...', {
        autoClose: 2000,
        type: 'error'
    })
    const phoneAlreadyExistsToast = () => toast('Phone Number Already Exists...', {
        autoClose: 2000,
        type: 'error'
    })
    const somethingWentWrongToast = () => toast('Some Went Wrong...', {
        autoClose: 2000,
        type: 'error'
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        props.setProgress(30);
        const random_number = Math.floor(Math.random()*10000000)
        const edunoId = `ED${random_number}`
        const data = { edunoId, firstName, lastName, email, phoneNo, password };
        let res = await fetch('https://www.eduno.in/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        props.setProgress(80);
        let response = await res.json();
        if (response.success == true) {
            setCookie('edunoId', response.edunoId);
            setCookie('token', response.token);
            localStorage.setItem('loginToken', response.token);
            localStorage.setItem('userName', response.userName);
            localStorage.setItem('edunoId', response.edunoId);
            router.push("https://www.eduno.in/")
        } else if (response.error == "Phone Number already exists.") {
            phoneAlreadyExistsToast();
        } else if (response.error == "User already exists.") {
            emailAlreadyExistsToast();
        } else {
            somethingWentWrongToast();
        }
    }

    return (
        <>
            <Head>
                <title>Create your Account | Eduno (Empower yourself with Eduno)</title>
            </Head>

            <ToastContainer />

            <div>

                <div className="bg-black py-6 sm:py-8 lg:py-12">

                    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

                        <h2 className="mb-4 text-center text-3xl font-bold text-[#FD7014] md:mb-8 lg:text-4xl">Sign Up</h2>

                        <form onSubmit={handleSubmit} className="mx-auto max-w-lg rounded-lg border border-[#FD7014]">

                            <div className="flex flex-col gap-4 p-4 md:p-8">

                                <div>
                                    <label htmlFor="firstName" className="mb-2 inline-block text-sm text-white sm:text-base">First Name</label>
                                    <input value={firstName} onChange={handleChange} id='firstName' name="firstName" placeholder='First Name' className="w-full rounded border bg-gray-300 px-3 py-2 text-black outline-none ring-[#FD7014] transition duration-100 focus:ring" required />
                                </div>

                                <div>
                                    <label htmlFor="lastName" className="mb-2 inline-block text-sm text-white sm:text-base">Last Name</label>
                                    <input value={lastName} onChange={handleChange} id='lastName' name="lastName" placeholder='Last Name' className="w-full rounded border bg-gray-300 px-3 py-2 text-black outline-none ring-[#FD7014] transition duration-100 focus:ring" required />
                                </div>

                                <div>
                                    <label htmlFor="email" className="mb-2 inline-block text-sm text-white sm:text-base">Email</label>
                                    <input value={email} onChange={handleChange} id='email' name="email" type="email" placeholder='E-mail/G-mail' className="w-full rounded border bg-gray-300 px-3 py-2 text-black outline-none ring-[#FD7014] transition duration-100 focus:ring" required />
                                </div>

                                <div>
                                    <label htmlFor="phoneNo" className="mb-2 inline-block text-sm text-white sm:text-base">Phone No</label>
                                    <input value={phoneNo} onChange={handleChange} id='phoneNo' name="phoneNo" placeholder='Contact Number' className="w-full rounded border bg-gray-300 px-3 py-2 text-black outline-none ring-[#FD7014] transition duration-100 focus:ring" required />
                                </div>

                                <div>
                                    <label htmlFor="password" className="mb-2 inline-block text-sm text-white sm:text-base">Password</label>
                                    <input value={password} onChange={handleChange} id='password' name="password" type="password" placeholder="Password" className="w-full rounded border bg-gray-300 px-3 py-2 text-black outline-none ring-[#FD7014] transition duration-100 focus:ring" required />
                                </div>

                                <button className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-[#fd7114bb] focus-visible:ring active:bg-gray-600 md:text-base">Create Account </button>

                            </div>
                            <div className="flex items-center justify-center bg-[#fd7114bb] p-4">
                                <p className="text-center text-sm text-black">Have an account? <Link href={'/authentication/signin'} className="text-indigo-200 transition duration-100 hover:text-white active:text-indigo-700">Sign In</Link></p>
                            </div>

                        </form>

                    </div>

                </div>

                <hr />

            </div>

        </>
    )
}

export default Signup