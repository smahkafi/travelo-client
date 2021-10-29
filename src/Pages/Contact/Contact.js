import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css'
import GetTouch from './GetTouch/GetTouch';

const Contact = () => {
    return (
        <div id="contact" className="contact">
            <Container>
                <GetTouch></GetTouch>
            </Container>
        </div>
    );
};

export default Contact;