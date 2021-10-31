import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import './ManageBookings.css'

const ManageBookings = () => {
  const [manageBookings, setManageBookings] = useState([]);
  const [confirmation, setConfirmation] = useState(true)

  useEffect(() => {
    fetch("https://frightful-wizard-42893.herokuapp.com/bookings")
      .then((res) => res.json())
      .then((data) => setManageBookings(data));
  }, [confirmation]);


//confirm
const handleConfirmation = id => {
  const confirm = window.confirm('Are you sure?')
  if (confirm) {
      fetch(`https://frightful-wizard-42893.herokuapp.com/bookings/${id}`, {
          method: 'PUT',
      })
          .then(res => res.json())
          .then(data => {
              if (data.modifiedCount === 1) {
                  alert('Your Booking Confirmed, Thanks!');
                  setConfirmation(!confirm);
              }
          })
  }
}

  const handleRemove = id => {
    const proceed = window.confirm('Are you sure remove your Booking?');
    if (proceed) {
        const url = `https://frightful-wizard-42893.herokuapp.com/bookings/${id}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Remove Booking Successfully')
                    const remaining = manageBookings.filter(manageBooking => manageBooking._id !== id);
                    setManageBookings(remaining);
                }
            });
    }
}

  return (
    <div className="container">
      <div className="row mx-auto">
        {manageBookings.map((managebooking) => (
          <div
            className="col-sm-12 col-md-6 col-lg-4 text-start mx-auto"
            key={managebooking._id}
            managebooking={managebooking}
          >
            {/* card start here */}
            <div class="card" style={{width: "18rem"}}>
              <div>
                <img src={managebooking.img} class="card-img-top single-service-img" alt="Tour Place"/>
              </div>
              <div class="card-body">
              <h2 class="card-title">{managebooking.name}</h2>
                <h6 class="card-title">Placer: {managebooking.Name}</h6>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Cost: $ {managebooking.price}</li>
                <li class="list-group-item">Placer Email: {managebooking.email}</li>
                <li class="list-group-item">Address: {managebooking.address}, {managebooking.city}</li>
                <li class="list-group-item">Phone: {managebooking.phone}</li>
              </ul>
              <div class="card-body d-flex justify-content-around">
                <Button className="bg-danger" onClick={() => handleRemove(managebooking._id)}>REMOVE</Button>
                <Button className="bg-success" onClick={() => handleConfirmation(managebooking._id)}>CONFIRM</Button>
              </div>
            </div>
            {/* card end here  */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageBookings;
