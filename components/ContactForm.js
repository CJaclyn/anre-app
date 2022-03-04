import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm () {
    const [values, setValues] = useState({
        fullname: '',
        email: '',
        phone: '',
        message: '',
    });
    const [error, setError] = useState(true);
    const [success, setSuccess] = useState();
    const phoneRegex = new RegExp(/^[\+]?[0-9]{0,1}[\s]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/m);
    const emailRegex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    const errors = {};

    function errorChecking() {
        if(!values.fullname.trim()) {
            errors.fullname = "Name required";
        }else {
            errors.fullname = "";
        }
        if(!values.email.trim()) {
            errors.email = "Email required";
        }else if(!emailRegex.test(values.email)) {
            errors.email = "Email is invalid";
        }else {
            errors.email = "";
        }
        if(!values.phone.trim()) {
            errors.phone = "Phone required";
        }else if(!phoneRegex.test(values.phone)) {
            errors.phone = "Phone is invalid";
        }else {
            errors.phone = ""
        }
        if(!values.message.trim()) {
            errors.message = "Message required";
        }else {
            errors.message = "";
        }
        
        return errors;
    }

    errorChecking();

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        });
    }

    useEffect(() => {
        if(errors.fullname == "" && errors.email == "" && errors.phone == "" && errors.message == "") {
            setError(false);
        }else {
            setError(true);
        }
    });

    function sendEmail(e) {
        e.preventDefault();

        if(error == false) {
            emailjs.sendForm('service_hsc1xqn', 'template_2fs7rgg', e.target, 'user_nzqRylVoDuzQUcndDZ933')
            .then((result) => {
                console.log(result.text);
                setSuccess(true);
                window.setTimeout(function(){location.reload()},4000)
                document.getElementById("contact-form").reset();
            }, (error) => {
                setSuccess(false);
                console.log(error.text);
          });
        }
    }

    function successMessage() {
        if(success == true) {
            return  <div className="form-item success-message">
                        <p>Your message has been successfully sent!</p>
                    </div>
        }else if(success == false) {
            return  <div className="form-item success-message">
                        <p>Message not sent, please try again!</p>
                    </div>
        }else {
            return ""
        }
    }

    return (
        <form id="contact-form" className="contact-form-input" onSubmit={ sendEmail }>
            <div className="form-item">
                <label htmlFor="fullname">Full name</label>
                <input 
                    type="text" 
                    name="fullname" 
                    value={ values.fullname } 
                    onChange={ handleChange } 
                    required />
                <p className="error-msg">{ errors.fullname }</p>
            </div>
            <div className="form-item">
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    value={ values.email } 
                    onChange={ handleChange } 
                    required />
                <p className="error-msg">{ errors.email }</p>
            </div>
            <div className="form-item">
                <label htmlFor="phone">Phone</label>
                <input 
                    type="text" 
                    name="phone" 
                    value={ values.phone } 
                    onChange={ handleChange } 
                    required />
                <p className="error-msg">{ errors.phone }</p>
            </div>
            <div className="form-item">
                <label htmlFor="message">Message</label>
                <textarea 
                    name="message" 
                    cols="30" 
                    rows="5" 
                    value={ values.message } 
                    onChange={ handleChange } 
                    required />
                <p className="error-msg">{ errors.message }</p>
            </div>
            { successMessage() }
            <button className="button">Send</button>
        </form>
    )
}