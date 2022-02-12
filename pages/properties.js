import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { Icon } from '@iconify/react';
import HeaderNav from '../components/HeaderNav';
import { fetchAPI } from '../lib/api';

export default function Properties({ listingData, listingImages }) {
    const listings = listingData['data'];
    const listing = []
    const images = listingImages['data'][0].attributes;
  
    function getListings() {
      for(let i in listings) {
        listing.push(listings[i].attributes)
      }
      return listing;
    }

    getListings();

    return (
        <div className="page-properties">
            <Head>
                <title>Properties | Andy Nguyen Real Estate</title>
                <meta name="description" content="Andy Nguyen real estate agent in Minnesota" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <h1>Properties</h1>
                <div className="background"></div>
                <HeaderNav />
            </header>
            <div className="filters">
                <form>
                    <select id="forsale" name="forsale">
                        <option value="forsale">For sale</option>
                        <option value="sold">Sold</option>
                        <option value="all">All</option>
                    </select>
                    <select id="city" name="city">
                        <option value="" disabled selected hidden>City</option>
                        <option value="e">Eagan</option>
                        <option value="s">St. Paul</option>
                        <option value="g">Golden Valley</option>
                        <option value="d">Duluth</option>
                        <option value="i">International Falls</option>
                    </select>
                    <select id="price" name="price">
                        <option value="" disabled selected hidden>Price</option>
                        <option value="100">$100,000-200,000</option>
                        <option value="200">$200,000-300,000</option>
                        <option value="300">$300,000-400,000</option>
                        <option value="300">$400,000-500,000</option>
                        <option value="300">$500,000+</option>
                    </select>
                    <select id="type" name="type">
                    <option value="" disabled selected hidden>Type</option>
                        <option value="single-family">Single-family</option>
                        <option value="condo">Condo</option>
                        <option value="townhouse">Townhouse</option>
                    </select>
                    <select id="bedroom" name="bedroom">
                        <option value="" disabled selected hidden>Bedroom</option>
                        <option value="1">1 Bed</option>
                        <option value="2">2 Bed</option>
                        <option value="3">3 Bed</option>
                        <option value="4">4+ Bed</option>
                    </select>
                    <button className="button">Search</button>
                </form>
            </div>
            <main>
            {listing.map(({ slug, bed, bath, sqft, address, city, price, status }) => (
                <Link href={`/property/${ slug }`} key={ slug } passHref>
                    <a className="card">
                        <div className="property-card">
                            <div className="status-label">
                                <p>{ status == 'ForSale' ? 'For Sale' : status }</p>
                            </div>
                            <div className="property-image">
                                <Image 
                                    src="/house2.jpg"
                                    alt="" 
                                    layout="fill"
                                />
                            </div>
                            <div className="property-info">
                                <div className="property-top">
                                    <p className="price">${ price.toLocaleString() }</p>
                                    <p className="address">{ address }, { city }</p>
                                </div>
                                <div className="property-bottom">
                                    <div className="sqft info">
                                        <Icon icon="gis:square-pt" />
                                        <p>{ sqft.toLocaleString() } sqft</p>
                                    </div>
                                    <div className="bed info">
                                        <Icon icon="bx:bx-bed" />
                                        <p>{ bed } bed</p>
                                    </div>
                                    <div className="bath info">
                                        <Icon icon="bx:bx-bath" />
                                        <p>{ bath } bath</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </Link>
            ))}
            </main>
        </div>
    )
}

export async function getStaticProps() {
    const listingData = await fetchAPI(`listings`)
    const listingImages = await fetchAPI(`images??populate=*`)
  
    return {
      props: {
        listingData,
        listingImages
      },
      revalidate: 60
    }
  }