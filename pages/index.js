import Link from 'next/link';
import Image from 'next/image';
import Testimonials from '../components/Testimonials';
import { Icon } from '@iconify/react';
import Slider from 'react-slick';
import { HeaderImages } from '../HeaderImages';
import { fetchAPI } from '../lib/api';
import PageHead from '../components/PageHead';
import { getAbout } from '../functions.js';

export default function Home({ listingData, aboutData }) {
  const data = HeaderImages;
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3250,
    cssEase: 'ease-in-out',
    arrows: false,
    pauseOnHover: false,
  };

  function getListings() {
    const listings = listingData['data'];
    let listing = [];

    if (listings !== null) {
      if (listings.length >= 2) {
        let listingCount = listings.length;
        listing.push(listings[listingCount - 1].attributes);
        listing.push(listings[listingCount - 2].attributes);
      } else {
        listing.push(listings[0].attributes);
      }
    } else {
      listing = [
        {
          slug: '',
          type: 'N/A',
          bed: 0,
          bath: 0,
          city: 'N/A',
          address: 'N/A',
          price: 0,
          sqft: 0,
          description: 'There was an error, please check back later',
        },
      ];
    }

    return listing;
  }

  return (
    <div className='page-home'>
      <PageHead
        title='Andy Nguyen Real Estate | Realtor in Minnesota'
        description='Andy Nguyen is a real estate agent in the Twin Cities and Greater Minnesota. Whether you&lsquo;re looking to buy or sell a home in Minnesota, you can trust Andy Nguyen Real Estate to handle everything with integrity and professionalism.'
      />
      <header>
        <div className='background'>
          <Slider {...settings}>
            {data.map((slide, index) => {
              return (
                <div className='header-img' key={index}>
                  <Image
                    src={slide}
                    layout='fill'
                    objectFit='cover'
                    alt={`house ${index + 1}`}
                    className='image'
                  />
                </div>
              );
            })}
          </Slider>
        </div>
        <div
          className='header-main'
          data-aos='fade-in'
          data-aos-duration='1750'
        >
          <p className='welcome'>Welcome to</p>
          <h1>Andy Nguyen Real Estate</h1>
          <h2>Real Estate Agent in Minnesota.</h2>
          <div className='header-buttons'>
            <Link href='/contact'>
              <a className='button'>Contact</a>
            </Link>
            <Link href='/properties'>
              <a className='button arrow-button'>
                Properties
                <img src='/r-arrow.svg' className='r-arrow' alt='right arrow' />
              </a>
            </Link>
          </div>
        </div>
        <div className='scroll-down'>
          <div className='scroll-down-container'>
            <p>Scroll Down</p>
            <Icon icon='dashicons:arrow-down' color='white' />
          </div>
        </div>
      </header>

      <main>
        <section className='about' id='about'>
          <div className='about-container' data-aos='fade-in'>
            <div className='about-portrait'>
              <Image
                src='/portrait_l.png'
                alt='portrait of Andy Nguyen'
                layout='fill'
              />
            </div>
            <div className='about-desc'>
              <p className='label'>About</p>
              <div className='header'>
                <h1>Meet Andy</h1>
              </div>
              <p>{getAbout(aboutData['data'])}</p>
              <Link href='/about'>
                <a className='button'>Learn more</a>
              </Link>
            </div>
          </div>
        </section>

        <section className='recent-listings' data-aos='fade-in'>
          <h1>Recent Listings</h1>
          {getListings().map(
            (
              {
                slug,
                type,
                bed,
                bath,
                sqft,
                address,
                city,
                price,
                thumbnail,
                description,
              },
              index
            ) => (
              <div
                className={`recent-listings-container house-${index + 1}`}
                key={slug}
              >
                <div className='recent-listing-container'>
                  <div
                    className='recent-listing-img'
                    data-aos='fade-up'
                    data-aos-duration='1500'
                  >
                    {thumbnail ? (
                      <>
                        {
                          <Image
                            src={thumbnail.data.attributes.url}
                            alt='house thumbnail'
                            layout='fill'
                          />
                        }
                      </>
                    ) : (
                      <>
                        {
                          <Image
                            src='/no_image.jpg'
                            alt='no image'
                            layout='fill'
                          />
                        }
                      </>
                    )}
                  </div>
                  <div className='recent-listing-info' data-aos='fade-up'>
                    <p className='label'>
                      {type == 'SingleFamily' ? 'Single-family' : type}
                    </p>
                    <h2 className='address'>
                      {address}, {city}
                    </h2>
                    <h2 className='price'>${price.toLocaleString()}</h2>
                    <p className='details'>
                      {sqft} sqft · {bed} bed · {bath} bath
                    </p>
                    <p className='recent-listing-desc'>
                      {description.substring(0, 200)}...
                    </p>
                    <Link href={`/property/${slug}`}>
                      <a className='basic-link'>View house</a>
                    </Link>
                  </div>
                </div>
              </div>
            )
          )}
          <Link href='/properties'>
            <a className='button'>All Properties</a>
          </Link>
        </section>

        <Testimonials />

        <section className='contact-section'>
          <div className='contact-section-container' data-aos='fade-in'>
            <div className='header'>
              <h1>Get in Touch</h1>
            </div>
            <p>
              Here to make your process of buying or selling a house as easy as
              possible.
            </p>
            <Link href='/contact'>
              <a className='button arrow-button'>
                Contact
                <img src='/r-arrow.svg' className='r-arrow' alt='right arrow' />
              </a>
            </Link>
          </div>
          <img
            src='/neighborhood_white.png'
            alt=''
            width='1000'
            className='neighborhood-img'
          />
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const listingData = await fetchAPI(`listings?sort[0]=id:asc&populate=*`);
  const aboutData = await fetchAPI(`about`);

  return {
    props: {
      listingData,
      aboutData,
    },
    revalidate: 60,
  };
}
