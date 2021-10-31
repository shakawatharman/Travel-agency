import React, { useEffect, useState } from "react";
import { CardGroup } from "react-bootstrap";
import ServiceCard from "../ServiceCard/ServiceCard";
import "./Services.css";

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(()=>{
      fetch('http://localhost:5000/events')
      .then(res=>res.json())
      .then(data=>setServices(data))
    },[])

  return (
    <div className="container">
      <h2>My Services</h2>
      <CardGroup>

          {
            services.map(service=><ServiceCard
            key={service._id}
            service={service}
            ></ServiceCard>)
          }

      </CardGroup>
    </div>
  );
};

export default Services;
