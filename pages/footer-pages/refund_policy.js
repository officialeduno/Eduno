import React from 'react'
import Head from 'next/head'

const Refund_policy = () => {
    return (
        <>
            <Head>
                <title>Refund Policy | Eduno (Empower yourself with Eduno)</title>
            </Head>


            {/* ########## Refund Section Start ########## */}
            <div className='bg-black text-[#EEEEEE] flex items-center flex-col'>
                <h1 className='text-4xl pt-4 pb-4 text-white'>Refund Policy</h1>
                <div className='px-4 md:mx-24 md:px-24'>
                    <p className='text-sm md:text-lg pl-4'>At Eduno, we strive to provide the best coding courses and a comprehensive learning experience for all our users. We understand that sometimes circumstances may change, and you may need to request a refund. Please review our refund policy outlined below:</p>
                    <h1 className='text-md md:text-xl font-medium pt-4'>1. Eligibility for Refund</h1>
                    <p className='text-sm md:text-lg pl-4'>Refunds are applicable only to the purchases made directly on our website. Refunds can only be requested within 3 days from the date of purchase.</p>

                    <h1 className='text-md md:text-xl font-medium pt-4'>2. Refundable Items</h1>
                    <p className='text-sm md:text-lg pl-4'>(a) Weekly Coding Contest Entry Fees: Contest entry fees are non-refundable once the contest has commenced.</p>
                    <p className='text-sm md:text-lg pl-4'>(b) Full-Length Courses: If you are unsatisfied with a full-length coding course, you may request a refund within 15 days of purchase.</p>

                    <h1 className='text-md md:text-xl font-medium pt-4'>3. Refund Process</h1>
                    <p className='text-sm md:text-lg pl-4'>(a) To request a refund, you must contact our customer support team within the eligible time frame.</p>
                    <p className='text-sm md:text-lg pl-4'>(b) Provide the necessary details such as your order number, email address used for purchase, and a brief reason for the refund request</p>
                    <p className='text-sm md:text-lg pl-4'>(c) Our customer support team will review your request and respond within 2 business days.</p>
                    <p className='text-sm md:text-lg pl-4'>(d) If the refund is approved, the refund will be issued back to the original payment method within 7 business days.</p>

                    <h1 className='text-md md:text-xl font-medium pt-4'>4. Exceptions</h1>
                    <p className='text-sm md:text-lg pl-4'>(a) If we determine that a user has violated our terms of service or engaged in any fraudulent activity, they will not be eligible for a refund.</p>
                    <p className='text-sm md:text-lg pl-4'>(b) In case of purchases made through third-party platforms, the refund process may vary and be subject to the terms and conditions of the respective platform.</p>

                    <h1 className='text-md md:text-xl font-medium pt-4'>5. Additional Information</h1>
                    <p className='text-sm md:text-lg pl-4'>(a) All access to course materials, including roadmaps for developers, will be revoked upon the completion of the refund process.</p>
                    <p className='text-sm md:text-lg pl-4'>(b) Any certification earned during the course will be voided if a refund is granted.</p>

                    <br /> <br />

                    <p className='text-sm md:text-xl pl-4 font-bold'>Please note that our refund policy is designed to be fair and reasonable for all parties involved. We encourage you to thoroughly review the course and roadmap details before making a purchase decision.</p>
                    <br />
                    <p className='text-sm md:text-xl pl-4 font-bold'>For any further questions or concerns regarding our refund policy, please contact our customer support team at <span className='font-bold text-[#FD7014]'>officialeduno@gmail.com</span> or <span className='font-bold text-[#FD7014]'>9457963552</span>. We are committed to providing excellent customer service and will be happy to assist you.</p>
                    <br />
                    <p className='text-sm md:text-xl pl-4 font-bold'>Thank you for choosing Eduno for your coding education needs. Happy learning!</p>
                    <br />
                </div>
            </div>
            {/* ########## Refund Section End ########## */}

        </>
    )
}

export default Refund_policy