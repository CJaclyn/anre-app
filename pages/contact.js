import ContactForm from '../components/ContactForm';
import { Icon } from '@iconify/react';
import PageHead from '../components/PageHead';

export default function Contact() {
  return (
    <div className='page-contact'>
      <PageHead
        title='Contact | Andy Nguyen Real Estate'
        description='Contact Andy Nguyen Real Estate with any of your real estate needs or questions.'
      />
      <main>
        <div className='contact-container'>
          <div className='contact-left'>
            <div className='background'></div>
            <div className='contact-left-container'>
              <h1>Let&apos;s work together.</h1>
              <p>
                Send me a message and I&apos;ll get back to you as soon as
                possible.
              </p>
              <div className='contact-info'>
                <div className='item'>
                  <Icon icon='akar-icons:phone' color='white' />
                  <a href='tel:+16513594137'>(651) 359-4137</a>
                </div>
                <div className='item'>
                  <Icon icon='carbon:email' color='white' />
                  <a href='mailto:andynguyenrealestate@gmail.com'>
                    andynguyenrealestate@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='contact-right' data-aos='fade-up'>
            <div className='contact-form'>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
