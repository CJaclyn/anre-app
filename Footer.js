import Link from 'next/link'
import Image from 'next/image'

export default function Footer () {
    return (
        <footer>
            <div className="footer-top section">
                <div className="logos sub-section">
                    <div className="footer-logo">
                        <Image 
                            src="/andy_nguyen_real_estate_logo.svg" 
                            alt="andy nguyen real estate logo"
                            layout="fill"
                        />
                    </div>
                    <div className="footer-logo">
                        <Image 
                            src="/realty-group-logo.png" 
                            alt="realty group logo"
                            layout="fill"
                        /> 
                    </div>
                </div>
                <nav className="sitemap sub-section">
                    <h3>Sitemap</h3>
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/properties"><a>Properties</a></Link>
                    <Link href="/about"><a>About</a></Link>
                    <Link href="/contact"><a>Contact</a></Link>
                </nav>
                <div className="contact-info sub-section">
                    <h3>Contact</h3>
                    <p>Andy Nguyen Real Estate Inc.</p>
                    <p><a href="tel:+1123456789">(123) 456-789</a></p>
                    <p><a href = "mailto: andynguyenrealestate@gmail.com">andynguyenrealestate@gmail.com</a></p>
                </div>
            </div>
            <div className="footer-bottom section">
                <p><a   
                    href="https://www.facebook.com/pages/category/Real-Estate-Agent/Andy-Nguyen-Real-Estate-Inc-102133454501876/"
                    target="_blank"
                    rel="noreferrer">Facebook
                </a></p>
                <p>Privacy Policy</p>
                <p>©2022 Andy Nguyen Real Estate Inc.</p>
            </div>
        </footer>
    )
}