import React from 'react'
import Head from 'next/head'

const Privacy_Policy = () => {
    return (
        <>
            <Head>
                <title>Privacy Policy | Eduno (Empower yourself with Eduno)</title>
            </Head>


            {/* ########## Privacy Policy Section Start ########## */}
            <div className='bg-black text-[#EEEEEE] flex items-center flex-col'>
                <h1 className='text-4xl pt-4 pb-4 text-white'>Privacy Policy</h1>
                <div className='px-4 md:mx-24 md:px-24'>
                    <p className='text-sm md:text-lg pl-4'>At Eduno, we are committed to protecting the privacy and security of our users personal information. This Privacy Policy explains how we collect, use, and disclose your personal information when you use our online courses for technical skills and other features such as technical blogs, doubt solving, etc.</p>

                    <h1 className='text-md md:text-xl font-medium pt-4'>1. Information We Collect</h1>
                    <p className='text-sm md:text-lg pl-4'>When you register for an Eduno account, we collect personal information such as your name, email address, and billing information. We also collect information about your usage of our services, including course progress, test scores, and user-generated content.</p>

                    <h1 className='text-md md:text-xl font-medium pt-4'>2. Use of Information</h1>
                    <p className='text-sm md:text-lg pl-4'>We use your personal information to provide our services, to communicate with you about your account, and to personalize your experience on our platform. We also use your information to improve our services, conduct research and analysis, and to comply with legal obligations.</p>

                    <h1 className='text-md md:text-xl font-medium pt-4'>3. Sharing of Information</h1>
                    <p className='text-sm md:text-lg pl-4'>We may share your personal information with third-party service providers who assist us in providing our services, such as payment processors, customer support providers, and data analytics providers. We may also share your information if we are required to do so by law or if we believe that such disclosure is necessary to protect our rights, your safety, or the safety of others.</p>

                    <h1 className='text-md md:text-xl font-medium pt-4'>4. Security</h1>
                    <p className='text-sm md:text-lg pl-4'>We take appropriate measures to protect the security of your personal information, including using encryption and implementing industry-standard security practices.</p>

                    <h1 className='text-md md:text-xl font-medium pt-4'>5. Cookies and Similar Technologies</h1>
                    <p className='text-sm md:text-lg pl-4'>We use cookies and similar technologies to collect information about your usage of our services, to improve our services, and to personalize your experience. You can manage your cookie preferences through your browser settings.</p>

                    <h1 className='text-md md:text-xl font-medium pt-4'>6. Changes to the Privacy Policy</h1>
                    <p className='text-sm md:text-lg pl-4'>We take appropriate measures to protect the security of your personal information, including using encryption and implementing industry-standard security practices.</p>
                    <br />
                    <p className='font-bold text-sm md:text-xl pl-4'>If you have any questions or concerns about our Privacy Policy, please contact us at <span className='font-bold text-[#FD7014]'>officialeduno@gmail.com</span></p>
                    <br />
                </div>
            </div>
            {/* ########## Privacy Policy Section End ########## */}

        </>
    )
}

export default Privacy_Policy