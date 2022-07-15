import React from "react";
import StarIcon from "../icons/StarIcon";
import camera from "../images/camera.png";

const starIcons = [{}, {}, {}, {}, {}];

const Card = () => {
  return (
    <div className="card-wrapper">
      <div className="card-header">
        <div className="header-labels">
          <div className="label-popular">Popular</div>
          <div className="label-new">New</div>
          <div className="label-plus">+2</div>
        </div>
        <div className="camera-image-wrapper">
          <img src={camera} alt="camera" />
        </div>
      </div>
      <div className="product-title">
        <div>DS-2CD2821G0</div>
        <div>(AC24V/DC12V)</div>
      </div>
      <div className="product-subtitle">SAP123877</div>
      <div className="star-icons">
        {starIcons.map((el: any) => (
          <StarIcon />
        ))}
      </div>
      <div className="product-description">
        2MP IP camera in standard casing
      </div>
      <div className="product-price">
        100 $
      </div>
    </div>
  );
};

export default Card;
