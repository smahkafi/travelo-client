// import { faBuilding, faEnvelope, faTty } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import './GetTouch.css'

const GetTouch = () => {
    return (
        <div className="container">
            <div className="row mt-5">
                <h2>Get in Touch</h2>
                <div className="col-sm-12 col-md-8 col-lg-8 ">
                <textarea class=" w-100" name="message" id="message" cols="30" rows="9" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" placeholder="Enter Message"></textarea><br />
                    <br />
                    <input class="form-control valid" name="name" id="name" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Enter your name"/><br />
                    <input class="form-control valid" name="email" id="email" type="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" placeholder="Email"/>
                    <br />
                    <input class="form-control" name="subject" id="subject" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" placeholder="Enter Subject"/> <br />
                    <Button type="submit" class="button button-contactForm boxed-btn m-5">Send</Button>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 align-self-center text-start">
                    <div className="d-flex">
                        <div className="col-sm-2 col-md-6 col-lg-6 align-self-center">
                        {/* <FontAwesomeIcon className="icon fs-3 text-danger" icon={faBuilding}/> */}
                        </div>
                        <div className="col-sm-10 col-md-6 col-lg-10">
                        <h4>Buttonwood, California</h4>
                        <p>Rosemead, CA 91770</p>
                        </div>
                    </div> <hr />
                    <div className="d-flex">
                        <div className="col-sm-2 col-md-6 col-lg-6 align-self-center">
                        {/* <FontAwesomeIcon className="icon fs-3 text-danger" icon={faTty}/> */}
                        </div>
                        <div className="col-sm-10 col-md-6 col-lg-10">
                        <h4>+1 253 565 2365</h4>
                        <p>Mon to Fri 9am to 6pm</p>
                        </div>
                        
                    </div> <hr />
                    <div className="d-flex">
                        <div className="col-sm-2 col-md-6 col-lg-6 align-self-center">
                            {/* <FontAwesomeIcon className="icon fs-3 text-danger" icon={faEnvelope}/> */}
                        </div>
                        <div className="col-sm-10 col-md-6 col-lg-10">
                            <h4>support@travelo.com</h4>
                            <p>Send us your query anytime!</p>
                        </div>
                    </div> <hr />
                </div>
            </div>
        </div>
    );
};

export default GetTouch;