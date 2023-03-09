import Navbar from '@/components/navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <Navbar />
    <Component {...pageProps} />
  </>
}
