import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [values, setValues] = useState({
    fullname: '',
    email: '',
    phone: '',
    message: '',
  });
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [valid, setValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState();
  const phoneRegex = new RegExp(
    /^[\+]?[0-9]{0,1}[\s]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/m
  );
  const emailRegex = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );

  function getErrors() {
    if (!values.fullname.trim()) {
      setNameError('Name required');
    } else {
      setNameError('');
    }
    if (!values.email.trim()) {
      setEmailError('Email required');
    } else if (!emailRegex.test(values.email)) {
      setEmailError('Email is invalid');
    } else {
      setEmailError('');
    }
    if (!values.phone.trim()) {
      setPhoneError('Phone required');
    } else if (!phoneRegex.test(values.phone)) {
      setPhoneError('Phone is invalid');
    } else {
      setPhoneError('');
    }
    if (!values.message.trim()) {
      setMessageError('Message required');
    } else {
      setMessageError('');
    }
  }

  function isValid() {
    getErrors();

    if (
      nameError.length === 0 &&
      emailError.length === 0 &&
      phoneError.length === 0 &&
      messageError.length === 0
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
  }

  if (typeof window !== 'undefined') {
    const errorMessages = document.getElementsByClassName('error-msg');

    if (submitted === true) {
      for (const messages of errorMessages) {
        messages.style.display = 'inline';
      }
    } else {
      for (const messages of errorMessages) {
        messages.style.display = 'none';
      }
    }
  }

  useEffect(() => {
    isValid();
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  function sendEmail(e) {
    e.preventDefault();
    setSubmitted(true);

    if (valid === true) {
      emailjs
        .sendForm(
          'service_hsc1xqn',
          'template_2fs7rgg',
          e.target,
          'user_nzqRylVoDuzQUcndDZ933'
        )
        .then(
          (result) => {
            console.log(result.text);
            setSuccess(true);
            window.setTimeout(function () {
              location.reload();
            }, 4000);
            document.getElementById('contact-form').reset();
          },
          (error) => {
            setSuccess(false);
            console.log(error.text);
          }
        );
    }
  }

  function successMessage() {
    if (success === true) {
      return (
        <div className='form-item message success-message'>
          <p>Your message has been successfully sent!</p>
        </div>
      );
    } else if (success === false) {
      return (
        <div className='form-item message error-message'>
          <p>Message not sent, please try again!</p>
        </div>
      );
    } else {
      return '';
    }
  }

  return (
    <form id='contact-form' className='contact-form-input' onSubmit={sendEmail}>
      <h2 className='get-in-touch'>Get in Touch!</h2>
      <div className='form-item'>
        <label htmlFor='fullname'>
          Full name<span className='required'>*</span>
        </label>
        <p className='error-msg'>{nameError}</p>
        <input
          type='text'
          name='fullname'
          value={values.fullname}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-item'>
        <label htmlFor='email'>
          Email<span className='required'>*</span>
        </label>
        <p className='error-msg'>{emailError}</p>
        <input
          type='email'
          name='email'
          value={values.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-item'>
        <label htmlFor='phone'>
          Phone<span className='required'>*</span>
        </label>
        <p className='error-msg'>{phoneError}</p>
        <input
          type='text'
          name='phone'
          value={values.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-item'>
        <label htmlFor='message'>
          Message<span className='required'>*</span>
        </label>
        <p className='error-msg'>{messageError}</p>
        <textarea
          name='message'
          cols='30'
          rows='5'
          value={values.message}
          onChange={handleChange}
          required
        />
      </div>
      <p className='required-notice'>
        Required fields<span className='required'>*</span>
      </p>
      {successMessage()}
      <button className='button'>Send</button>
    </form>
  );
}
