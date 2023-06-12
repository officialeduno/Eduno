import React, { useState } from 'react'
import Head from 'next/head'


const Dashboard = (props) => {

    const [linkedin, setLinkedin] = useState();
    const [github, setGithub] = useState();

    const handleChange = (e) => {
        if (e.target.name == 'linkedin') {
            setLinkedin(e.target.value);
        } else if (e.target.name == 'github') {
            setGithub(e.target.value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        props.setProgress(40);
        const id = props.edunoId.value;
        const data = {edunoId: id, linkedin, github};
        let res = await fetch('http://localhost:3000/api/dashboard/updatesocialmedia', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        });
        props.setProgress(90);
        let resposnse = await res.json();
        console.log(resposnse);
    }

    return (
        <>
            <Head>
                <title>Your Profile | Eduno (Empower yourself with Eduno)</title>
            </Head>
            <div className='bg-black py-12 px-4 md:px-0 flex flex-col justify-center items-center'>
                <h1 className='text-white text-font text-2xl md:text-4xl pb-2'>Hi! {props.userName.value}</h1>
                <h1 className='text-white text-font text-2xl md:text-4xl pb-2'>Eduno Id: {props.edunoId.value}</h1>
                <section className="profile-card-bg md:w-[60vw] p-6 mx-auto rounded-md shadow-md">
                    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Change Your Profile</h2>

                    <form>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Name</label>
                                <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Bio</label>
                                <input id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Education</label>
                                <input id="password" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Profession</label>
                                <input id="passwordConfirmation" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                            </div>
                        </div>

                        <div className="flex justify-end mt-6">
                            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                        </div>
                    </form>
                </section>

                <section className="profile-card-bg md:w-[60vw] p-6 mx-auto rounded-md shadow-md mt-12">
                    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Social Media Links</h2>

                    <form>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="linkedin">LinkedIn</label>
                                <input value={linkedin} onChange={handleChange} id="linkedin" name='linkedin' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="github">GitHub</label>
                                <input value={github} onChange={handleChange} id="github" name='github' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                            </div>
                        </div>

                        <div className="flex justify-end mt-6">
                            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" onClick={handleSubmit}>Save</button>
                        </div>
                    </form>
                </section>
            </div>
        </>
    )
}

export default Dashboard