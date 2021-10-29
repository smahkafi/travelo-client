import React from 'react';
import { Button} from 'react-bootstrap';
import './HomeSubBanner.css';

const HomeSubBanner = () => {
    return ( 
        <div>
            <div className="bg-img">
                <h2 className="text-white">Choose the Perfect Destination</h2>
                <p className="text-white">We can manage your dream building A small river named Duden flows by their place</p>
                <Button className="text-white">Search Place</Button>
            </div>
        </div>
    );
};

export default HomeSubBanner;