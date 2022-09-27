import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import '../styles/globals.css';
import '../styles/Home.css';
import '../styles/RecentListings.css';
import '../styles/Testimonials.css';
import '../styles/Properties.css';
import '../styles/Property.css';
import '../styles/Nav.css';
import '../styles/Contact.css';
import '../styles/About.css';
import '../styles/Privacy.css';
import '@fontsource/manrope';
import Nav from '../components/Nav';
import Footer from '../Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: 'mobile',
      //once: true
    });
    AOS.refresh();
  });

  return (
    <>
      <Nav />
      <div className='main-content'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
