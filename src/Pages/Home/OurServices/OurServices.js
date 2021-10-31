import React, {useState, useEffect} from 'react';
import { Container, } from 'react-bootstrap';
import SingleService from '../SingleService/SingleService';

const OurServices = () => {
    const [services, setServices] = useState([])
    
    useEffect(() => {
        fetch('https://frightful-wizard-42893.herokuapp.com/tours')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="mt-5 ">
            <h5>SEXY AND HEALTHY</h5>
            <br />
            <h2>Our Packages</h2>

            <Container>
                <div className="row d-flex">
                    {
                        services.map(service => <SingleService key={service._id} service={service}></SingleService>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default OurServices;