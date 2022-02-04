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
                <div className="contact-form-container" data-aos="fade-in">
                    <div className="contact-form">
                        <p className="label">Find Your New Home</p>
                        <h1>Contact</h1>
                        <p>Send a message and I will quickly get in touch!</p>
                        <ContactForm />
                    </div>
                </div>
            </main>
        </div>
    )
}