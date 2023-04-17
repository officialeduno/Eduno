// Import footer component from component sections
import Footer from '@/components/footer'

// Import navbar component from component section
import Navbar from '@/components/navbar'

// Import Global CSS
import '@/styles/globals.css'
import { useRouter } from 'next/router';

// Import useState from react package
import { useEffect, useState } from 'react';

// Main function of the Application  
export default function App({ Component, pageProps }) {

  const router = useRouter();

  const [user, setUser] = useState({ value: null });
  const [userName, setUserName] = useState({value: null})
  const [key, setKey] = useState(0);

  const logout = () => {
    localStorage.removeItem('loginToken');
    localStorage.removeItem('userName');
    setKey(Math.random());
    setUser({value: null});
    router.push(`http://localhost:3000`)
  }

  // Check login token is present or not
  useEffect(()=>{
    const loginToken = localStorage.getItem('loginToken');
    const username = localStorage.getItem('userName')
    if (loginToken) {
      setUser({ value: loginToken });
      setUserName({value: username});
      setKey(Math.random())
    }
  }, [router.query])

  return <>

    {/* Navbar component  */}
    <Navbar logout={logout} user={user} userName={userName} key={key} />

    {/* Other pages  */}
    <Component {...pageProps} />

    {/* Footer component  */}
    <Footer />

  </>
}
