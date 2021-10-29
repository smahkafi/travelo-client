import React, {useState, useEffect} from 'react';
import { Container, } from 'react-bootstrap';
import SingleService from '../SingleService/SingleService';

const OurServices = () => {
    const [services, setServices] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:5001/tours')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <h5>SEXY AND HEALTHY</h5>
            <h2>Our Services</h2>

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