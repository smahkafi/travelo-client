import React from 'react';
import { Button } from 'react-bootstrap';
import main from '../../images/about/man-about.webp';
import img1 from "../../images/about/1.svg"
import img2 from "../../images/about/2.svg"
import img3 from "../../images/about/3.svg"
import './About.css'

const About = () => {
    return (
        <div className="container">
            <div className="row d-flex text-start">
                <div className="col-sm-12 col-md-6 col-lg-5">
                    <img src={main} className="img-fluid" alt="about" />
                </div>
                <div className="mt-3 col-sm-12 col-md-6 col-lg-7 align-self-center bg-dark ">
                    <h4 className="text-warning">GET IN TOUCH WITH US</h4>
                    <h2 className="text-warning">Get Best Travel Deals</h2>
                    <p className="about-content text-muted">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. <br />
                        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. <br />
                        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

                    <Button className="py-3 bg-warning">Book Now</Button><Button className="py-3 bg-secondary ms-3">Contact Us</Button>
                </div>
            </div>
            <div className="row d-flex mt-5">
                <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
                    <div className="row d-flex">
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <h2>320</h2>
                            <p>Tour has done successfully</p>
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <h2>36</h2>
                            <p>Yearly tour arrange</p>
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <h2>3698</h2>
                            <p>Happy Clients</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <h2>Our Story</h2>
                    <p className="about-content">Consulting represents success at realizing the company is going in the wrong direction. The only time the company fails is when it is not possible to do a turnaround anymore. We help companies pivot into more profitable directions where they can expand and grow. It is inevitable that companies will end up making a few mistakes; we help them correct these mistakes.Consulting represents success at realizing the company is going in the wrong direction. The only time the company fails is when it is not possible to do a turnaround anymore. We help companies pivot into more profitable directions where they can expand and grow. It is inevitable that companies will end up making a few mistakes; we help them correct these mistakes.</p>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-sm-12 col-md-12 col-lg-4">
                    <div>
                        <img src={img1} alt="" />
                    </div>
                    <div>
                        <h2>Comfortable Journey</h2>
                        <p>A wonderful serenity has taken to the possession of my entire soul.</p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                    <div>
                        <img src={img2} alt="" />
                    </div>
                    <div>
                        <h2>Comfortable Journey</h2>
                        <p>A wonderful serenity has taken to the possession of my entire soul.</p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                    <div>
                        <img src={img3} alt="" />
                    </div>
                    <div>
                        <h2>Comfortable Journey</h2>
                        <p>A wonderful serenity has taken to the possession of my entire soul.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;