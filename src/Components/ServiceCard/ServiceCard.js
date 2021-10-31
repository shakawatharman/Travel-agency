import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './ServiceCard.css';

const ServiceCard = ({service}) => {
    const history = useHistory();
    

    const {title,desc,img,_id} = service;

    const handleServiceDetail = () => {
        history.push(`/bookingService/${_id}`)
    }

    return (
        <>
            <Card className="card-container">
    <Card.Img variant="top" src={img} />
    
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {desc}
      </Card.Text>
    </Card.Body>
        <button onClick={handleServiceDetail} className="btn book-btn text-right">Book Now</button>
    
  </Card>
        </>
    );
};

export default ServiceCard;