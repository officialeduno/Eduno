/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const AllContest = () => {
    return (
        <>
            <Head>
                <title>Join the Contest | Eduno (Empower Yourself with Eduno)</title>
            </Head>

            <div className='bg-black flex flex-col justify-center items-center'>
                <h1 className='text-white text-center text-3xl md:text-5xl py-4 md:py-2 md:mb-8'>Join the Contest! Now</h1>

                <div className='px-4 md:px-32'>
                    <div className='developer-section-background flex flex-col md:flex-row justify-around items-center rounded-2xl md:rounded-3xl px-2 md:px-8'>
                        <div className='flex flex-col'>
                            <h1 className='text-[#FD7014] text-2xl md:text-4xl py-2 md:py-6 text-center md:text-left'>Eduno Contest <br className='md:hidden'/> (09 July, 2023)</h1>
                            <h1 className='text-white text-sm md:px-6 text-justify text-font'>Welcome, Coding Enthusiasts, to the most thrilling event of this week. Eduno organize a weekly conding contest which help you to enhance your coding skills and problem solving skills. Prepare to push the boundaries of your coding skills and compete against some of the bright minds in the programing universe. This contest is your chance to showcase your talent, creativity on a large scale.</h1>

                            <div className="mt-2 md:mt-6 flex flex-col md:flex-row justify-center items-center md:justify-end md:items-start">
                                <Link href={"https://www.hackerrank.com/eduno-contest-09-july-2023"} target='_blank' className="inline-flex justify-center items-center py-2 mb-2 md:py-3 px-4 md:px-5 text-base font-medium text-center rounded-lg focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 button-background button-hover-background button-text button-hover-text">
                                    Join Contest Now
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='developer-section-background flex flex-col md:flex-row justify-around items-center rounded-2xl md:rounded-3xl px-2 md:px-8 my-6 md:my-12'>
                        <div className='flex flex-col'>
                            <h1 className='text-[#FD7014] text-2xl md:text-4xl py-2 md:py-6 text-center md:text-left'>Eduno Contest <br className='md:hidden'/> (16 July, 2023)</h1>
                            <h1 className='text-white text-sm md:px-6 text-justify text-font'>Welcome, Coding Enthusiasts, to the most thrilling event of this week. Eduno organize a weekly conding contest which help you to enhance your coding skills and problem solving skills. Prepare to push the boundaries of your coding skills and compete against some of the bright minds in the programing universe. This contest is your chance to showcase your talent, creativity on a large scale.</h1>

                            <div className="mt-2 md:mt-6 flex flex-col md:flex-row justify-center items-center md:justify-end md:items-start">
                                <Link href={"https://www.hackerrank.com/eduno-contest-16-july-2023"} target='_blank' className="inline-flex justify-center items-center py-2 mb-2 md:py-3 px-4 md:px-5 text-base font-medium text-center rounded-lg focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 button-background button-hover-background button-text button-hover-text">
                                    Join Contest Now
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='developer-section-background flex flex-col md:flex-row justify-around items-center rounded-2xl md:rounded-3xl px-2 md:px-8 my-6 md:my-12'>
                        <div className='flex flex-col'>
                            <h1 className='text-[#FD7014] text-2xl md:text-4xl py-2 md:py-6 text-center md:text-left'>Eduno Contest <br className='md:hidden'/> (23 July, 2023)</h1>
                            <h1 className='text-white text-sm md:px-6 text-justify text-font'>Welcome, Coding Enthusiasts, to the most thrilling event of this week. Eduno organize a weekly conding contest which help you to enhance your coding skills and problem solving skills. Prepare to push the boundaries of your coding skills and compete against some of the bright minds in the programing universe. This contest is your chance to showcase your talent, creativity on a large scale.</h1>

                            <div className="mt-2 md:mt-6 flex flex-col md:flex-row justify-center items-center md:justify-end md:items-start">
                                <Link href={"https://www.hackerrank.com/eduno-contest-23-july-2023"} target='_blank' className="inline-flex justify-center items-center py-2 mb-2 md:py-3 px-4 md:px-5 text-base font-medium text-center rounded-lg focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 button-background button-hover-background button-text button-hover-text">
                                    Join Contest Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllContest