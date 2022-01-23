import '../styles/globals.css'
import '../styles/Home.css';
import '../styles/RecentListings.css'
import '../styles/Properties.css'
import '../styles/Property.css'
import '../styles/Nav.css'
import "@fontsource/manrope"
import Nav from '../Nav'
import Footer from '../Footer'
import Cursor from '../components/Cursor'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: 'mobile',
      //once: true
    })
    AOS.refresh()
  })
  
  return (
    <>
    <Nav />
    <div className="main-content">
      {/*<Cursor/>*/}
      <Component {...pageProps} />
    </div>
    <Footer />
    </>
  )
}

export default MyApp
