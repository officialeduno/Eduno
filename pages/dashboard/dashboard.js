import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'


const Dashboard = () => {
    const router = useRouter();
    const userId = router.query.userId;
    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <div>
                
            </div>
        </>
    )
}

export default Dashboard