import React from "react";
import useService from "../../Hooks/useService";
import ServiceCard from "../ServiceCard/ServiceCard";
import "./Services.css";

const Services = () => {

  const [services]=useService();

    

  return (
    <div className="container">
      <h2 className="mb-5">Select Your Destination</h2>

     
      <div className="row">
          {
            services.map(service=>
            <ServiceCard
            key={service._id}
            service={service}
            ></ServiceCard>)
          }
      </div>
   
    </div>
  );
};

export default Services;
