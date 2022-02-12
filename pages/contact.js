import Link from 'next/link'
import Image from 'next/image'
import ContactForm from '../components/ContactForm'
import { Icon } from '@iconify/react'
import HeaderNav from '../components/HeaderNav'

export default function Contact () {
    return (
        <div className="page-contact">
            <header>
                <h1>Contact</h1>
                <div className="background"></div>
                <HeaderNav />
            </header>
            <main>
                <div className="contact-form-container" data-aos="fade-up">
                    <div className="contact-form">
                        <h1>Get in touch</h1>
                        <p>Send me a message and I&apos;ll get back to you as soon as possible.</p>
                        <ContactForm />
                    </div>
                </div>
            </main>
        </div>
    )
}