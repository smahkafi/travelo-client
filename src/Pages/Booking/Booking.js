import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const Booking = () => {
  const { id } = useParams();
  const { allContext } = useAuth();
  const { user } = allContext;
  const [bookings, setBookings] = useState({});
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch("https://frightful-wizard-42893.herokuapp.com/tours")
      .then((res) => res.json())
      .then((data) => {
        const bookings = data?.find((booking) => booking?._id === id);
        setBookings(bookings);
        reset(bookings);
      });
  }, [id]);

  // booking submit
  const onSubmit = (data) => {
    data.status = "pending";
    delete data._id;
    fetch("https://frightful-wizard-42893.herokuapp.com/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Your booking is inserted");
          reset();
        }
      });
  };

  return (
    <Container>
      <div className="d-flex row">
        <div
          className="col-sm-12 col-md-6 col-lg-6 mx-auto my-5 border p-0 rounded"
          style={{ width: "16rem" }}
        >
          <div className="card mx-auto">
            <img
              src={bookings?.img}
              className="card-img-top img-fluid rounded"
              alt=""
            />
          </div>
          <div className="card-body">
            <h4 className="card-title">{bookings?.name}</h4>
            <p className="card-text">Package rate:{bookings?.price}</p>
            <p className="card-text">Rating: {bookings?.rating}</p>
            <p className="card-text">Duration: {bookings?.time}</p>
            <p className="card-text">
              Tour Completes: {bookings?.tourComplete}
            </p>
          </div>
        </div>

        <div
          className="col-sm-12 col-md-6 col-lg-6 mx-auto my-5 border p-0 rounded"
          style={{ width: "16rem" }}
        >
          <h2>this is form side</h2>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue={bookings?._id} {...register("offer")} />

            <input defaultValue={user.displayName} {...register("Name")} />

            <input
              defaultValue={user.email}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="error">This field is required</span>
            )}
            <input
              placeholder="Address"
              defaultValue=""
              {...register("address")}
            />
            <input placeholder="City" defaultValue="" {...register("city")} />
            <input
              placeholder="Phone number"
              defaultValue=""
              {...register("hone")}
            />

            <div className="btn btn-success">
              <input type="submit" value="Booking Now" />
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Booking;
