import React, { useEffect, useState } from 'react';

const ManageBookings = () => {
    const [manageBookings, setManageBookings] = useState([])

    useEffect(() => {
        fetch('http://localhost:5001/bookings')
        .then(res => res.json())
        .then(data => setManageBookings(data))
    },[])
    return (
        <div>
            <div className="row">
                {
                    manageBookings.map(managebooking => <div className="col-sm-12 col-md-6 col-lg-4" key={managebooking._id} managebooking={managebooking}>
                        <img src={managebooking.img} alt="" />
                    </div> )
                }

{/* <td>{mybooking._id}</td>
                    <td colSpan="2">{mybooking.Name}</td>
                    <td colSpan="2">{mybooking.name}</td>
                    <td>{mybooking.price}</td>
                    <td colSpan="2">{mybooking.email}</td>
                    <td>{mybooking.address}</td>
                    <td>{mybooking.city}</td>
                    <td colSpan="2">{mybooking.phone}</td>
                  </tr> */}


            </div>
        </div>
    );
};

export default ManageBookings;