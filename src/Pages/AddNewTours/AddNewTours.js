import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

const AddNewTours = () => {
  const { id } = useParams();
  const [bookings, setBookings] = useState({});
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://frightful-wizard-42893.herokuapp.com/tours", {
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
  useEffect(() => {
    fetch("https://frightful-wizard-42893.herokuapp.com/tours")
      .then((res) => res.json())
      .then((data) => {
        const bookings = data?.find((booking) => booking?._id === id);
        setBookings(bookings);
        reset(bookings);
      });
  }, [id]);

  return (
    <div>
      <div
        className="col-sm-12 col-md-6 col-lg-6 mx-auto my-5 border p-0 rounded"
        style={{ width: "16rem" }}
      >
        <h2>Add A New Tours</h2>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name")}
            placeholder="Tour Name"
            className="py-1 px-2 my-2 w-50"
          />
          <input
            {...register("img")}
            placeholder="Image Link"
            className="py-1 px-2 my-2 w-50"
          />
          <input
            {...register("price")}
            placeholder="Tour Price $"
            className="py-1 px-2 my-2 w-50"
          />
          <input
            {...register("rating")}
            placeholder="Rating"
            className="py-1 px-2 my-2 w-50"
          />
          <input
            {...register("tourComplete")}
            placeholder="Tour Complete"
            className="py-1 px-2 my-2 w-50"
          />
          <input
            {...register("time")}
            placeholder="Time"
            className="py-1 px-2 my-2 w-50"
          />

          <div className="btn btn-success">
            <input type="submit" value="ADD SERVICE" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewTours;
