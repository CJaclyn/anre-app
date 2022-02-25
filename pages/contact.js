import Link from 'next/link'
import Image from 'next/image'
import ContactForm from '../components/ContactForm'
import { Icon } from '@iconify/react'
import HeaderNav from '../components/HeaderNav'
import Head from 'next/head'

export default function Contact () {
    return (
        <div className="page-contact">
            <Head>
                <title>Contact | Andy Nguyen Real Estate</title>
                <meta name="description" content="Contact Andy Nguyen Real Estate" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <HeaderNav />
            </header>
            <main>
                <div className="background"></div>
                <div className="contact-container">
                    <div className="contact-left">
                        <div className="contact-left-container">
                            <h1>Let's work together.</h1>
                            <p>Send me a message and I&apos;ll get back to you as soon as possible.</p>
                            <div className="contact-info">
                                <div className="item">
                                    <Icon icon="akar-icons:phone" color="white" />
                                    <a href="tel:+4733378901">(123) 123-1234</a>
                                </div>
                                <div className="item">
                                    <Icon icon="carbon:email" color="white" />
                                    <a href="mailto:andynguyenrealestate@gmail.com">andynguyenrealestate@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form-container" data-aos="fade-up">
                        <div className="contact-form">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}