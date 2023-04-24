// Import link from the next link package
import Link from 'next/link'

// Import useRouter to route the path
import { useRouter } from 'next/router'

// Import react and useState from react package
import React, { useState } from 'react'

// Import Head from next head package
import Head from 'next/head'

// Import toast container and toast from react-toastify package
import { ToastContainer, toast } from "react-toastify";

// Import react toast CSS
import 'react-toastify/dist/ReactToastify.css';

// Signin component of signin page 
const Signin = () => {

    let router= useRouter()

    // Data variables of Sign in form
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    // Handle the change of input form
    const handleChange = (e) => {
        if (e.target.name == 'email') {
            setEmail(e.target.value);
        } else if (e.target.name == 'password') {
            setPassword(e.target.value);
        }
    };

    // React toast 
    const signinCancelledToast = () => toast('Invalid credentials', {
        autoClose: 2000,
        type: 'error'
    });


    // Handle the submit of sign in page
    const handleSubmit = async (e) => {
        // prevent from the reload of page
        e.preventDefault();

        // Data of sign in page which is send in sign in API
        const data = { email, password };

        // Call the signin API
        let res = await fetch('https://eduno.in/api/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        // Store the reponse of the API
        let response = await res.json();

        console.log(response)

        // React toast on the basis of API response
        if (response.success == true) {

            // Set the token in local storage of browser
            localStorage.setItem('loginToken', response.token);
            localStorage.setItem('userName', response.userName);
            router.push(`https://eduno.in/`)
            

        } else {
            signinCancelledToast();
        }

    }

    // return of signin page
    return (
        <>

            {/* Head of the signin page  */}
            <Head>
                <title>Login or Sign in | Eduno (Empower yourself with Eduno)</title>
            </Head>

            {/* Main div element  */}
            <div>

                {/* Toast container to showcase the toast  */}
                <ToastContainer />

                {/* background div  */}
                <div className="bg-[#001719] py-6 sm:py-8 lg:py-12">

                    {/* Div of signin box or form  */}
                    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

                        {/* Heading of sign in box  */}
                        <h2 className="mb-4 text-center text-3xl font-bold text-[#a2cc4c] md:mb-8 lg:text-4xl">Sign in / Login</h2>

                        {/* Form of sign in page  */}
                        <form onSubmit={handleSubmit} className="mx-auto max-w-lg rounded-lg border border-[#a1cc4c8c]">

                            {/* INput div  */}
                            <div className="flex flex-col gap-4 p-4 md:p-8">

                                {/* Email Input  */}
                                <div>
                                    <label htmlFor="email" className="mb-2 inline-block text-sm text-white sm:text-base">Email*</label>
                                    <input value={email} onChange={handleChange} id="email" placeholder='E-mail/G-mail' name="email" className="w-full rounded border bg-gray-50 px-3 py-2 text-black outline-none ring-[#a2cc4c] transition duration-100 focus:ring" />
                                </div>

                                {/* Password INput  */}
                                <div>
                                    <label htmlFor="password" className="mb-2 inline-block text-sm text-white sm:text-base">Password*</label>
                                    <input value={password} onChange={handleChange} id="password" placeholder='Password' type="password" name="password" className="w-full rounded border bg-gray-50 px-3 py-2 text-black outline-none ring-[#a2cc4c] transition duration-100 focus:ring" />
                                </div>

                                {/* Forgot button  */}
                                <div className="text-sm text-center">
                                    <Link href={'/authentication/forgotpassword'} className="font-medium text-blue-600 hover:text-blue-500"> Forgot your password? </Link>
                                </div>

                                {/* Login Button  */}
                                <button className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-[#a1cc4cbd] focus-visible:ring active:bg-gray-600 md:text-base">Log in</button>

                                {/* Continue with facebook button */}
                                <button className="flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-blue-300 transition duration-100 hover:bg-blue-600 focus-visible:ring active:bg-blue-700 md:text-base">
                                    <svg className="h-5 w-5 shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0C5.37273 0 0 5.37273 0 12C0 18.0164 4.43182 22.9838 10.2065 23.8516V15.1805H7.23764V12.0262H10.2065V9.92727C10.2065 6.45218 11.8996 4.92655 14.7878 4.92655C16.1711 4.92655 16.9025 5.02909 17.2489 5.076V7.82945H15.2787C14.0525 7.82945 13.6244 8.99182 13.6244 10.302V12.0262H17.2178L16.7302 15.1805H13.6244V23.8773C19.4815 23.0825 24 18.0747 24 12C24 5.37273 18.6273 0 12 0Z" fill="white" />
                                    </svg>

                                    Continue with Facebook
                                </button>

                                {/* Continue with google button  */}
                                <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-gray-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">
                                    <svg className="h-5 w-5 shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z" fill="#4285F4" />
                                        <path d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z" fill="#34A853" />
                                        <path d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z" fill="#FBBC05" />
                                        <path d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z" fill="#EA4335" />
                                    </svg>

                                    Continue with Google
                                </button>
                            </div>

                            {/* Dont have an account section  */}
                            <div className="flex items-center justify-center bg-[#a1cc4c8c] p-4">
                                <p className="text-center text-sm text-black">Dont have an account? <Link href={'/authentication/signup'} className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Sign Up</Link></p>
                            </div>

                        </form>

                    </div>

                </div>

                <hr />

            </div>

        </>

    )

}

// Export the signin component 
export default Signin