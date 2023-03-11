import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

const Chat_with_us = () => {
    return (
        <>
            <Head>
                <title>Chat with us | Eduno (Empower yourself with Eduno)</title>
            </Head>
            <div className='bg-[#001719] text-white flex items-center flex-col'>
                <Image src="/logo.png" className='pt-8' width={40} height={40} alt="" />
                <h1 className='text-4xl font-bold pb-2'>Eduno</h1>
                <h1 className='text-4xl pt-4 pb-4'>Chat with Us</h1>
                <div className='px-4 md:mx-24 md:px-24'>
                    <h2 className='text-6xl p-8 text-[#a2cc4c]'>Coming Soon...</h2>
                </div>
            </div>
        </>
    )
}

export default Chat_with_us