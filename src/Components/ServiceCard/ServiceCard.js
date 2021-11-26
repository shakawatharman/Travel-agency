import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { useHistory } from "react-router";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
  const history = useHistory();

  const { title, desc, img, _id, price } = service;

  const handleServiceDetail = () => {
    history.push(`/bookingService/${_id}`);
  };

  return (
    <>
     
       <div className="col-md-4">
       <CardGroup>
       <Card className="card-container mb-3">
        <div className="img-parent">
          <Card.Img variant="top" src={img} />
        </div>

        <Card.Body>
          <Card.Title>{title}</Card.Title>
         
          <Card.Text>{desc.slice(0,205)}</Card.Text>
          <h2>${price}</h2>
        </Card.Body>
        <button
          onClick={handleServiceDetail}
          className="btn book-btn text-right"
        >
          Book Now
        </button>
      </Card>
      </CardGroup>
       </div>
 
    </>
  );
};

export default ServiceCard;
