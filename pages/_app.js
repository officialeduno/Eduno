import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import '@/styles/globals.css'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar'

export default function App({ Component, pageProps }) {

  const router = useRouter();
  const [user, setUser] = useState({ value: null });
  const [userName, setUserName] = useState({ value: null });
  const [edunoId, setEdunoId] = useState({ value: null });
  const [key, setKey] = useState(0);
  const [courseCode, setCourseCode] = useState({ value: null });
  const [progress, setProgress] = useState(0);

  const buyNow = (courseCode) => {
    setCourseCode(courseCode);
    const loginToken = localStorage.getItem('loginToken');
    if (loginToken) {
      router.push(`https://www.eduno.in/payment/buynow`)
    } else {
      const signInMessage = "You are not Logged In. Please Login your account."
      if (confirm(signInMessage) == true) {
        router.push(`https://www.eduno.in/authentication/signin`);
      }
    }
  }

  const logout = () => {
    const logoutConfirmationMessage = "Are you sure? Want to Sign Out?";
    if (confirm(logoutConfirmationMessage) == true) {
      localStorage.removeItem('loginToken');
      localStorage.removeItem('userName');
      localStorage.removeItem('edunoId');
      setKey(Math.random());
      setUser({ value: null });
      router.push(`https://www.eduno.in/`);
    }
  }

  useEffect(() => {
    router.events.on('routeChangeStart', ()=>{
      setProgress(40);
    })
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100);
    })
    const loginToken = localStorage.getItem('loginToken');
    const username = localStorage.getItem('userName'); 
    const id = localStorage.getItem('edunoId'); 
    if (loginToken) {
      setUser({ value: loginToken });
      setUserName({ value: username });
      setEdunoId({value: id});
      setKey(Math.random())
    }
  }, [router.query])

  return <>
    <LoadingBar
      color='#FD7014'
      progress={progress}
      waitingTime={300}
      onLoaderFinished={() => setProgress(0)}
    />

    <Navbar logout={logout} user={user} userName={userName} key={key} />

    <Component {...pageProps} user={user} userName={userName} buyNow={buyNow} courseCode={courseCode} progress={progress} setProgress={setProgress} edunoId={edunoId} />

    <Footer />

  </>
}
