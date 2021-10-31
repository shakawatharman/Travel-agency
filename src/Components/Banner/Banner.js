import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="mb-5">
      <Carousel className="banner-carousel">
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://tourpress.b-cdn.net/wp-content/uploads/2017/11/sydney-slider-img-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://tourpress.b-cdn.net/wp-content/uploads/2017/11/maldives-slider-img-1.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://tourpress.b-cdn.net/wp-content/uploads/2017/11/dubai-slider-screen-1.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
