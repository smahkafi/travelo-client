import React from 'react';
import { Button} from 'react-bootstrap';
import './HomeSubBanner.css';

const HomeSubBanner = () => {
    return ( 
        <div>
            <div className="bg-img">
                <h1 className="text-warning">Choose the Perfect Destination</h1>
                <br />
                <span className="text-white bg-primary">We can manage your dream building A small river named Duden flows by their place</span>
                <br />
                <Button className="text-dark btn-warning">Search Place</Button>
            </div>
        </div>
    );
};

export default HomeSubBanner;