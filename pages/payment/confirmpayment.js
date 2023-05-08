/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Head from 'next/head'

const Confirmpayment = (props) => {
    return (
        <>
            <Head>
                <title>Your Payment is process in 24 Hours</title>
            </Head>
            <div className='bg-[#001719] text-white flex flex-col justify-center items-center'>
                <h1 className='text-4xl p-4 pt-12 font-bold italic'>Hurrah! Congrutulations</h1>
                <h2 className='text-3xl p-4 italic'>Our Team will contact with you within <span className='font-bold text-[#81a33d]'>24 Hours</span>.</h2>
            </div>
        </>
    )
}

export default Confirmpayment