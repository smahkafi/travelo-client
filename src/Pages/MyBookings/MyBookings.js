import { faCheckCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
// import "./Booking.css";

//manage order
const Booking = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("https://frightful-wizard-42893.herokuapp.com/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  console.log(bookings);

  //   to delete
  const deleteId = (id) => {
    const proceed = window.confirm("you want to sure to delete");
    if (proceed) {
      const url = `https://frightful-wizard-42893.herokuapp.com/bookings/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            alert("Deleted Booking Successfully");
            const restBookings = bookings.filter(
              (booking) => booking._id !== id
            );
            setBookings(restBookings);
          }
        });
    }
  };

  return (
    <div className="container-fluid admin-section">
      <div className="text-center fw-bold">
        <h1 className="pt-5">ADMIN DASHBOARD</h1>
        <h4 className="pt-2 pb-5">TOTAL ORDERS: {bookings.length}</h4>
      </div>
      <Table responsive="sm" className="my-5">
        <thead>
          <tr>
            {Array.from({ length: 1 }).map((_, index) => (
              <th key={index}>Booking Placer Name</th>
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <th key={index}> Booking Id </th>
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <th key={index}>Cost</th>
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <th key={index}>Status</th>
            ))}
            {Array.from({ length: 1 }).map((_, index) => (
              <th key={index}>Cancle</th>
            ))}
            {Array.from({ length: 1 }).map((_, index) => (
              <th key={index}>Confirm</th>
            ))}
          </tr>
        </thead>
        {bookings.map((booking) => (
          <tbody>
            <tr>
              {Array.from({ length: 1 }).map((_, index) => (
                <td className="fw-bold" key={index}>
                  {booking?.Name}
                </td>
              ))}

              {Array.from({ length: 1 }).map((_, index) => (
                <td className="fw-bold" key={index}>
                  {booking?._id}
                </td>
              ))}

              {Array.from({ length: 1 }).map((_, index) => (
                <td className="fw-bold" key={index}>
                  {booking?.price} $
                </td>
              ))}

              {Array.from({ length: 1 }).map((_, index) => (
                <td className="fw-bold" key={index}>
                  {booking?.status}
                </td>
              ))}
              {Array.from({ length: 1 }).map((_, index) => (
                <td key={index}>
                  <button
                    onClick={() => deleteId(booking._id)}
                    className="mx-3 text-danger"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              ))}
              {Array.from({ length: 1 }).map((_, index) => (
                <td key={index}>
                  <button className="mx-3 text-success">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default Booking;