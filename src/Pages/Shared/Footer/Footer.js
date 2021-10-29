// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// import { faFacebookSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.webp'


const Footer = () => {
    return (
        <div className="bg-secondary">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-4 justify-content-center">
                        <div>
                            <img src={logo} alt="icon" />
                            <p className="text-light">Your sefty is our first priority.</p>
                        </div>
                        <div>
                            <Link to="/home" className="ps-2">
                        {/* <FontAwesomeIcon className="icon fs-3 text-info" icon={faTwitterSquare} /> */}
                            ok</Link>
                            <Link to="/home" className="ps-2">
                        {/* <FontAwesomeIcon className="icon fs-3 text-primary" icon={faFacebookSquare} /> */}
                            ok</Link>
                            <Link to="/home" className="ps-2">
                        {/* <FontAwesomeIcon className="icon fs-3 text-danger" icon={faYoutubeSquare} /> */}
                            ok
                            </Link>
                        </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4 align-self-center">
                            <h6 className="text-light ">Copyright &copy; 2021 All rights reserved</h6>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4 justify-content-center text-light">
                            <h2>Address</h2>
                            <p>1212, D-block, Green lane USA</p>
                            <p>+880 1703 075837</p>
                            <p>contact@travelo.com</p>
                        </div>
                    </div>
                </div>
            </div>
);
};

export default Footer;