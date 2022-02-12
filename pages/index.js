import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import RecentListings from '../components/RecentListings'
import Testimonials from '../Testimonials'
import { Icon } from '@iconify/react'
import Slider from "react-slick";
import { HeaderImages } from '../HeaderImages'
import HeaderNav from '../components/HeaderNav'

export default function Home() {
  const data = HeaderImages;
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3250,
    cssEase: "ease-in-out",
    arrows: false, 
    pauseOnHover: false,
  };

  return (
    <div className="page-home">
      <Head>
        <title>Andy Nguyen Real Estate</title>
        <meta name="description" content="Andy Nguyen real estate agent in Minnesota" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className="background">
          <Slider {...settings}>
          {data.map((slide, index) => {
          return (
              <div className="header-img" key={ index }>
                  <Image 
                      src={ slide }
                      layout="fill"
                      objectFit="cover"
                      alt={`house ${index + 1}`}
                      className="image"
                  />
              </div>
            )})}
          </Slider>
        </div>
        <HeaderNav />
        <div className="header-main" data-aos="fade-in" data-aos-duration="1750">
          <p className="welcome">Welcome to</p>
          <h1>Andy Nguyen Real Estate</h1>
          <h2>Real Estate Agent in Minnesota.</h2>
          <div className="header-buttons">
            <Link href="/contact">
              <a className="button">
                Contact
              </a>
            </Link>
            <Link href="/properties">
              <a className="button arrow-button">
                Properties
                <img src="/r-arrow.svg" className="r-arrow" alt="right arrow" />
              </a>
            </Link>
          </div>
        </div>
        <div className="scroll-down">
          <div className="scroll-down-container">
            <p>Scroll Down</p>
            <Icon icon="dashicons:arrow-down" color="white" />
          </div>
        </div>
      </header>

      <main>
        <section className="about" id="about">
          <div className="about-container" data-aos="fade-in">
            <div className="about-portrait">
                <Image 
                  src="/portrait.png"
                  alt="portrait of Andy Nguyen" 
                  layout="fill"
                />
            </div>
            <div className="about-desc">
                <div className="header">
                  <h1>Andy Nguyen</h1>
                </div>
                <p className="label">Meet Andy</p>
                <p>
                  Core values: People-first, professionalism, communication
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Itaque voluptatem ipsum numquam et sit. Quisquam, quidem omnis? 
                  Asperiores veniam placeat nobis assumenda provident, quo, 
                  rerum officia eum soluta unde recusandae.
                </p>
                <Link href="/" >
                  <a className="button">Learn more</a>
                </Link>
            </div>
          </div>
        </section>

        <RecentListings />
        <Testimonials />

        <section className="contact-section">
          <section className="contact-section-container" data-aos="fade-in">
            <div className="header">
              <h1>Get in Touch</h1>
            </div>
            <p>Here to make your process of buying or selling a house as easy as possible.</p>
            <Link href="/contact">
              <a className="button arrow-button">
                Contact
                <img src="/r-arrow.svg" className="r-arrow" alt="right arrow" />
              </a>
            </Link>
          </section>
        </section>

      </main>
    </div>
  )
}
