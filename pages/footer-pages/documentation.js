import React from 'react'
import Head from 'next/head'

const Documentation = () => {
    return (
        <>
            <Head>
                <title>Documentation | Eduno (Empower yourself with Eduno)</title>
            </Head>


            {/* ########## Documentation Section Start ########## */}
            <div className='bg-black text-[#EEEEEE] flex items-center flex-col'>
                <h1 className='text-4xl pt-4 pb-2 md:pb-4'>Documentation</h1>
                <div className='px-4 md:mx-24 md:px-24'>
                    <h1 className='text-md md:text-xl font-medium pt-2 md:pt-4'>Welcome to Eduno!</h1>
                    <p className='text-justify text-sm md:text-lg pl-2 md:pl-4'>Eduno is a platform that offers online courses for technical skills such as web development, Android development, and more. Our courses are designed to provide you with the knowledge and skills needed to excel in the tech industry. Whether you are looking to start a new career or enhance your existing skills, we have the courses you need.</p>

                    <h1 className='text-md md:text-xl font-medium pt-2 md:pt-4'>Getting Started</h1>
                    <p className='text-justify text-sm md:text-lg pl-2 md:pl-4'>To get started with Eduno, simply visit our website at <span className='text-[#FD7014]'>www.eduno.in</span>. From there, you can browse our course catalog and choose the courses that best suit your needs. Our courses are organized by topic, so you can easily find the ones that interest you.</p>

                    <h1 className='text-md md:text-xl font-medium pt-2 md:pt-4'>Course Content</h1>
                    <p className='text-justify text-sm md:text-lg pl-2 md:pl-4'>Our courses are designed to provide you with a comprehensive understanding of the topics covered. Each course includes a series of modules that cover different aspects of the subject matter. These modules are designed to be self-paced, so you can complete them at your own pace. Additionally, our courses include quizzes and assessments to help you gauge your understanding of the material.</p>

                    <h1 className='text-md md:text-xl font-medium pt-2 md:pt-4'>Course Instructors</h1>
                    <p className='text-justify text-sm md:text-lg pl-2 md:pl-4'>Our courses are taught by experienced professionals who have a wealth of knowledge and expertise in their respective fields. Our instructors are passionate about teaching and are committed to helping you succeed. They are available to answer any questions you may have and provide feedback on your coursework.</p>

                    <h1 className='text-md md:text-xl font-medium pt-2 md:pt-4'>Course Certificates</h1>
                    <p className='text-justify text-sm md:text-lg pl-2 md:pl-4'>Upon completion of each course, you will receive a certificate of completion. This certificate serves as proof of your proficiency in the subject matter covered. This can be a valuable addition to your resume and can help you stand out in the job market.</p>

                    <h1 className='text-md md:text-xl font-medium pt-2 md:pt-4'>Customer Support</h1>
                    <p className='text-justify text-sm md:text-lg pl-2 md:pl-4'>At Eduno, we are committed to providing our customers with the best possible experience. If you have any questions or concerns about our courses, our customer support team is available to assist you. You can contact us via email, phone, or live chat.</p>

                    <h1 className='text-md md:text-xl font-medium pt-2 md:pt-4'>Conclusion</h1>
                    <p className='text-justify text-sm md:text-lg pl-2 md:pl-4'>We are excited to have you join us at Eduno and look forward to helping you achieve your goals. Our courses are designed to provide you with the knowledge and skills needed to excel in the tech industry. We are committed to providing you with the best possible experience and are here to support you every step of the way.</p>
                    <br />
                    <p className='text-justify text-sm md:text-lg pl-2 md:pl-4'>If you have any questions or concerns about our Privacy Policy, please contact us at <span className='font-bold cursor-pointer underline text-[#FD7014]'>officialeduno@gmail.com</span></p>
                </div>
            </div>
            {/* ########## Documentation Section End ########## */}
        </>
    )
}

export default Documentation