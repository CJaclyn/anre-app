import ContactForm from '../../components/ContactForm';
import { Icon } from '@iconify/react';
import { fetchAPI } from '../../lib/api';
import ImageGallery from 'react-image-gallery';
import PageHead from '../../components/PageHead';

export default function Property({ listingData, listingImages }) {
  const listing = listingData['data'][0].attributes;

  function getImages() {
    if (listing.image.data !== null) {
      const images = listingImages['data'][0].attributes.photos['data'];
      let slideshow = [];

      for (let i in images) {
        const image = images[i].attributes.url;
        slideshow[i] = {
          original: image,
          thumbnail: image,
        };
      }

      (function getThumbnail() {
        const thumbnail = listing.thumbnail.data.attributes.url;
        slideshow.unshift({
          original: thumbnail,
          thumbnail: thumbnail,
        });
      })();
    } else {
      var slideshow = [];
      const thumbnail = listing.thumbnail.data.attributes.url;
      slideshow = [
        {
          original: thumbnail,
          thumbnail: thumbnail,
        },
      ];
    }

    return slideshow;
  }

  return (
    <div className='page-property'>
      <PageHead
        title={`${listing.address}, ${listing.city}, MN ${listing.zipcode} | Andy Nguyen Real Estate`}
        description={listing.description}
      />
      <main>
        <header className='property-images'>
          <ImageGallery items={getImages()} />
        </header>
        <div className='main-container'>
          <div className='property-information'>
            <div className='property-intro'>
              <p className='label'>
                {listing.status === 'ForSale' ? 'For Sale' : listing.status}
              </p>
              <h1 className='address'>
                {listing.address}, {listing.city}, MN {listing.zipcode}
              </h1>
              <p className='description'>
                {listing.description === null
                  ? 'No description available.'
                  : listing.description}
              </p>
            </div>
            <div className='property-facts'>
              <h2>Property Details</h2>
              <div className='facts'>
                <div className='fact'>
                  <Icon icon='bi:house-door' />
                  <p>
                    {listing.type === 'SingleFamily'
                      ? 'Single-family'
                      : listing.type}
                  </p>
                </div>
                <div className='fact'>
                  <Icon icon='gis:square-pt' />
                  <p>{listing.sqft} sqft</p>
                </div>
                <div className='fact'>
                  <Icon icon='bx:bx-bed' />
                  <p>{listing.bed} bed</p>
                </div>
                <div className='fact'>
                  <Icon icon='bx:bx-bath' />
                  <p>{listing.bath} bath</p>
                </div>
                <div className='fact'>
                  <Icon icon='ri:parking-box-line' />
                  <p>{listing.garage} car garage</p>
                </div>
                <div className='fact'>
                  <Icon icon='ic:outline-date-range' />
                  <p>Built {listing.yearBuilt}</p>
                </div>
              </div>
            </div>
          </div>
          {listing.status === 'ForSale' ? (
            <aside className='contact-form' data-aos='fade-up'>
              <div className='contact-form-top'>
                <h2>Interested in this Property?</h2>
                <p>Request additional information or schedule a tour.</p>
              </div>
              <ContactForm />
            </aside>
          ) : (
            ''
          )}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const listingData = await fetchAPI(
    `listings?filters[slug][$eq]=${params.slug}&populate=*`
  );
  const listingImages = await fetchAPI(
    `images??filters[slug][$eq]=${params.slug}&populate=*`
  );

  return {
    props: {
      listingData,
      listingImages,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const listingData = await fetchAPI(`listings?populate=*`);
  const listings = listingData['data'];
  const listing = [];

  for (let i in listings) {
    listing.push(listings[i].attributes);
  }

  return {
    paths: listing.map(({ slug }) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: 'blocking',
  };
}
