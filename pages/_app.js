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
  const [userName, setUserName] = useState({ value: null });
  const [key, setKey] = useState(0);
  const [courseCode, setCourseCode] = useState({value: null});

  const buyNow = (courseCode) => {
    setCourseCode(courseCode);
    const loginToken = localStorage.getItem('loginToken');
    if(loginToken){
      router.push(`http://localhost:3000/payment/buynow`)
    }else{
      const signInMessage = "You are not Logged In. Please Login your account."
      if(confirm(signInMessage)==true){
        router.push(`http://localhost:3000/authentication/signin`);
      }
    }
  }

  const logout = () => {
    const logout_confirmation_message = "Are you sure? Want to Sign Out?";
    if (confirm(logout_confirmation_message) == true) {
      localStorage.removeItem('loginToken');
      localStorage.removeItem('userName');
      setKey(Math.random());
      setUser({ value: null });
      router.push(`http://localhost:3000/`);
    }
  }

  // Check login token is present or not
  useEffect(() => {
    const loginToken = localStorage.getItem('loginToken');
    const username = localStorage.getItem('userName');
    if (loginToken) {
      setUser({ value: loginToken });
      setUserName({ value: username });
      setKey(Math.random())
    }
  }, [router.query])

  return <>

    {/* Navbar component  */}
    <Navbar logout={logout} user={user} userName={userName} key={key} />

    {/* Other pages  */}
    <Component {...pageProps} user={user} userName={userName} buyNow={buyNow} courseCode={courseCode}/>

    {/* Footer component  */}
    <Footer />

  </>
}
