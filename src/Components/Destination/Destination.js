import React from "react";
import { Card } from "react-bootstrap";
import './Destination.css';

const Destination = () => {
  return (
    <div className="my-5">
      <h1 className="text-center mb-1">Travel Destinations</h1>
      <p className="text-center mb-5">Choose your favorite place and do plan with us...</p>

<div className="container">
    <div className="row destination-image">
    <Card className="p-0 col-md-6">
  <Card.Img src="https://i.ibb.co/QcH3dHJ/maldives-featured-720x560.jpg" alt="Card image" />
  <Card.ImgOverlay>
    
  <Card.Title> <span className="text-dark fw-bold h2">Maldives</span></Card.Title>
   
  </Card.ImgOverlay>
</Card>

<Card className="p-0 col-md-6">
  <Card.Img src="https://i.ibb.co/w7k1qwC/penida1.jpg" alt="Card image" />
  <Card.ImgOverlay>
    
  <Card.Title> <span className="text-dark fw-bold h2">Indonesia</span></Card.Title>
   
  </Card.ImgOverlay>
</Card>

<Card className="p-0 col-md-6">
  <Card.Img src="https://i.ibb.co/5vbh4YC/Annapurna-Base-Camp-Trek.jpg" alt="Card image" />
  <Card.ImgOverlay>
    
  <Card.Title> <span className="text-dark fw-bold h2">Nepal</span></Card.Title>
   
  </Card.ImgOverlay>
</Card>


<Card className="p-0 col-md-6">
  <Card.Img src="https://i.ibb.co/rFdN8FW/Herd-of-elephants-walking-in-a-jungle-river.jpg"/>
  <Card.ImgOverlay>
    
  <Card.Title> <span className="text-dark fw-bold h2">Srilanka</span></Card.Title>
   
  </Card.ImgOverlay>

</Card>

<Card className="p-0 col-md-6">
  <Card.Img src="https://i.ibb.co/YQJCXCQ/photo-1548013146-72479768bada-ixid-Mnwx-Mj-A3f-DB8-MHxz-ZWFy-Y2h8-NHx8a-W5ka-WF8-ZW58-MHx8-MHx8-ixli.jpg"/>
  <Card.ImgOverlay>
    
  <Card.Title> <span className="text-dark fw-bold h2">India</span></Card.Title>
   
  </Card.ImgOverlay>

</Card>
<Card className="p-0 col-md-6">
  <Card.Img src="https://i.ibb.co/8BxKVDD/the-sky-mountains-lake-lake-saif-ul-malook-wallpaper-preview.jpg"/>
  <Card.ImgOverlay>
    
  <Card.Title> <span className="text-dark fw-bold h2">Pakistan</span></Card.Title>
   
  </Card.ImgOverlay>

</Card>
    </div>
</div>
    </div>
  );
};

export default Destination;
