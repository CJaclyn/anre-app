import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function Properties() {
    return (
        <div className="page-properties">
            <Head>
                <title>Properties | Andy Nguyen Real Estate</title>
                <meta name="description" content="Andy Nguyen real estate agent in Minnesota" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <h1>Properties</h1>
            </header>
            <main data-aos="fade-in">
                <Link href="/property/test">
                    <a className="card">
                        <div className="property-card">
                            <div className="property-image">
                                <Image 
                                    src="/clients/client.jpg"
                                    alt="" 
                                    layout="fill"
                                />
                            </div>
                            <div className="property-info">
                                <div className="property-top">
                                    <p className="price">$100,000</p>
                                    <p className="address">12345 Peony St., Garden Grove </p>
                                </div>
                                <div className="property-bottom">
                                    <div className="sqft info">
                                        <Icon icon="gis:square-pt" />
                                        <p>1234 sqft</p>
                                    </div>
                                    <div className="bed info">
                                        <Icon icon="bx:bx-bed" />
                                        <p>2 bed</p>
                                    </div>
                                    <div className="bath info">
                                        <Icon icon="bx:bx-bath" />
                                        <p>2 bath</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </Link>

                <div className="property-card">
                    <div className="property-image">
                        <Image 
                            src="/clients/client.jpg"
                            alt="" 
                            layout="fill"
                        />
                    </div>
                    <div className="property-info">
                        <div className="property-top">
                            <p className="price">$100,000</p>
                            <p className="address">12345 Peony St., Garden Grove </p>
                        </div>
                        <div className="property-bottom">
                            <div className="sqft info">
                                <Icon icon="gis:square-pt" />
                                <p>1234 sqft</p>
                            </div>
                            <div className="bed info">
                                <Icon icon="bx:bx-bed" />
                                <p>2 bed</p>
                            </div>
                            <div className="bath info">
                                <Icon icon="bx:bx-bath" />
                                <p>2 bath</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="property-card">
                    <div className="property-image">
                        <Image 
                            src="/clients/client.jpg"
                            alt="" 
                            layout="fill"
                        />
                    </div>
                    <div className="property-info">
                        <div className="property-top">
                            <p className="price">$100,000</p>
                            <p className="address">12345 Peony St., Garden Grove </p>
                        </div>
                        <div className="property-bottom">
                            <div className="sqft info">
                                <Icon icon="gis:square-pt" />
                                <p>1234 sqft</p>
                            </div>
                            <div className="bed info">
                                <Icon icon="bx:bx-bed" />
                                <p>2 bed</p>
                            </div>
                            <div className="bath info">
                                <Icon icon="bx:bx-bath" />
                                <p>2 bath</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="property-card">
                    <div className="property-image">
                        <Image 
                            src="/clients/client.jpg"
                            alt="" 
                            layout="fill"
                        />
                    </div>
                    <div className="property-info">
                        <div className="property-top">
                            <p className="price">$100,000</p>
                            <p className="address">12345 Peony St., Garden Grove </p>
                        </div>
                        <div className="property-bottom">
                            <div className="sqft info">
                                <Icon icon="gis:square-pt" />
                                <p>1234 sqft</p>
                            </div>
                            <div className="bed info">
                                <Icon icon="bx:bx-bed" />
                                <p>2 bed</p>
                            </div>
                            <div className="bath info">
                                <Icon icon="bx:bx-bath" />
                                <p>2 bath</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}