import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { validateEmail } from '../utils/helper';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../App.css';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
    const [formMessage, setFormMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setFormMessage('Please enter a valid email address.');
            } else {
                setFormMessage('');
            }
        } else {
            if (!e.target.value.length) {
                const name = e.target.name;
                setFormMessage(`${name.charAt(0).toUpperCase() + name.slice(1)} is required to continue.`);
            } else {
                setFormMessage('');
            }
        }

        if (!formMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_87yn8jm', 'template_zbpus4u', '#contactForm', 'user_pj9d0JHvpvftSDoby')
        .then(function(response) {
            console.log(response.text);
            setFormMessage("Message sent!");
          }, function(error) {
            console.log(error.text);
            setFormMessage("There was a problem sending your email. Please email Kyle directly at kryst.kyle@gmail.com");
          });
    }

    return (
        <Form onSubmit={sendEmail} id="contactForm">
          <Form.Group controlId="name">
            <Form.Label>Your Name</Form.Label>
            <Form.Control required name="name" placeholder="Your Full Name" onBlur={handleChange} />
          </Form.Group>
    
          <Form.Group controlId="email">
            <Form.Label>Your Email</Form.Label>
            <Form.Control required name="email" type="email" placeholder="email@email.com"  onBlur={handleChange} />
          </Form.Group>
    
          <Form.Group controlId="subject">
            <Form.Label>Subject</Form.Label>
            <Form.Control required name="subject" placeholder="Subject" onBlur={handleChange} />
          </Form.Group>
    
          <Form.Group controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control required name="message" as="textarea" rows="5" placeholder="Type your message here" onBlur={handleChange} />
          </Form.Group>
    
          {formMessage && <p className="form-message">{formMessage}</p>}
    
          <Button type="submit" className='btn'>Submit</Button>
        </Form>
      )
}

export default ContactForm;
