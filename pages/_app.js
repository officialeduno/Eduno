// Import footer component from component sections
import Footer from '@/components/footer'

// Import navbar component from component section
import Navbar from '@/components/navbar'

// Import Global CSS
import '@/styles/globals.css'

// Import useState from react package
import { useEffect, useState } from 'react';

// Main function of the Application 
export default function App({ Component, pageProps }) {

  const [user, setUser] = useState({ value: null });
  const [userName, setUserName] = useState({value: null})
  const [key, setKey] = useState(0);

  // Check login token is present or not
  useEffect(()=>{
    const loginToken = localStorage.getItem('loginToken');
    const username = localStorage.getItem('userName')
    if (loginToken) {
      setUser({ value: loginToken });
      setUserName({value: username});
      setKey(Math.random())
    }
  }, [])

  return <>

    {/* Navbar component  */}
    <Navbar user={user} userName={userName} key={key} />

    {/* Other pages  */}
    <Component {...pageProps} />

    {/* Footer component  */}
    <Footer />

  </>
}
