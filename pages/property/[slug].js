import Image from 'next/image'
import Head from 'next/head'
import ContactForm from '../../components/ContactForm'
import { Icon } from '@iconify/react';
import HeaderNav from '../../components/HeaderNav';
import { fetchAPI } from "../../lib/api";
import ImageGallery from 'react-image-gallery';

export default function Property ({ listingData, listingImages }) {
    const listing = listingData['data'][0].attributes;
    const imageArray = listingImages['data'][0].attributes.photos['data'];
    const image = [];

    function getImages() {
        for(let i in imageArray) {
            image.push(imageArray[i].attributes.url);
        }
        return image;
    }

    getImages();

    const slideshow = [
        {
          original: '/images/header/1.jpg',
          thumbnail: '/images/header/1.jpg',
        },
        {
            original: '/images/header/2.jpg',
            thumbnail: '/images/header/2.jpg',
        },
        {
            original: '/images/header/3.jpeg',
            thumbnail: '/images/header/3.jpeg',
        },
      ];

    return (
        <div className="page-property">
            <Head>
                <title>{ listing.address }, { listing.city }, MN { listing.zipcode } | Andy Nguyen Real Estate</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <header className="property-images">
                    <ImageGallery items={ slideshow }/>
                    <HeaderNav />
                </header>
                <div className="main-container">
                    <div className="property-information">
                        <div className="property-intro">
                            <p className="label">{ listing.status == 'ForSale' ? 'For Sale' : listing.status }</p>
                            <h1 className="address">{ listing.address }, { listing.city }, MN { listing.zipcode }</h1>
                            <p className="description">{ listing.description }</p>
                        </div>
                        <div className="property-facts">
                            <h2>Property Details</h2>
                            <div className="facts">
                                <div className="fact">
                                    <Icon icon="bi:house-door" />
                                    <p>{ listing.type == 'SingleFamily' ? 'Single-family' : listing.type }</p>
                                </div>
                                <div className="fact">
                                    <Icon icon="gis:square-pt" />
                                    <p>{ listing.sqft } sqft</p>
                                </div>
                                <div className="fact">
                                    <Icon icon="bx:bx-bed" />
                                    <p>{ listing.bed } bed</p>
                                </div>
                                <div className="fact">
                                    <Icon icon="bx:bx-bath" />
                                    <p>{ listing.bath } bath</p>
                                </div>
                                <div className="fact">
                                    <Icon icon="ri:parking-box-line" />
                                    <p>{ listing.garage } car garage</p>
                                </div>
                                <div className="fact">
                                    <Icon icon="ic:outline-date-range" />
                                    <p>Built { listing.yearBuilt }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    { listing.status == 'ForSale' ?  
                    <aside className="contact-form" data-aos="fade-up">
                        <div className="contact-form-top">
                            <h2>Interested in this Property?</h2>
                            <p>Request additional information or schedule a tour.</p>
                        </div>
                        <ContactForm />
                    </aside>
                    : '' }
                </div>
            </main>
        </div>
    )
}

export async function getStaticProps({ params }) {
    const listingData = await fetchAPI(`listings?filters[slug][$eq]=${ params.slug }&populate=*`)
    const listingImages = await fetchAPI(`images??filters[slug][$eq]=${ params.slug }&populate=*`)

    return {
        props: { 
            listingData,
            listingImages
        },
        revalidate: 10,
    }
}

export async function getStaticPaths() {
    const listingData = await fetchAPI(`listings?populate=*`)
    const listings = listingData['data']
    const listing = []
  
    function getListings() {
      for(let i in listings) {
        listing.push(listings[i].attributes)
      }
      return listing
    }
    
    getListings();

    return {
        paths: listing.map(({ slug }) => ({
            params: {
                slug: slug,
            }
        })),
        fallback: 'blocking'
    }
}