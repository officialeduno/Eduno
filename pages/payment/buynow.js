/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import { useRouter } from 'next/router';
import React, { useState } from 'react'
import Head from 'next/head';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getCookie } from 'cookies-next';

const BuyNow = (props) => {

    const referralCodes = ["ROHAN", "rohan", "Rohan", "AMITSIR", "SANDEEPSIR", "HITESHSIR"]

    const router = useRouter();
    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const [phoneNo, setPhoneNo] = useState();
    const [whatsappNo, setWhatsappNo] = useState();
    const [referral, setReferral] = useState();
    const [offer, setOffer] = useState(false);
    const handleChange = (e) => {
        if (e.target.name == 'email') {
            setEmail(e.target.value);
        } else if (e.target.name == 'phoneNo') {
            setPhoneNo(e.target.value);
        } else if (e.target.name == 'fullName') {
            setFullName(e.target.value);
        } else if (e.target.name == 'whatsappNo') {
            setWhatsappNo(e.target.value);
        } else if (e.target.name == 'referral') {
            setReferral(e.target.value);
        }
    }
    const checkReferral = () => {
        for(let i=0; i<referralCodes.length; i++){
            let checkingCode = referralCodes[i];
            if(referral==checkingCode){
                setOffer(true);
                break;
            }
            setOffer(false);
        }
    }
    const somethingWentWrongToast = () => toast('Some Went Wrong...', {
        autoClose: 2000,
        type: 'error'
    })
    const confirm = async (e) => {
        e.preventDefault();
        props.setProgress(30);
        const edunoId = getCookie('edunoId');
        const data = { edunoId, fullName, email, phoneNo, whatsappNo, course: props.courseCode };
        let res = await fetch('http://localhost:3000/api/payment/payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        props.setProgress(80);
        let response = await res.json();
        if (response.success == true) {
            router.push(`http://localhost:3000/payment/confirmpayment`);
        } else {
            somethingWentWrongToast();
        }
    }
    
    return (
        <>
            <Head>
                <title>Buy Now | Eduno (Empower Yourself with Eduno)</title>
            </Head>

            <ToastContainer />

            <div className='bg-black text-white flex flex-col justify-center items-center'>
                <h1 className='text-3xl font-bold italic text-center p-4 text-font'>Buy Now</h1>
                <div class="p-6 mx-4 px-4 md:p-8">
                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">
                        <div class="text-gray-600 md:px-24">
                            <p class="font-medium text-xl py-2 text-white text-font">Your Course : </p>
                            {props.courseCode == "training" && <img src="../img/training.png" className='rounded-xl h-56 md:h-96 w-full object-cover object-center' alt="" />}
                            {props.courseCode == "java" && <img src="../img/java.png" className='rounded-xl h-56 md:h-96 w-full object-cover object-center' alt="" />}
                            {props.courseCode == "fullstack" && <img src="../img/webdev.png" className='rounded-xl h-56 md:h-96 w-full object-cover object-center' alt="" />}
                            {props.courseCode == "datascience" && <img src="../img/datascience.png" className='rounded-xl h-56 md:h-96 w-full object-cover object-center' alt="" />}
                            {props.courseCode == "android" && <img src="../img/android.png" className='rounded-xl h-56 md:h-96 w-full object-cover object-center' alt="" />}
                            {props.courseCode == "aiml" && <img src="../img/aiml.png" className='rounded-xl h-56 md:h-96 w-full object-cover object-center' alt="" />}
                            {props.courseCode == "training" && <p className='font-bold text-xl text-white py-2 px-4 text-font'>Training and Internship 2023</p>}
                            {props.courseCode == "java" && <p className='font-bold text-xl text-white py-2 px-4 text-font'>Java with DSA</p>}
                            {props.courseCode == "fullstack" && <p className='font-bold text-xl text-white py-2 px-4 text-font'>Full Stack Web Development</p>}
                            {props.courseCode == "datascience" && <p className='font-bold text-xl text-white py-2 px-4 text-font'>Data Science</p>}
                            {props.courseCode == "android" && <p className='font-bold text-xl text-white py-2 px-4 text-font'>Android App Development</p>}
                            {props.courseCode == "aiml" && <p className='font-bold text-xl text-white py-2 px-4 text-font'>AI / ML</p>}

                            <div className='text-white font-bold text-lg md:text-2xl flex justify-between pt-1 pb-2 px-4'>
                                <h1>Price :</h1>
                                <div className='flex'>
                                    <h1 className='pr-4 text-lg md:text-2xl'>{props.courseCode == "training" && "₹899/-"}{props.courseCode == "datascience" && "₹1,999/-"}{props.courseCode == "aiml" && "₹1,999/-"}{props.courseCode == "android" && "₹2,499/-"}{props.courseCode == "fullstack" && "₹1,499/-"}{props.courseCode == "java" && "₹999/-"}</h1>
                                    <span class="mb-0.5 text-red-500 line-through text-lg md:text-2xl">{props.courseCode == "training" && "₹1,898/-"}{props.courseCode == "datascience" && "₹3,998/-"}{props.courseCode == "aiml" && "₹3,998/-"}{props.courseCode == "android" && "₹4,998/-"}{props.courseCode == "fullstack" && "₹2,998/-"}{props.courseCode == "java" && "₹1,998/-"}</span>
                                </div>
                            </div>

                            <div className='px-2 md:px-6'>
                                <label class="text-[#EEEEEE]" for="referral">Referral Code</label>
                                <div className="flex gap-2 pt-2">
                                    <input onChange={handleChange} placeholder="Referral Code" name='referral' type='text' id='referral' value={referral} className="bg-gray-white w-full flex-1 rounded border border-[#a2cc4c] px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-[#a2cc4c] transition duration-100 focus:ring" />

                                    <button onClick={checkReferral} className="buynow-button inline-block rounded bg-[#a2cc4c] px-4 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-[#719034] focus-visible:ring active:bg-indigo-700 md:text-base">Check Now</button>
                                </div>
                                {!offer && <h1>Enter a valid Referral Code</h1>}
                            </div>

                            {offer && <div className='text-white font-bold text-lg md:text-2xl flex justify-between pt-4 pb-2 px-4'>
                                <h1>Final Price :</h1>
                                <div className='flex'>
                                    <h1 className='pr-4 text-lg md:text-2xl'>{props.courseCode == "training" && "₹799/-"}{props.courseCode == "datascience" && "₹1,599/-"}{props.courseCode == "aiml" && "₹1,599/-"}{props.courseCode == "android" && "₹1,999/-"}{props.courseCode == "fullstack" && "₹1,299/-"}{props.courseCode == "java" && "₹899/-"}</h1>
                                </div>
                            </div>}
                            {!offer && <div className='text-white font-bold text-lg md:text-2xl flex justify-between pt-4 pb-2 px-4'>
                                <h1>Final Price :</h1>
                                <div className='flex'>
                                    <h1 className='pr-4 text-lg md:text-2xl'>{props.courseCode == "training" && "₹899/-"}{props.courseCode == "datascience" && "₹1,999/-"}{props.courseCode == "aiml" && "₹1,999/-"}{props.courseCode == "android" && "₹2,499/-"}{props.courseCode == "fullstack" && "₹1,499/-"}{props.courseCode == "java" && "₹999/-"}</h1>
                                </div>
                            </div>}
                        </div>



                        <div class="lg:col-span-1 md:px-12">
                            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                <div class="md:col-span-5 py-2">
                                    <label for="fullName" className='text-font'>Full Name*</label>
                                    <input onChange={handleChange} type="text" name="fullName" id="fullName" class="text-black outline-none ring-[#FD7014] transition duration-100 focus:ring rounded border bg-gray-50 h-10 mt-2 px-4 w-full" value={fullName} placeholder='Full Name' />
                                </div>

                                <div class="md:col-span-5 py-2">
                                    <label for="email" className='text-font'>Email Address*</label>
                                    <input onChange={handleChange} value={email} type="text" name="email" id="email" class="text-black outline-none ring-[#FD7014] transition duration-100 focus:ring rounded border bg-gray-50 h-10 mt-2 px-4 w-full" placeholder="email@domain.com" />
                                </div>

                                <div class="md:col-span-3 py-2">
                                    <label for="phoneNo" className='text-font'>Phone No*</label>
                                    <input onChange={handleChange} value={phoneNo} type="text" name="phoneNo" id="phoneNo" class="text-black outline-none ring-[#FD7014] transition duration-100 focus:ring rounded border bg-gray-50 h-10 mt-2 px-4 w-full" placeholder="Phone Number" />
                                </div>

                                <div class="md:col-span-2 py-2">
                                    <label for="whatsappNo" className='text-font'>Whatsapp No*</label>
                                    <input onChange={handleChange} type="text" name="whatsappNo" id="whatsappNo" class="text-black outline-none ring-[#FD7014] transition duration-100 focus:ring rounded border bg-gray-50 h-10 mt-2 px-4 w-full" value={whatsappNo} placeholder="Whatsapp Number" />
                                </div>

                            </div>
                            <div className='bg-black flex text-white py-4 flex-col md:flex-row'>
                                {!offer && <div className='w-full'>{props.courseCode == "aiml" && <img className='h-56' src="../qrs/aiml.jpg" alt="" />}
                                {props.courseCode == "fullstack" && <img className='h-56' src="../qrs/fullstack.jpg" alt="" />}
                                {props.courseCode == "android" && <img className='h-56' src="../qrs/android.jpg" alt="" />}
                                {props.courseCode == "java" && <img className='h-56' src="../qrs/java.jpg" alt="" />}
                                {props.courseCode == "datascience" && <img className='h-56' src="../qrs/datascience.jpg" alt="" />}
                                {props.courseCode == "training" && <img className='h-56' src="../qrs/training.jpg" alt="" />}</div>}
                                {offer && <div className='w-full'>{props.courseCode == "aiml" && <img className='h-56' src="../offerqrs/offeraiml.jpg" alt="" />}
                                {props.courseCode == "fullstack" && <img className='h-56' src="../offerqrs/offerfullstack.jpg" alt="" />}
                                {props.courseCode == "android" && <img className='h-56' src="../offerqrs/offerandroid.jpg" alt="" />}
                                {props.courseCode == "java" && <img className='h-56' src="../offerqrs/offerjava.jpg" alt="" />}
                                {props.courseCode == "datascience" && <img className='h-56' src="../offerqrs/offerdatascience.jpg" alt="" />}
                                {props.courseCode == "training" && <img className='h-56' src="../offerqrs/offertraining.jpg" alt="" />}</div>}
                                <div>
                                    <h1 className='text-3xl p-4 text-font'>Scan & Pay</h1>
                                    <p className='px-4 text-font'>Scan and Pay is a secure payment method as it uses encryption to protect the customer's payment information. The customer confirms the payment amount on their mobile app and authorizes the payment.</p>
                                </div>
                            </div>
                            <div class="md:col-span-5 py-2">
                                <label for="email" className='text-font'>Share your Screenshot of Payment : </label>
                                <input type="file" className='px-2' />
                            </div>
                            <div class="md:col-span-5 text-right">
                                <div class="inline-flex items-end">
                                    <button class="buynow-button text-white font-bold py-2 px-8 text-xl rounded" onClick={confirm}>Confirm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default BuyNow