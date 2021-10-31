import React, { useEffect, useState } from "react";

const ManageBookings = () => {
  const [manageBookings, setManageBookings] = useState([]);

  useEffect(() => {
    fetch("https://frightful-wizard-42893.herokuapp.com/bookings")
      .then((res) => res.json())
      .then((data) => setManageBookings(data));
  }, []);
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageBookings;
