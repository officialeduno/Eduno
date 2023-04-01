// Import react from react package
import React, { useState } from 'react'

// Import link from Next link package
import Link from 'next/link'

// Import head from next head package
import Head from 'next/head'

// Import toast container and toast from react-toastify package
import { ToastContainer, toast } from "react-toastify";

// Import react toast CSS
import 'react-toastify/dist/ReactToastify.css';

// Forgot password component
const ForgotPassword = () => {

    const [email, setEmail] = useState();

    const handleChange = (e)=>{
        if (e.target.name == 'email') {
            setEmail(e.target.value);
        }
    }

    // React toast 
    const linkSend = () => toast('Link Send Successfully', {
        autoClose: 2000,
        type: 'success'
    });

    const handleSubmit = async(e) => {
        e.preventDefault();

        const data = {email};

        // Call the forgot API
        let res = await fetch('http://localhost:3000/api/auth/forgot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        let response = await res.json();

        if(response.success == true){
            linkSend();
        }
    }

    return (

        <>

        <Head>
            <title>Forgot Password | Eduno (Empower yourself with Eduno)</title>
        </Head>

        {/* main div of forgot password component */}
        <div>

            {/* Toast container to showcase the toast  */}
            <ToastContainer />

            {/* Background div  */}
            <div className="bg-[#001719] py-6 sm:py-8 lg:py-12">

                {/* div of forgot password box  */}
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

                    {/* Heading of Forgot password  */}
                    <h2 className="mb-4 text-center text-3xl font-bold text-[#a2cc4c] md:mb-8 lg:text-4xl">Forgot Password?</h2>

                    {/* Form of forgot password  */}
                    <form onSubmit={handleSubmit} className="mx-auto max-w-lg rounded-lg border border-[#a1cc4c8c]">

                        {/* Input section  */}
                        <div className="flex flex-col gap-4 p-4 md:p-8">

                            {/* Email input  */}
                            <div>
                                <label htmlFor="email" className="mb-2 inline-block text-sm text-white sm:text-base">Email</label>
                                <input value={email} onChange={handleChange} id="email" placeholder='E-mail/G-mail' name="email" className="w-full rounded border bg-gray-50 px-3 py-2 text-black outline-none ring-[#a2cc4c] transition duration-100 focus:ring" />
                            </div>

                            {/* Reset password button  */}
                            <button className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-[#a1cc4cbd] focus-visible:ring active:bg-gray-600 md:text-base">Send Link</button>
                            
                        </div>

                        {/* Know your password  */}
                        <div className="flex items-center justify-center bg-[#a1cc4c8c] p-4">
                            <p className="text-center text-sm text-black">Know your password? <Link href={'/authentication/signin'} className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Sign In</Link></p>
                        </div>

                    </form>

                </div>

            </div>

            <hr />

        </div>

        </>

    )

}

// Export forgot password component
export default ForgotPassword