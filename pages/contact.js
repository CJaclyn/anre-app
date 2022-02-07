import Link from 'next/link'
import Image from 'next/image'
import ContactForm from '../components/ContactForm'
import { Icon } from '@iconify/react';

export default function Contact () {
    return (
        <div className="page-about">
            <main>
                <div className="contact-left">
                    <h1>Andy Nguyen Real Estate</h1>
                    <div>
                        <Icon icon="clarity:phone-handset-line" color="white" />
                        <p><a href="tel:+1123456789">(123) 456-789</a></p>
                    </div>

                    <div>
                        <Icon icon="carbon:email" color="white" />
                        <p><a href = "mailto: andynguyenrealestate@gmail.com">email@email.com</a></p>
                    </div>
                </div>
                <div className="contact-form-container" data-aos="fade-up">
                    <div className="contact-form">
                        <p className="label">Get in touch</p>
                        <h1>Contact</h1>
                        <p>Send me a message and I'll get back to you as soon as possible.</p>
                        <ContactForm />
                    </div>
                </div>
            </main>
        </div>
    )
}