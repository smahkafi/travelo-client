import React from "react";
import { Button, Card } from "react-bootstrap";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SingleService.css";

const SingleService = (props) => {
  const { name, img, price, rating, tourComplete, time, _id } = props.service;
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mt-2 single-service-root">
      <Card className="p-1 mx-auto" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} className="border border-danger" />
        <Card.Body className=" card-inside">
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <div className="text-start">
              <Rating
                readonly
                style={{ color: "" }}
                initialRating={rating}
                emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                fullSymbol={<FontAwesomeIcon icon={fullStar} />}
              />{" "}
              <span className="">{rating}</span>
              <span className="text-warning">{tourComplete}</span>
              <div className="d-flex justify-content-around">
                <span>{price}</span>
                <span>{time}</span>
              </div>
            </div>
          </Card.Text>
          <Link to={`/booking/${_id}`}>
            <Button variant="primary">BOOK NOW</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleService;
