import React from "react";
import Card from 'react-bootstrap/Card';
import ContactForm from "../components/ContactForm";


export default function Contact() {

    return (
        <div className='container'>
            <br />
            <br />
            <Card>
                <br />
                <h1>Contact Me!</h1>
                <Card.Header>Contact Form</Card.Header>
                <br />
                {/* ContactForm Component here */}
                <ContactForm />
                <br />
            </Card>
        </div>
    );
}

