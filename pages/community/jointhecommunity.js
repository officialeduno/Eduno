/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Join_the_Community = () => {
    return (
        <>
            <Head>
                <title>Join the Developer Community | Eduno (Empower Yourself with Eduno)</title>
            </Head>

            <div className='bg-black flex flex-col justify-center items-center p-2 md:p-8'>
                <h1 className='text-font text-white text-2xl md:text-4xl text-center'>Join the Developer Community! Now</h1>
                <div className='flex flex-row justify-center items-center py-4'>
                    <div className='flex flex-col justify-center items-center py-2 mx-2 md:px-16'>
                        <img src="../icons/discord.png" alt="" className='h-36 md:h-80 mb-2' />
                        <Link href={"https://discord.gg/6fSdtVYT"} target='_blank' className='inline-flex justify-center items-center py-2 mb-2 md:py-3 px-4 md:px-5 text-base font-medium text-center rounded-lg focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 button-background button-hover-background button-text button-hover-text' >Join Discord</Link>
                    </div>
                    <div className='flex flex-col justify-center items-center py-2 mx-2 md:px-16'>
                        <img src="../icons/twitter.png" alt="" className='h-32 md:h-72 mb-2' />
                        <Link href={"https://twitter.com/officialeduno"} target='_blank' className='inline-flex justify-center items-center py-2 mt-2 md:mt-4 md:py-3 px-4 md:px-5 text-base font-medium text-center rounded-lg focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 button-background button-hover-background button-text button-hover-text' >Join Twitter</Link>
                    </div>
                </div>
                <p className='text-white text-justify px-4 md:px-32'>Join the vibrant and dynamic community of EDUNO today and unlock a world of opportunities for your future. EDUNO is a pioneering company dedicated to revolutionizing education through innovative technologies. By joining this exclusive community, you become part of a diverse group of developers, all passionate about shaping the future of education. This community is a hub of knowledge sharing, collaboration, and growth, where developers come together to enhance their skills, exchange ideas, and create impactful solutions. With access to cutting-edge resources, mentorship programs, and collaborative projects, you will have the chance to expand your horizons and make a real difference in the field of education. Join the EDUNO community now and take your future to new heights.</p>
            </div>
        </>
    )
}

export default Join_the_Community