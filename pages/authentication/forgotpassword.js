import React from 'react'
import Link from 'next/link'

const ForgotPassword = () => {
    return (
        <div>
            <div class="bg-[#001719] py-6 sm:py-8 lg:py-12">
                <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <h2 class="mb-4 text-center text-3xl font-bold text-[#a2cc4c] md:mb-8 lg:text-4xl">Forgot Password?</h2>

                    <form class="mx-auto max-w-lg rounded-lg border border-[#a1cc4c8c]">
                        <div class="flex flex-col gap-4 p-4 md:p-8">
                            <div>
                                <label htmlFor="email" class="mb-2 inline-block text-sm text-white sm:text-base">Email</label>
                                <input name="email" class="w-full rounded border bg-gray-50 px-3 py-2 text-black outline-none ring-[#a2cc4c] transition duration-100 focus:ring" />
                            </div>

                            <button class="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-[#a1cc4cbd] focus-visible:ring active:bg-gray-600 md:text-base">Reset Password</button>

                            
                        </div>

                        <div class="flex items-center justify-center bg-[#a1cc4c8c] p-4">
                            <p class="text-center text-sm text-black">Know your password? <Link href={'/authentication/signin'} class="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Sign In</Link></p>
                        </div>
                    </form>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default ForgotPassword