import Link from 'next/link';
import PageHead from '../components/PageHead';
import { fetchAPI } from '../lib/api';
import { getAbout } from '../functions.js';

export default function About({ aboutData }) {
  return (
    <div className='page-about'>
      <PageHead
        title='About | Andy Nguyen Real Estate'
        description='Andy Nguyen is a real estate agent in the Twin Cities and Greater Minnesota. Whether you&lsquo;re looking to buy or sell a home in Minnesota, you can trust Andy Nguyen Real Estate to handle everything with integrity and professionalism.'
      />
      <main>
        <div className='about-container'>
          <div className='about-content' data-aos='slide-up'>
            <p className='label'>About</p>
            <h1>Meet Andy</h1>
            <p>{getAbout(aboutData['data'])}</p>
            <Link href='/contact'>
              <a className='button arrow-button'>
                Get in contact
                <img
                  src='/arrow_red.svg'
                  className='r-arrow'
                  alt='right arrow'
                />
              </a>
            </Link>
          </div>
        </div>
        <div className='portrait-container'>
          <div className='portrait'>
            <img src='/portrait.png' alt='portrait of Andy Nguyen' />
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const aboutData = await fetchAPI(`about`);

  return {
    props: {
      aboutData,
    },
    revalidate: 60,
  };
}
