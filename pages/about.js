import Link from 'next/link'
import Image from 'next/image'
import HeaderNav from '../components/HeaderNav'
import { fetchAPI } from '../lib/api';

export default function About ({ aboutData }) {
    const about = aboutData['data'].attributes.content;

    return (
        <div className="page-about">
            <header>
                <h1>Contact</h1>
                <div className="background"></div>
                <HeaderNav />
            </header>
            <main>
                <h1>Who is Andy Nguyen?</h1>
                <p>{ about }</p>
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