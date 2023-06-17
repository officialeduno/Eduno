/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Head from 'next/head'

const Further_Updates = () => {
    return (
        <>
            <Head>
                <title>Our Team will Contact you for Further Updates</title>
            </Head>

            {/* ########## Further Updates Section Start ########## */}
            <div className='bg-black flex flex-col justify-center items-center'>
                <h1 className='text-white text-font text-2xl md:text-4xl pt-2 md:pt-6'>Our Team will contact you for further updates.</h1>
                <h1 className='text-white text-font text-lg md:text-2xl pt-2 md:pt-6'>Sorry for inconvenience, Our site is under maintainence.</h1>
                <h1 className='text-[#FD7014] text-font text-lg md:text-xl pt-2 md:pt-6'>For any Query? Mail us</h1>
                <h1 className='text-[#FD7014] text-font text-lg'>"officialeduno@gmail.com"</h1>
            </div>
            {/* ########## Further Updates Section End ########## */}
            
        </>
    )
}

export default Further_Updates