import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Head from 'next/head'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { setCookie } from 'cookies-next';

const Signin = (props) => {
    let router= useRouter();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handleChange = (e) => {
        if (e.target.name == 'email') {
            setEmail(e.target.value);
        } else if (e.target.name == 'password') {
            setPassword(e.target.value);
        }
    };
    const signinCancelledToast = () => toast('Invalid credentials', {
        autoClose: 2000,
        type: 'error'
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        props.setProgress(40);
        const data = { email, password };
        let res = await fetch(`https://www.eduno.in/api/auth/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        props.setProgress(90);
        let response = await res.json();
        if (response.success == true) {
            setCookie('edunoId', response.edunoId);
            setCookie('token', response.token);
            localStorage.setItem('loginToken', response.token);
            localStorage.setItem('userName', response.userName);
            localStorage.setItem('edunoId', response.edunoId);
            router.push(`https://www.eduno.in/`)
        } else {
            signinCancelledToast();
        }
    }

    return (
        <>
            <Head>
                <title>Login or Sign in | Eduno (Empower yourself with Eduno)</title>
            </Head>
            <div>

                <ToastContainer />

                <div className="bg-black py-6 sm:py-8 lg:py-12">

                    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

                        <h2 className="mb-4 text-center text-3xl font-bold text-[#FD7014] md:mb-8 lg:text-4xl">Sign in / Login</h2>

                        <form onSubmit={handleSubmit} className="mx-auto max-w-lg rounded-lg border border-[#FD7014]">

                            <div className="flex flex-col gap-4 p-4 md:p-8">

                                <div>
                                    <label htmlFor="email" className="mb-2 inline-block text-sm text-white sm:text-base">Email*</label>
                                    <input value={email} onChange={handleChange} id="email" placeholder='E-mail/G-mail' name="email" className="w-full rounded border bg-gray-50 px-3 py-2 text-black outline-none ring-[#FD7014] transition duration-100 focus:ring" />
                                </div>

                                <div>
                                    <label htmlFor="password" className="mb-2 inline-block text-sm text-white sm:text-base">Password*</label>
                                    <input value={password} onChange={handleChange} id="password" placeholder='Password' type="password" name="password" className="w-full rounded border bg-gray-50 px-3 py-2 text-black outline-none ring-[#FD7014] transition duration-100 focus:ring" />
                                </div>

                                <div className="text-sm text-center">
                                    <Link href={'/authentication/forgotpassword'} className="font-medium text-blue-600 hover:text-[#FD7014]"> Forgot your password? </Link>
                                </div>

                                <button className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-[#fd7114bb] focus-visible:ring active:bg-gray-600 md:text-base">Log in</button>

                                
                            </div>

                            <div className="flex items-center justify-center bg-[#fd7114bb] p-4">
                                <p className="text-center text-sm text-black">Dont have an account? <Link href={'/authentication/signup'} className="text-white transition duration-100 hover:text-indigo-600 active:text-indigo-700">Sign Up</Link></p>
                            </div>

                        </form>

                    </div>

                </div>

                <hr />

            </div>

        </>
    )
}

export default Signin