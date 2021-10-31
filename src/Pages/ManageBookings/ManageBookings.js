import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

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
        const url = `https://frightful-wizard-42893.herokuapp.com/${id}`;
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
    <div>
      <div className="row">
        {manageBookings.map((managebooking) => (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={managebooking._id}
            managebooking={managebooking}
          >
            <div>
              <img src={managebooking.img} alt="" />
            </div>
            <div>
              <h2>{managebooking.Name}</h2>
              <p>{managebooking.name}</p>
              <p>{managebooking.price}</p>
              <p>{managebooking.email}</p>
              <p>{managebooking.address}</p>
              <p>{managebooking.city}</p>
              <p>{managebooking.phone}</p>
            </div>
            <Button onClick={() => handleRemove(managebooking._id)}>Remove</Button>
            <Button onClick={() => handleConfirmation(managebooking._id)}>confirm</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageBookings;
