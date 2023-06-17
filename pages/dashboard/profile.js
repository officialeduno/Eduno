import Head from 'next/head'
import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

const Dashboard = (props) => {

    const [linkedin, setLinkedin] = useState();
    const [github, setGithub] = useState();
    const [bio, setBio] = useState();
    const [education, setEducation] = useState();
    const [profession, setProfession] = useState();

    const handleChange = (e) => {
        if (e.target.name == 'linkedin') {
            setLinkedin(e.target.value);
        } else if (e.target.name == 'github') {
            setGithub(e.target.value);
        } else if (e.target.name == 'bio') {
            setBio(e.target.value);
        } else if (e.target.name == 'education') {
            setEducation(e.target.value);
        } else if (e.target.name == 'profession') {
            setProfession(e.target.value);
        }
    };

    const enhanceProfileSuccessMessage = () => toast('Your Profile is update successfully.', {
        autoClose: 2000,
        type: 'success'
    })
    const socialMediaUpdateSuccessMessage = () => toast('Your Social Meida Links is update successfully.', {
        autoClose: 2000,
        type: 'success'
    })

    // Profile Update API call
    const handleSubmit2 = async (e) => {
        e.preventDefault();
        props.setProgress(40);
        const id = props.edunoId.value;
        const data = { edunoId: id, bio, education, profession };
        let res = await fetch('https://www.eduno.in/api/dashboard/updateprofile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        props.setProgress(90);
        let resposnse = await res.json();
        if (resposnse.success == true) {
            props.setProgress(100);
            setBio("");
            setEducation("");
            setProfession("");
            enhanceProfileSuccessMessage();
        }
    }

    // Social Media Links Update API call
    const handleSubmit = async (e) => {
        e.preventDefault();
        props.setProgress(40);
        const id = props.edunoId.value;
        const data = { edunoId: id, linkedin, github };
        let res = await fetch('https://www.eduno.in/api/dashboard/updatesocialmedia', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        props.setProgress(90);
        let resposnse = await res.json();
        if (resposnse.success == true) {
            props.setProgress(100);
            setGithub("");
            setLinkedin("");
            socialMediaUpdateSuccessMessage();
        }
    }

    return (
        <>

            <ToastContainer />

            <Head>
                <title>Your Profile | Eduno (Empower yourself with Eduno)</title>
            </Head>


            {/* ########## Profile Section Start ########## */}
            <div className='bg-black py-12 px-4 md:px-0 flex flex-col justify-center items-center'>
                <h1 className='text-white text-font text-2xl md:text-4xl pb-2'>Hi! {props.userName.value}</h1>
                <h1 className='text-white text-font text-2xl md:text-4xl pb-2'>Eduno Id: {props.edunoId.value}</h1>
                <section className="profile-card-bg md:w-[60vw] p-6 mx-auto rounded-md shadow-md">
                    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Enhance Your Profile</h2>
                    {/* ########## Bio-education Form ########## */}
                    <form>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="bio">Bio</label>
                                <input id="bio" name='bio' type="text" value={bio} onChange={handleChange} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="eduncation">Education</label>
                                <input id="education" name='education' type="text" value={education} onChange={handleChange} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="profession">Profession</label>
                                <input id="profession" name='profession' type="text" value={profession} onChange={handleChange} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                        </div>
                        {/* ########## Button to save profile ########## */}
                        <div className="flex justify-end mt-6">
                            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" onClick={handleSubmit2}>Save</button>
                        </div>
                    </form>
                </section>

                <section className="profile-card-bg md:w-[60vw] p-6 mx-auto rounded-md shadow-md mt-12">
                    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Social Media Links</h2>
                    {/* ########## Social Media Form ########## */}
                    <form>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="linkedin">LinkedIn</label>
                                <input value={linkedin} onChange={handleChange} id="linkedin" name='linkedin' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="github">GitHub</label>
                                <input value={github} onChange={handleChange} id="github" name='github' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                        </div>
                        {/* ########## Button to save social media links ########## */}
                        <div className="flex justify-end mt-6">
                            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" onClick={handleSubmit}>Save</button>
                        </div>
                    </form>
                </section>
            </div>
            {/* ########## Profile Section End ########## */}

        </>
    )
}

export default Dashboard