/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link';

const Your_Courses = (props) => {

    const [show, setShow] = useState(false);
    const [course1, setCourse1] = useState();
    const [course2, setCourse2] = useState();
    const [course3, setCourse3] = useState();
    const [course4, setCourse4] = useState();
    const [course5, setCourse5] = useState();
    const [course6, setCourse6] = useState();

    const handleShowButton = async (e) => {
        e.preventDefault();
        if (show == false) {
            setShow(true);
            const id = localStorage.getItem('edunoId')
            const data = { edunoId: id };
            let res = await fetch('http://localhost:3000/api/dashboard/getcourses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            let resposne = await res.json();
            setCourse1(resposne.courses[0]);
            setCourse2(resposne.courses[1]);
            setCourse3(resposne.courses[2]);
            setCourse4(resposne.courses[3]);
            setCourse5(resposne.courses[4]);
            setCourse6(resposne.courses[5]);
        } else {
            setShow(false)
        }
    }

    return (
        <>
            <Head>
                <title>Start Learning with our Courses | Eduno (Empower Yourself with Eduno)</title>
            </Head>

            <div className='bg-black text-[#EEEEEE] flex flex-col justify-center items-center'>
                <h1 className='py-6 md:py-12 text-2xl md:text-4xl text-font'>Start Learning with us</h1>

                <div className='flex flex-row gap-4 md:gap-8 md:justify-center py-4 md:py-8 overflow-x-auto scroll whitespace-nowrap scroll-smooth w-[90vw]'>
                {show == true &&
                    <div className='flex justify-center items-center'>
                        {course1 &&
                            <div>
                                <section className='headerbg px-4 py-8 md:pt-2 md:pb-8 md:px-12'>
                                    <div className='border-2 rounded-xl'>
                                        <a href="#" class="group relative block w-72 md:w-96 h-40 md:h-80 overflow-hidden rounded-t-lg bg-black">
                                            {course1 == "aiml" && <img src="../img/aiml.png" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />}
                                            {course1 == "training" && <img src="../img/training.png" loading="lazy" alt="Photo by Austin Wade" class="rounded-xl h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />}
                                            {course1 == "android" && <img src="../img/android.png" loading="lazy" alt="Photo by Austin Wade" class="rounded-xl h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />}
                                            {course1 == "java" && <img src="../img/java.png" loading="lazy" alt="Photo by Austin Wade" class="rounded-xl h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />}
                                            {course1 == "datascience" && <img src="../img/datascience.png" loading="lazy" alt="Photo by Austin Wade" class="rounded-xl h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />}
                                            {course1 == "fullstack" && <img src="../img/webdev.png" loading="lazy" alt="Photo by Austin Wade" class="rounded-xl h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />}
                                        </a>

                                        <div class="flex items-start justify-between gap-2 rounded-b-lg bg-black p-4">
                                            <div class="flex flex-col">
                                                <a href="#" class="font-bold text-[#EEEEEE] transition duration-100 hover:text-[#FD7014] lg:text-lg">
                                                    {course1 == "aiml" && "AI / ML"}
                                                    {course1 == "training" && "Training 2023"}
                                                    {course1 == "datascience" && "Data Science"}
                                                    {course1 == "android" && "Android Dev"}
                                                    {course1 == "fullstack" && "Web Dev"}
                                                    {course1 == "java" && "Java with DSA"}
                                                </a>
                                                <span class="text-sm text-gray-500 lg:text-base">by EDUNO</span>
                                            </div>

                                            <div class="flex flex-col items-end">
                                                <Link href="https://drive.google.com/file/d/1ggceuBmqModIkmCPoDvozN0hZqQzFdkC/view?usp=sharing" target='_blank' className="inline-flex justify-center items-center py-2 mb-2 md:py-2 px-2 md:px-3 text-base font-medium text-center rounded-lg focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 button-background button-hover-background button-text button-hover-text">
                                                    Start Learning
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                </section>
                            </div>
                        }

                        {course2 &&
                            <div>
                                <section className='headerbg px-4 py-8 md:pt-2 md:pb-8 md:px-12'>
                                    <div className='border-2 rounded-xl'>
                                        <a href="#" class="group relative block w-72 md:w-96 h-40 md:h-80 overflow-hidden rounded-t-lg bg-black">
                                            {course2 == "aiml" && <img src="../img/aiml.png" loading="lazy" alt="Photo by Austin Wade" class="rounded-xl h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />}
                                            {course2 == "training" && <img src="../img/training.png" loading="lazy" alt="Photo by Austin Wade" class="rounded-xl h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />}
                                            {course2 == "android" && <img src="../img/android.png" loading="lazy" alt="Photo by Austin Wade" class="rounded-xl h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />}
                                            {course2 == "java" && <img src="../img/java.png" loading="lazy" alt="Photo by Austin Wade" class="rounded-xl h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />}
                                            {course2 == "datascience" && <img src="../img/datascience.png" loading="lazy" alt="Photo by Austin Wade" class="rounded-xl h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />}
                                            {course2 == "fullstack" && <img src="../img/webdev.png" loading="lazy" alt="Photo by Austin Wade" class="rounded-xl h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />}
                                        </a>

                                        <div class="flex items-start justify-between gap-2 rounded-b-lg bg-black p-4">
                                            <div class="flex flex-col">
                                                <a href="#" class="font-bold text-[#EEEEEE] transition duration-100 hover:text-[#FD7014] lg:text-lg">
                                                    {course2 == "aiml" && "AI / ML"}
                                                    {course2 == "training" && "Training 2023"}
                                                    {course2 == "datascience" && "Data Science"}
                                                    {course2 == "android" && "Android Dev"}
                                                    {course2 == "fullstack" && "Web Dev"}
                                                    {course2 == "java" && "Java with DSA"}
                                                </a>
                                                <span class="text-sm text-gray-500 lg:text-base">by EDUNO</span>
                                            </div>

                                            <div class="flex flex-col items-end">
                                                <Link href="https://drive.google.com/file/d/1ggceuBmqModIkmCPoDvozN0hZqQzFdkC/view?usp=sharing" target='_blank' className="inline-flex justify-center items-center py-2 mb-2 md:py-2 px-2 md:px-3 text-base font-medium text-center rounded-lg focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 button-background button-hover-background button-text button-hover-text">
                                                    Start Learning
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                </section>
                            </div>
                        }

                        {course3 &&
                            <div>
                                <section className='headerbg px-4 py-8 md:pt-2 md:pb-8 md:px-12'>
                                    <div className='border-2 rounded-xl'>
                                        <a href="#" class="group relative block w-72 md:w-96 h-40 md:h-80 overflow-hidden rounded-t-lg bg-black">
                                            {course3 == "aiml" && <img src="../img/aiml.png" loading="lazy" alt="Photo by Austin Wade" class="rounded-xl h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />}
                                            {course3 == "training" && <img src="../img/training.png" loading="lazy" alt="Photo by Austin Wade" class="rounded-xl h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />}
                                            {course3 == "android" && <img src="../img/android.png" loading="lazy" alt="Photo by Austin Wade" class="rounded-xl h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />}
                                            {course3 == "java" && <img src="../img/java.png" loading="lazy" alt="Photo by Austin Wade" class="rounded-xl h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />}
                                            {course3 == "datascience" && <img src="../img/datascience.png" loading="lazy" alt="Photo by Austin Wade" class="rounded-xl h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />}
                                            {course3 == "fullstack" && <img src="../img/webdev.png" loading="lazy" alt="Photo by Austin Wade" class="rounded-xl h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />}
                                        </a>

                                        <div class="flex items-start justify-between gap-2 rounded-b-lg bg-black p-4">
                                            <div class="flex flex-col">
                                                <a href="#" class="font-bold text-[#EEEEEE] transition duration-100 hover:text-[#FD7014] lg:text-lg">
                                                    {course3 == "aiml" && "AI / ML"}
                                                    {course3 == "training" && "Training 2023"}
                                                    {course3 == "datascience" && "Data Science"}
                                                    {course3 == "android" && "Android Dev"}
                                                    {course3 == "fullstack" && "Web Dev"}
                                                    {course3 == "java" && "Java with DSA"}
                                                </a>
                                                <span class="text-sm text-gray-500 lg:text-base">by EDUNO</span>
                                            </div>

                                            <div class="flex flex-col items-end">
                                                <Link href="https://drive.google.com/file/d/1ggceuBmqModIkmCPoDvozN0hZqQzFdkC/view?usp=sharing" target='_blank' className="inline-flex justify-center items-center py-2 mb-2 md:py-2 px-2 md:px-3 text-base font-medium text-center rounded-lg focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 button-background button-hover-background button-text button-hover-text">
                                                    Start Learning
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                </section>
                            </div>
                        }
                    </div>
                }
                </div>

                <div className='flex flex-row gap-4 md:gap-8 md:justify-center py-4 md:py-8 overflow-x-auto scroll whitespace-nowrap scroll-smooth w-[90vw]'>
                {show == true &&
                    <div className='flex justify-center items-center'>
                        {course4 &&
                            <div>
                                <section className='headerbg px-4 py-8 md:pt-2 md:pb-8 md:px-12'>
                                    <div className='border-2 rounded-xl'>
                                        <a href="#" class="group relative block w-72 md:w-96 h-40 md:h-80 overflow-hidden rounded-t-lg bg-black">
                                            {course4 == "aiml" && <img src="../img/aiml.png" loading="lazy" alt="Photo by Austin Wade" class="rounded-xl h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />}
                                            {course4 == "training" && <img src="../img/training.png" loading="lazy" alt="Photo by Austin Wade" class="rounded-xl h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />}
                                            {course4 == "android" && <img src="../img/android.png" loading="lazy" alt="Photo by Austin Wade" class="rounded-xl h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />}
                                            {course4 == "java" && <img src="../img/java.png" loading="lazy" alt="Photo by Austin Wade" class="rounded-xl h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />}
                                            {course4 == "datascience" && <img src="../img/datascience.png" loading="lazy" alt="Photo by Austin Wade" class="rounded-xl h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />}
                                            {course4 == "fullstack" && <img src="../img/webdev.png" loading="lazy" alt="Photo by Austin Wade" class="rounded-xl h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />}
                                        </a>

                                        <div class="flex items-start justify-between gap-2 rounded-b-lg bg-black p-4">
                                            <div class="flex flex-col">
                                                <a href="#" class="font-bold text-[#EEEEEE] transition duration-100 hover:text-[#FD7014] lg:text-lg">
                                                    {course4 == "aiml" && "AI / ML"}
                                                    {course4 == "training" && "Training 2023"}
                                                    {course4 == "datascience" && "Data Science"}
                                                    {course4 == "android" && "Android Dev"}
                                                    {course4 == "fullstack" && "Web Dev"}
                                                    {course4 == "java" && "Java with DSA"}
                                                </a>
                                                <span class="text-sm text-gray-500 lg:text-base">by EDUNO</span>
                                            </div>

                                            <div class="flex flex-col items-end">
                                                <Link href="https://drive.google.com/file/d/1ggceuBmqModIkmCPoDvozN0hZqQzFdkC/view?usp=sharing" target='_blank' className="inline-flex justify-center items-center py-2 mb-2 md:py-2 px-2 md:px-3 text-base font-medium text-center rounded-lg focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 button-background button-hover-background button-text button-hover-text">
                                                    Start Learning
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                </section>
                            </div>
                        }

                        {course5 &&
                            <div>
                                <section className='headerbg px-4 py-8 md:pt-2 md:pb-8 md:px-12'>
                                    <div className='border-2 rounded-xl'>
                                        <a href="#" class="group relative block w-72 md:w-96 h-40 md:h-80 overflow-hidden rounded-t-lg bg-black">
                                            {course5 == "aiml" && <img src="../img/aiml.png" loading="lazy" alt="Photo by Austin Wade" class="rounded-xl h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />}
                                            {course5 == "training" && <img src="../img/training.png" loading="lazy" alt="Photo by Austin Wade" class="rounded-xl h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />}
                                            {course5 == "android" && <img src="../img/android.png" loading="lazy" alt="Photo by Austin Wade" class="rounded-xl h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />}
                                            {course5 == "java" && <img src="../img/java.png" loading="lazy" alt="Photo by Austin Wade" class="rounded-xl h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />}
                                            {course5 == "datascience" && <img src="../img/datascience.png" loading="lazy" alt="Photo by Austin Wade" class="rounded-xl h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />}
                                            {course5 == "fullstack" && <img src="../img/webdev.png" loading="lazy" alt="Photo by Austin Wade" class="rounded-xl h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />}
                                        </a>

                                        <div class="flex items-start justify-between gap-2 rounded-b-lg bg-black p-4">
                                            <div class="flex flex-col">
                                                <a href="#" class="font-bold text-[#EEEEEE] transition duration-100 hover:text-[#FD7014] lg:text-lg">
                                                    {course5 == "aiml" && "AI / ML"}
                                                    {course5 == "training" && "Training 2023"}
                                                    {course5 == "datascience" && "Data Science"}
                                                    {course5 == "android" && "Android Dev"}
                                                    {course5 == "fullstack" && "Web Dev"}
                                                    {course5 == "java" && "Java with DSA"}
                                                </a>
                                                <span class="text-sm text-gray-500 lg:text-base">by EDUNO</span>
                                            </div>

                                            <div class="flex flex-col items-end">
                                                <Link href="https://drive.google.com/file/d/1ggceuBmqModIkmCPoDvozN0hZqQzFdkC/view?usp=sharing" target='_blank' className="inline-flex justify-center items-center py-2 mb-2 md:py-2 px-2 md:px-3 text-base font-medium text-center rounded-lg focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 button-background button-hover-background button-text button-hover-text">
                                                    Start Learning
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                </section>
                            </div>
                        }

                        {course6 &&
                            <div>
                                <section className='headerbg px-4 py-8 md:pt-2 md:pb-8 md:px-12'>
                                    <div className='border-2 rounded-xl'>
                                        <a href="#" class="group relative block w-72 md:w-96 h-40 md:h-80 overflow-hidden rounded-t-lg bg-black">
                                            {course6 == "aiml" && <img src="../img/aiml.png" loading="lazy" alt="Photo by Austin Wade" class="rounded-xl h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />}
                                            {course6 == "training" && <img src="../img/training.png" loading="lazy" alt="Photo by Austin Wade" class="rounded-xl h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />}
                                            {course6 == "android" && <img src="../img/android.png" loading="lazy" alt="Photo by Austin Wade" class="rounded-xl h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />}
                                            {course6 == "java" && <img src="../img/java.png" loading="lazy" alt="Photo by Austin Wade" class="rounded-xl h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />}
                                            {course6 == "datascience" && <img src="../img/datascience.png" loading="lazy" alt="Photo by Austin Wade" class="rounded-xl h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />}
                                            {course6 == "fullstack" && <img src="../img/webdev.png" loading="lazy" alt="Photo by Austin Wade" class="rounded-xl h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />}
                                        </a>

                                        <div class="flex items-start justify-between gap-2 rounded-b-lg bg-black p-4">
                                            <div class="flex flex-col">
                                                <a href="#" class="font-bold text-[#EEEEEE] transition duration-100 hover:text-[#FD7014] lg:text-lg">
                                                    {course6 == "aiml" && "AI / ML"}
                                                    {course6 == "training" && "Training 2023"}
                                                    {course6 == "datascience" && "Data Science"}
                                                    {course6 == "android" && "Android Dev"}
                                                    {course6 == "fullstack" && "Web Dev"}
                                                    {course6 == "java" && "Java with DSA"}
                                                </a>
                                                <span class="text-sm text-gray-500 lg:text-base">by EDUNO</span>
                                            </div>

                                            <div class="flex flex-col items-end">
                                                <Link href="https://drive.google.com/file/d/1ggceuBmqModIkmCPoDvozN0hZqQzFdkC/view?usp=sharing" target='_blank' className="inline-flex justify-center items-center py-2 mb-2 md:py-2 px-2 md:px-3 text-base font-medium text-center rounded-lg focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 button-background button-hover-background button-text button-hover-text">
                                                    Start Learning
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                </section>
                            </div>
                        }
                    </div>
                }
                </div>

                {show == false && <button onClick={handleShowButton} className="inline-block rounded-lg px-8 py-3 text-center text-sm font-semibold  outline-none  transition duration-300 text-white focus-visible:ring active:bg-[#a2cc4c] md:text-base my-4">Show More</button>}
                {show == true && <button onClick={handleShowButton} className="inline-block rounded-lg px-8 py-3 text-center text-sm font-semibold  outline-none  transition duration-300 text-white focus-visible:ring active:bg-[#a2cc4c] md:text-base my-4">Show Less</button>}
            </div>
        </>
    )
}

export default Your_Courses