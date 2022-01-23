import Image from 'next/image'
import Head from 'next/head'
import ContactForm from '../../components/ContactForm'
import { Icon } from '@iconify/react';

export default function Property () {
    return (
        <div className="page-property">
            <Head>
                <title>Property | Andy Nguyen Real Estate</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="property-images">
                    <Image src="/house2.jpg" alt="house" layout="fill" />
                </div>
                <div className="main-container" data-aos="fade-in">
                    <div className="property-information">
                        <div className="property-intro">
                            <p className="label">FOR SALE</p>
                            <h1 className="address">12345 Peony St., Garden Grove, MN 55101</h1>
                            <p className="description">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Itaque voluptatem ipsum numquam et sit. Quisquam, quidem omnis? 
                                Asperiores veniam placeat nobis assumenda provident, quo, rerum 
                                officia eum soluta unde recusandae.
                            </p>
                        </div>
                        <div className="property-facts">
                            <h2>Property Details</h2>
                            <div className="facts">
                                <div className="fact">
                                    <Icon icon="bi:house-door" />
                                    <p>Single-family</p>
                                </div>
                                <div className="fact">
                                    <Icon icon="gis:square-pt" />
                                    <p>1234 sqft</p>
                                </div>
                                <div className="fact">
                                    <Icon icon="bx:bx-bed" />
                                    <p>2 bed</p>
                                </div>
                                <div className="fact">
                                    <Icon icon="bx:bx-bath" />
                                    <p>2 bath</p>
                                </div>
                                <div className="fact">
                                    <Icon icon="ri:parking-box-line" />
                                    <p>2 car garage</p>
                                </div>
                                <div className="fact">
                                    <Icon icon="ic:outline-date-range" />
                                    <p>Built 2001</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </main>
        </div>
    )
}