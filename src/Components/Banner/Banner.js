import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="my-5">
      <Carousel className="banner-carousel">
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20181218151203/iStock-954646760.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-dark fw-bold">Be Our Client</h3>
            <p className="text-dark fw-bold">Choose us and be our client for once. We always provide the best services.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="http://ttgasia.2017.ttgasia.com/wp-content/uploads/sites/2/2020/05/travelagetn.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 className="text-dark fw-bold">We Know What Is The Best</h3>
            <p className="text-dark fw-bold">We always study about the places you choose. That's why we know what will be perfect for you.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://lh3.googleusercontent.com/proxy/b0RMROLcE8JHu_kcLczlhCSuJaZGf7iYZbaDCREJbB9qJsg-nVfHSHIgPusB7_DM6cYe_2S8X46nBQNxLztFaXtQOdszCiFtBNFOagzlBDZJDPD8i6FPu4f3e6uEuwEzrKMnjeJ6JrFrjbUvbBTaAZSr0g"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 className="text-dark fw-bold">Give Us The Chance</h3>
            <p className="text-dark fw-bold">
              We know the value of friendship. When we arrange a tour for our client, we treat them as our friend. Enjoy with us!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
