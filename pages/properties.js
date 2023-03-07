import { useState } from 'react';
import PageHead from '../components/PageHead';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { fetchAPI } from '../lib/api';
import { replaceChar } from '../functions.js';

export default function Properties({ listingData }) {
  const [filters, setFilters] = useState({
    status: 'All',
    city: 'Any',
    price: '1000000000',
    type: 'Any',
    bedroom: '1',
  });
  let listingsArr = [];

  (function getListings() {
    const listings = listingData['data'];

    for (let listing of listings) {
      listingsArr.push(listing.attributes);
    }
  })();

  function getCities() {
    let citiesArr = [];

    for (let listing of listingsArr) {
      let city = listing.city.toLowerCase();
      const firstLetter = city[0].toUpperCase();
      const indexAfterSpace = city.indexOf(' ') + 1;
      const letterAfterSpace = city[indexAfterSpace].toUpperCase();
      city = replaceChar(city, 0, firstLetter);
      city = replaceChar(city, indexAfterSpace, letterAfterSpace);
      citiesArr.push(city);
    }

    return [...new Set(citiesArr)];
  }

  //set filter values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  (function filtering() {
    if (filters.status && filters.status != 'All') {
      const status = filters.status;
      listingsArr = listingsArr.filter((listing) => listing.status === status);
    }

    if (filters.city && filters.city != 'Any') {
      const city = filters.city;

      listingsArr = listingsArr.filter(
        (listing) => listing.city.toUpperCase() === city.toUpperCase()
      );
    }

    if (filters.price) {
      const price = filters.price;
      listingsArr = listingsArr.filter((listing) => listing.price <= price);
    }

    if (filters.type && filters.type != 'Any') {
      const type = filters.type;
      listingsArr = listingsArr.filter((listing) => listing.type === type);
    }

    if (filters.bedroom) {
      const bed = filters.bedroom;
      listingsArr = listingsArr.filter((listing) => listing.bed >= bed);
    }

    return listingsArr;
  })();

  function resetFilters() {
    setFilters({
      status: 'All',
      city: 'Any',
      price: '1000000000',
      type: 'Any',
      bedroom: '1',
    });

    return listingsArr;
  }

  return (
    <div className='page-properties'>
      <PageHead
        title='Homes for Sale in Minnesota | Andy Nguyen Real Estate'
        description='Homes for sale in Minnesota with Andy Nguyen Real Estate.'
      />

      <header>
        <h1>Properties</h1>
        <div className='background'></div>
      </header>
      <div className='filters'>
        <form>
          <div className='filter-item'>
            <label htmlFor='status'>Status</label>
            <select
              name='status'
              onChange={handleChange}
              value={filters.status}
              aria-label='Filter property status'
            >
              <option value='ForSale'>For sale</option>
              <option value='Sold'>Sold</option>
              <option value='All' defaultValue>
                All
              </option>
            </select>
          </div>
          <div className='filter-item'>
            <label htmlFor='city'>City</label>
            <select
              name='city'
              onChange={handleChange}
              value={filters.city}
              aria-label='Filter property city'
            >
              {getCities().map((city, index) => (
                <option value={city} key={index}>
                  {city}
                </option>
              ))}
              <option value='Any' defaultValue>
                Any
              </option>
            </select>
          </div>
          <div className='filter-item'>
            <label htmlFor='price'>Price</label>
            <select
              name='price'
              onChange={handleChange}
              value={filters.price}
              aria-label='Filter property price'
            >
              <option value='250000'>&#8804; $250,000</option>
              <option value='350000'>&#8804; $350,000</option>
              <option value='450000'>&#8804; $450,000</option>
              <option value='550000'>&#8804; $550,000</option>
              <option value='750000'>&#8804; $750,000</option>
              <option value='1000000000' defaultValue>
                Any
              </option>
            </select>
          </div>
          <div className='filter-item'>
            <label htmlFor='type'>Type</label>
            <select
              name='type'
              onChange={handleChange}
              value={filters.type}
              aria-label='Filter property type'
            >
              <option value='SingleFamily'>Single-family</option>
              <option value='Condo'>Condo</option>
              <option value='Townhouse'>Townhouse</option>
              <option value='Any' defaultValue>
                Any
              </option>
            </select>
          </div>
          <div className='filter-item'>
            <label htmlFor='bedroom'>Bed</label>
            <select
              name='bedroom'
              onChange={handleChange}
              value={filters.bedroom}
              aria-label='Filter property bedroom'
            >
              <option value='1' defaultValue>
                1+ Beds
              </option>
              <option value='2'>2+ Beds</option>
              <option value='3'>3+ Beds</option>
              <option value='4'>4+ Beds</option>
            </select>
          </div>
          <div className='filter-item'>
            <a className='button' onClick={resetFilters}>
              Reset filters
            </a>
          </div>
        </form>
      </div>
      <main>
        <p className='results-count'>{listingsArr.length} Results</p>
        {listingsArr.length === 0 ? (
          <div>
            <p>
              No matching results. Change or reset the filters to see more
              homes.
            </p>
          </div>
        ) : (
          listingsArr.map(
            ({
              slug,
              bed,
              bath,
              sqft,
              address,
              city,
              zipcode,
              price,
              status,
              thumbnail,
            }) => (
              <Link href={`/property/${slug}`} key={slug} passHref>
                <a className='card'>
                  <div className='property-card'>
                    <div className='status-label'>
                      <p>{status === 'ForSale' ? 'For Sale' : status}</p>
                    </div>
                    <div className='property-image'>
                      <Image
                        src={thumbnail.data.attributes.url}
                        alt='house thumbnail'
                        layout='fill'
                      />
                    </div>
                    <div className='property-info'>
                      <div className='property-top'>
                        <p className='price'>${price.toLocaleString()}</p>
                        <p className='address'>
                          {address}
                          <span className='address-bottom'>
                            {city}, MN {zipcode}
                          </span>
                        </p>
                      </div>
                      <div className='property-bottom'>
                        <div className='sqft info'>
                          <Icon icon='gis:square-pt' />
                          <p>{sqft.toLocaleString()} sqft</p>
                        </div>
                        <div className='bed info'>
                          <Icon icon='bx:bx-bed' />
                          <p>{bed} bed</p>
                        </div>
                        <div className='bath info'>
                          <Icon icon='bx:bx-bath' />
                          <p>{bath} bath</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            )
          )
        )}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  var qs = require('qs');

  const query = qs.stringify(
    {
      sort: ['id:desc'], //sort[0]=id:desc
      populate: '*', //populate=*
    },
    {
      encodeValuesOnly: true,
    }
  );

  const listingData = await fetchAPI(`listings?${query}`);

  return {
    props: {
      listingData,
    },
    revalidate: 60,
  };
}
