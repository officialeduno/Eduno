import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact with us | Eduno (Empower yourself with Eduno)</title>
            </Head>


            {/* ########## Contact Section Start ########## */}
            <div className='bg-black text-white flex items-center flex-col'>
                <h1 className='text-3xl md:text-4xl px-4 pt-4 md:pb-4 text-font'>Contact with Us</h1>
                <div className='px-4 py-2 md:mx-24 md:px-24'>
                    <p className='text-left text-lg md:pl-4 md:pb-4'>
                        Dear user,
                    </p>
                    <p className='text-left text-sm md:text-lg md:pl-4 pb-2 md:pb-4'>Greeting with Eduno!</p>
                        
                        <p className='text-left text-sm md:text-lg md:pl-4 pb-2 md:pb-4'>We are excited to introduce our platform, Eduno, which offers a wide range of technical courses to help you enhance your skills and boost your career. Our platform is designed to provide an engaging and interactive learning experience, where you can learn at your own pace and convenience.</p>
                        
                        <p className='text-left text-sm md:text-lg md:pl-4 pb-2 md:pb-4'>Our courses are taught by industry experts who have years of experience in their respective fields. They cover a variety of technical topics such as programming languages, web development, data science, artificial intelligence, and much more. We offer both beginner and advanced level courses to cater to the needs of learners at all levels.</p>
                        
                        <p className='text-left text-sm md:text-lg md:pl-4 pb-2 md:pb-4'>We understand the importance of continuous learning in todays ever-changing job market. With Eduno, you can acquire new skills and stay up-to-date with the latest trends in your field.</p>
                        
                        <p className='text-left text-sm md:text-lg md:pl-4 pb-2 md:pb-4'>If you have any questions or would like to learn more about our platform, please dont hesitate to contact us. We would be happy to help.</p>
                        
                        <p className='text-left text-lg pl-2 md:pl-8 pb-4'>
                            <span className='font-bold'>Gmail : </span><Link href={'officialeduno@gmail.com'} className="text-[#FD7014]">officialeduno@gmail.com</Link><br />
                            <span className='font-bold'>Instagram : </span><Link href={'https://www.instagram.com/the.eduno/'} className="text-[#FD7014]">the.eduno</Link><br />
                            <span className='font-bold'>LinkedIn : </span><Link href={'https://www.linkedin.com/in/eduno-empower-yourself-with-eduno-830823269/'} className="text-[#FD7014]">Eduno (Empower yourself with Eduno)</Link><br />
                            <span className='font-bold'>Twitter : </span><Link href={'https://twitter.com/officialeduno'} className="text-[#FD7014]">officialeduno</Link>
                        </p>

                        <p className='text-left text-sm md:text-lg md:pl-4 pb-2 md:pb-4'>Thank you for your interest in Eduno</p>
                        <p className='text-left text-sm md:text-lg md:pl-4 pb-2 md:pb-4'>Best regards,</p>
                        <p className='text-left text-sm md:text-lg md:pl-4 pb-2 md:pb-4'>Eduno Team</p>
                </div>
            </div>
            {/* ########## Contact Section End ########## */}
            
        </>
    )
}

export default Contact