import '../styles/globals.css'
import '../styles/Home.css';
import '../styles/RecentListings.css'
import '../styles/Properties.css'
import Nav from '../Nav'
import Footer from '../Footer'
import Cursor from '../components/Cursor'

function MyApp({ Component, pageProps }) {
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
