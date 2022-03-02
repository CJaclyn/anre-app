import Link from 'next/link'
import Head from 'next/head'
import HeaderNav from '../components/HeaderNav'
import { fetchAPI } from '../lib/api';

export default function About ({ aboutData }) {
    var about; 

    if (aboutData['data'] == null) {
        about = "There was an error. Please check back later."
    }else {
        about = aboutData['data'].attributes.content;
    }

    return (
        <div className="page-about">
            <Head>
                <title>About | Andy Nguyen Real Estate</title>
                <meta name="description" content="About Andy Nguyen real estate agent in Minnesota." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <header>
                    <HeaderNav />
                </header>
                <div className="about-container">
                    <div className="about-content" data-aos="slide-up">
                        <p className="label">About</p>
                        <h1>Meet Andy</h1>
                        <p>{ about }</p>
                        <Link  href="/contact">
                        <a className="button arrow-button">
                            Get in contact
                            <img src="/arrow_red.svg" className="r-arrow" alt="right arrow" />
                        </a>
                        </Link>
                    </div>
                </div>
                <div className="portrait-container">
                    <div className="portrait">
                        <img src="/portrait.png" alt="portrait of Andy Nguyen" />
                    </div>
                </div>

            </main>
        </div>
    )
}

export async function getStaticProps() {
    const aboutData = await fetchAPI(`about`)
  
    return {
      props: {
        aboutData
      },
      revalidate: 60
    }
  }