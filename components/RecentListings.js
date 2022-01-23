import Link from 'next/link'
import Image from 'next/image'

export default function RecentListings () {
    return (
        <section className="recent-listings">
          <h1>Recent Properties</h1>
          <div className="recent-listings-container house-1">
            <div className="recent-listing-container">
              <div className="recent-listing-img">
                <Link href="/">
                  <a>
                    <Image src="/house.jpeg" alt="house" layout="fill" />
                  </a>
                </Link>
              </div>
              <div className="recent-listing-info">
                <div className="address"><h2>12345 Peony St., Garden Grove</h2></div>
                <div className="recent-listing-desc">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Minima illo ut obcaecati quam voluptatibus deserunt sed libero, 
                    tempora quisquam impedit...
                  </p>
                </div>
                <Link href="/">
                  <a className="basic-link">See more details</a>
                </Link>    
              </div>
            </div>  
          </div>
          <div className="recent-listings-container house-2">
            <div className="recent-listing-container">
              <div className="recent-listing-img">
                <Link href="/">
                  <a>
                    <Image src="/house2.jpg" alt="house" layout="fill" />
                  </a>
                </Link>
              </div>
              <div className="recent-listing-info">
                <div className="address"><h2>5432 Sunflower Lane, Garden Grove</h2></div>
                <div className="recent-listing-desc">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Minima illo ut obcaecati quam voluptatibus deserunt sed libero, 
                    tempora quisquam impedit...
                  </p>
                </div>
                <Link href="/">
                  <a className="basic-link">See more details</a>
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