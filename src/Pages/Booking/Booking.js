import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { id } = useParams();
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        fetch('http://localhost:5001/tours')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    const itemMatched = bookings?.find(booking => booking?._id === console.log(id))
    console.log(itemMatched)
    return (
        <div className="col-sm-12 col-md-12 col-lg-12 mx-auto my-5 border p-0 rounded" style={{ width: "16rem" }}>
            <div className="card mx-auto">
                {/* <img src={itemMatched?.img} className="card-img-top img-fluid rounded" alt="" /> */}
            </div>
            <div className="card-body ">
                <h4 className="card-title">{itemMatched?.name}</h4>
                <p className="card-text">{itemMatched?.price}</p>
                <div className="btn btn-primary">
                    Book Now
                </div>
            </div>
        </div>
    );
};

export default Booking;