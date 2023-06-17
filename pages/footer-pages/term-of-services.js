import React from 'react'
import Head from 'next/head'

const Terms_of_Services = () => {
    return (
        <>
            <Head>
                <title>Terms of Services | Eduno (Empower yourself with Eduno)</title>
            </Head>

            {/* ########## Terms Section Start ########## */}
            <div className='bg-black text-[#EEEEEE] flex items-center flex-col'>
                <h1 className='text-4xl pt-4 pb-4 text-white'>Terms of Services</h1>
                <div className='px-4 md:mx-24 md:px-24'>
                    <p className='text-sm md:text-lg pl-4'>Welcome to Eduno. These terms of service (Terms) are a legal agreement between you and Eduno, and govern your use of our online courses, technical blogs, and other features and services we offer (Services). By accessing or using our Services, you agree to be bound by these Terms.</p>
                    <h1 className='text-md md:text-xl font-medium pt-4'>1. Use of Services</h1>
                    <p className='text-sm md:text-lg pl-4'>You may use our Services only for lawful purposes and in accordance with these Terms. You may not use our Services:</p>
                    <p className='text-sm md:text-lg pl-6'>(a). In any way that violates any applicable federal, state, local or international law or regulation.</p>
                    <p className='text-sm md:text-lg pl-6'>(b). To engage in any activity that interferes with or disrupts the Services (or the servers and networks which are connected to the Services).</p>
                    <p className='text-sm md:text-lg pl-6'>(c). To impersonate or attempt to impersonate Eduno, an Eduno employee, another user, or any other person or entity.</p>
                    <p className='text-sm md:text-lg pl-6'>(d). To attempt to gain unauthorized access to any portion or feature of the Services, or any other systems or networks connected to the Services, by hacking, password (mining) or any other illegitimate means.</p>
                    <p className='text-sm md:text-lg pl-6'>(e). To use any device, software or routine that interferes with the proper working of the Services, or any transaction conducted on the Services.</p>
                    <p className='text-sm md:text-lg pl-6'>(f). To introduce any viruses, Trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful.</p>
                    <p className='text-sm md:text-lg pl-6'>(g). To violate the security of any computer network, or crack any passwords or security encryption codes.</p>

                    <h1 className='text-md md:text-xl font-medium pt-4'>2. User Accounts</h1>
                    <p className='text-sm md:text-lg pl-4'>You may need to create an account to access certain features of our Services. You agree to provide accurate and complete information when creating your account, and to update your account information as necessary. You are responsible for maintaining the confidentiality of your account login credentials and for all activities that occur under your account. Eduno reserves the right to suspend or terminate your account at any time for any reason, without notice or liability to you.</p>

                    <h1 className='text-md md:text-xl font-medium pt-4'>3. Intellectual Property</h1>
                    <p className='text-sm md:text-lg pl-4'>All content and materials on the Services, including text, graphics, logos, images, and software, are the property of Eduno or its licensors, and are protected by United States and international copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, transmit, display, perform, reproduce, or publish any part of the Services without the prior written consent of Eduno.</p>

                    <h1 className='text-md md:text-xl font-medium pt-4'>4. User Content</h1>
                    <p className='text-sm md:text-lg pl-4'>You may have the opportunity to post comments, questions, and other content on our Services. By submitting content to Eduno, you grant us a non-exclusive, worldwide, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content throughout the world in any media. You represent and warrant that you own or control all rights in and to the content you submit, and that such content does not violate these Terms or any applicable law.</p>

                    <h1 className='text-md md:text-xl font-medium pt-4'>5. Disclaimer of Warranties</h1>
                    <p className='text-sm md:text-lg pl-4'>Eduno provides its Services (as is) and without any warranty or condition, express, implied, or statutory. Eduno specifically disclaims all implied warranties, including any warranties of merchantability, fitness for a particular purpose, and non-infringement. Eduno does not warrant that the Services will meet your requirements, that they will be uninterrupted or error-free, that defects will be corrected, or that the Services are free of viruses or other harmful components. Your use of the Services is at your own risk.</p>

                    <h1 className='text-md md:text-xl font-medium pt-4'>6. Limitation of Liability</h1>
                    <p className='text-sm md:text-lg pl-4'>To the fullest extent permitted by law, Eduno and its affiliates, officers, directors, employees, agents, and licensors will not be liable to you for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the Services, even if Eduno has been advised of the possibility of such damages.</p>

                    <h1 className='text-md md:text-xl font-medium pt-4'>7. Fees and Payments</h1>
                    <p className='text-sm md:text-lg pl-4'>Some of our courses and resources may require a fee. You will be notified of any fees associated with a course or resource before you make a purchase. You agree to pay all fees associated with the courses or resources you purchase.</p>

                    <br />

                    <p className='text-sm md:text-xl pl-4 font-bold'>By using our platform, you agree to these Terms of Service. If you have any questions, please contact us at <span className='font-bold text-[#FD7014]'>officialeduno@gmail.com</span></p>
                    <br />
                </div>
            </div>
            {/* ########## Terms Section End ########## */}

        </>
    )
}

export default Terms_of_Services