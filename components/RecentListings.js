import Link from 'next/link'
import Image from 'next/image'

export default function RecentListings () {

    return (
        <section className="recent-listings" data-aos="fade-in">
          <h1>Recent Properties</h1>
          <div className="recent-listings-container house-1">
            <div className="recent-listing-container">
              <div className="recent-listing-img" data-aos="flip-left" data-aos-duration="1500">
                <Link href="/">
                  <a>
                    <Image src="/house.jpeg" alt="house" layout="fill"/>
                  </a>
                </Link>
              </div>
              <div className="recent-listing-info" data-aos="fade-in" >
                <p className="label">Single-family Home</p>
                <h2 className="address">12345 Peony St., Garden Grove</h2>
                <p className="details">1093 sqft · 2 bed · 1.5 bath</p>
                <p className="recent-listing-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                  Minima illo ut obcaecati quam voluptatibus deserunt sed libero, 
                  tempora quisquam impedit...
                </p>
                <Link href="/">
                  <a className="basic-link">View house</a>
                </Link>    
              </div>
            </div>  
          </div>
          <div className="recent-listings-container house-2">
            <div className="recent-listing-container">
              <div className="recent-listing-img" data-aos="flip-right" data-aos-duration="1500">
                <Link href="/">
                  <a>
                    <Image src="/house2.jpg" alt="house" layout="fill" />
                  </a>
                </Link>
              </div>
              <div className="recent-listing-info" data-aos="fade-in" >
                <p className="label">Single-family Home</p>
                <h2 className="address">12345 Peony St., Garden Grove</h2>
                <p className="details">1093 sqft · 2 bed · 1.5 bath</p>
                <p className="recent-listing-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                  Minima illo ut obcaecati quam voluptatibus deserunt sed libero, 
                  tempora quisquam impedit...
                </p>
                <Link href="/">
                  <a className="basic-link">View house</a>   
                </Link>
              </div>
            </div>  
          </div>
          <Link href="/properties">
            <a className="button">All Properties</a>
          </Link>    
        </section>
    )
}