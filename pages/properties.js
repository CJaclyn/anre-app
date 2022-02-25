import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { Icon } from '@iconify/react';
import HeaderNav from '../components/HeaderNav';
import { fetchAPI } from '../lib/api';

export default function Properties({ listingData }) {
    const [filters, setFilters] = useState({
        status: null,
        city: null,
        price: null,
        type: null,
        bedroom: null,
    });

    const listings = listingData['data'];
    let listing = [];
    const cities = [];
    let result = listing

    function getListings() {
      for(let i in listings) {            
        const listingCity = listings[i].attributes.city;
        cities.push(listingCity.toUpperCase());
        listing.push(listings[i].attributes);
      }

      return listing, cities;
    }

    getListings();
    
    const city = [...new Set(cities)];

    const handleChange = e => {
        const { name, value } = e.target
        setFilters({
            ...filters,
            [name]: value
        });
    }

    console.log(filters)

    function filtering() {
        if (filters.status && filters.status != "All") {
            const status = filters.status;
            result = result.filter(listing => listing.status == status)
        }

        if (filters.city && filters.city != "Any") {
            const city = filters.city;
            result = result.filter(listing => listing.city.toUpperCase() == city)
        }

        if (filters.price) {
            const price = filters.price;
            result = result.filter(listing => listing.price <= price)
        }

        if (filters.type && filters.type != "Any") {
            const type = filters.type;
            result = result.filter(listing => listing.type == type)
        }

        if (filters.bedroom) {
            const bed = filters.bedroom;
            result = result.filter(listing => listing.bed >= bed)
        }

        return result;
    }

    filtering()
    console.log(result)

    return (
        <div className="page-properties">
            <Head>
                <title>Properties | Andy Nguyen Real Estate</title>
                <meta name="description" content="Andy Nguyen real estate agent in Minnesota. Homes for sale in Minnesota." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <h1>Properties</h1>
                <div className="background"></div>
                <HeaderNav />
            </header>
            <div className="filters">
                <form>
                    <select 
                        name="status" 
                        onChange={ handleChange } 
                        value={ filters.status } 
                        aria-label="Filter property status">
                        <option value="" disabled selected hidden>Status</option>
                        <option value="ForSale">For sale</option>
                        <option value="Sold">Sold</option>
                        <option value="All">All</option>
                    </select>
                    <select 
                        name="city" 
                        onChange={ handleChange } 
                        value={ filters.city }
                        aria-label="Filter property city">
                        <option value="" disabled selected hidden>City</option>
                        {city.map((city, index) => (
                            <option value={ city } key={ index }>{ city }</option>
                        ))}
                        <option value="Any">Any</option>
                    </select>
                    <select 
                        name="price" 
                        onChange={ handleChange } 
                        value={ filters.price }
                        aria-label="Filter property price">
                        <option value="" disabled selected hidden>Price</option>
                        <option value="250000">&#8804; $250,000</option>
                        <option value="350000">&#8804; $350,000</option>
                        <option value="450000">&#8804; $450,000</option>
                        <option value="550000">&#8804; $550,000</option>
                        <option value="750000">&#8804; $750,000</option>
                        <option value="1000000000">Any</option>
                    </select>
                    <select 
                        name="type" 
                        onChange={ handleChange } 
                        value={ filters.type }
                        aria-label="Filter property type">
                        <option value="" disabled selected hidden>Type</option>
                        <option value="SingleFamily">Single-family</option>
                        <option value="Condo">Condo</option>
                        <option value="Townhouse">Townhouse</option>
                        <option value="Any">Any</option>
                    </select>
                    <select 
                        name="bedroom" 
                        onChange={ handleChange } 
                        value={ filters.bedroom }
                        aria-label="Filter property bedroom">
                        <option value="" disabled selected hidden>Bedroom</option>
                        <option value="1">1+ Beds</option>
                        <option value="2">2+ Beds</option>
                        <option value="3">3+ Beds</option>
                        <option value="4">4+ Beds</option>
                    </select>
                </form>
            </div>
            <main>
            <p className="results-count">{ listing.length } Results</p>
            {result.length == 0 ?
            <div>
                <p>No matching results. Clear your filters to see more homes.</p>
            </div>
            : result.map(({ slug, bed, bath, sqft, address, city, price, status, thumbnail }) => (
                <Link href={`/property/${ slug }`} key={ slug } passHref>
                    <a className="card">
                        <div className="property-card">
                            <div className="status-label">
                                <p>{ status == 'ForSale' ? 'For Sale' : status }</p>
                            </div>
                            <div className="property-image">
                                <Image 
                                    src={ thumbnail.data.attributes.url }
                                    alt="house thumbnail" 
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
    const listingData = await fetchAPI(`listings?populate=*`)

    return {
      props: {
        listingData,
      },
      revalidate: 60
    }
}