/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Confirmpayment = (props) => {
    return (
        <>
            <Head>
                <title>Your Payment is process in 24 Hours</title>
            </Head>
            <div className='bg-[#001719] text-white flex flex-col justify-center items-center'>
                <h1 className='text-4xl p-4 pt-12 font-bold italic'>Hurrah! Congrutulations</h1>
                <h2 className='text-3xl p-4 italic'>Our Team will contact with you within <span className='font-bold'>24 Hours</span>.</h2>
                <h2 className='text-xl p-4 italic'>To Confirm your payment - <Link href={"https://forms.gle/UrjTMN5GdGNsQP3i9"} target='_blank' className='font-bold text-[#81a33d]'>Click Here</Link></h2>
            </div>
        </>
    )
}

export default Confirmpayment