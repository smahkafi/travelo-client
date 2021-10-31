import React from "react";
import { Button } from "react-bootstrap";
import "./HomeSubBanner.css";

const HomeSubBanner = () => {
  return (
    <div>
      <div className="bg-img">
        <span className="subheader-bg fs-1">
          Choose the Perfect Destination
        </span>
        <br />
        <span className="text-light ">
          We can manage your dream building A small river named Duden flows by
          their place
        </span>
        <br />
        <Button className="text-dark btn-warning">Search Place</Button>
      </div>
    </div>
  );
};

export default HomeSubBanner;
