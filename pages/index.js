import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import RecentListings from '../components/RecentListings';

export default function Home() {
  return (
    <div className="page-home">
      <Head>
        <title>Andy Nguyen Real Estate</title>
        <meta name="description" content="Andy Nguyen real estate agent in Minnesota" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>Andy Nguyen Real Estate</h1>
        <h2>Real estate agent in Minnesota</h2>
        <div className="header-buttons">
            <a href="" className="button">
              Get in Contact
              <img
               src="/r-arrow.svg" 
               className="r-arrow" 
               alt="right arrow" 
               //layout="fill"
              />
            </a>
            <a href="/properties" className="button">
              Properties
              <img
                src="/r-arrow.svg" 
                className="r-arrow" 
                alt="right arrow" 
                //layout="fill"
              />
            </a>
        </div>
      </header>

      <main>
        <section className="about" id="about">
          <div className="about-container">
            <div className="about-portrait">
                <Image 
                  src="/portrait.png"
                  alt="portrait of Andy Nguyen" 
                  //data-aos="slide-left"
                  layout="fill"
                />
            </div>
            <div className="about-desc" data-aos="slide-right">
                <div className="header">
                  <h1>Meet Andy</h1>
                </div>
                <p className="label">Real Estate Agent</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Itaque voluptatem ipsum numquam et sit. Quisquam, quidem omnis? 
                  Asperiores veniam placeat nobis assumenda provident, quo, 
                  rerum officia eum soluta unde recusandae.
                </p>
                <Link href="/" >
                  <a className="button">Read more</a>
                </Link>
            </div>
          </div>
          <img className="divider" src="/divider2.svg"/>
        </section>

        <RecentListings />

        <section className="testimonials">
          <div className="testimonial-imgs">
            <Image 
              src="/clients/client.jpg"
              alt="" 
              layout="fill"
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </div>
          <div className="testimonial-container">
          <div className="header">
            <h1>What Clients Have To Say</h1>
            <p className="label">Testimonials</p>
          </div>
          <div className="testimonial">
            <p className="customer-testimonial">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Architecto dolorem similique eius consequuntur aut sunt 
              impedit optio harum, cumque nulla ad nostrum omnis 
              explicabo, amet facilis minus, esse saepe. Iure?
            </p>
            <p className="customer-name">Client Name</p>
          </div>
          </div>
        </section>

        <section className="contact-section">
          <section className="contact-section-container">
            <div className="header">
              <h1>Find Your New Home</h1>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Numquam, repudiandae nam.
            </p>
            <a href="" className="button">Contact</a>
          </section>
        </section>

      </main>
    </div>
  )
}
