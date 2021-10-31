import React from "react";
import { Card } from "react-bootstrap";

const Destination = () => {
  return (
    <div className="my-5">
      <h1 className="text-center mb-1">Travel Destinations</h1>
      <p className="text-center mb-5">Choose your favorite place and make plan with us...</p>

<div className="container">
    <div className="row">
    <Card className="p-0 col-md-6">
  <Card.Img src="https://wallpaperaccess.com/full/4287258.jpg" alt="Card image" />
  <Card.ImgOverlay>
    
  <Card.Title> <span className="text-dark fw-bold h2">Maldives</span></Card.Title>
   
  </Card.ImgOverlay>
</Card>

<Card className="p-0 col-md-6">
  <Card.Img src="https://wallpapercave.com/wp/wp1991255.jpg" alt="Card image" />
  <Card.ImgOverlay>
    
  <Card.Title> <span className="text-dark fw-bold h2">Vutan</span></Card.Title>
   
  </Card.ImgOverlay>
</Card>

<Card className="p-0 col-md-6">
  <Card.Img src="https://i.pinimg.com/originals/72/96/04/72960416bccb45f76ef2400b634e7c01.jpg" alt="Card image" />
  <Card.ImgOverlay>
    
  <Card.Title> <span className="text-dark fw-bold h2">Nepal</span></Card.Title>
   
  </Card.ImgOverlay>
</Card>


<Card className="p-0 col-md-6">
  <Card.Img src="https://media.istockphoto.com/photos/elephants-in-river-picture-id505221662?b=1&k=20&m=505221662&s=170667a&w=0&h=OameoaUMhnOc5gz98iIAmGpj1Xd7lAoA99ROg6OzY7U="/>
  <Card.ImgOverlay>
    
  <Card.Title> <span className="text-dark fw-bold h2">Srilanka</span></Card.Title>
   
  </Card.ImgOverlay>

</Card>

<Card className="p-0 col-md-6">
  <Card.Img src="https://images.unsplash.com/photo-1548013146-72479768bada?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"/>
  <Card.ImgOverlay>
    
  <Card.Title> <span className="text-dark fw-bold h2">India</span></Card.Title>
   
  </Card.ImgOverlay>

</Card>
<Card className="p-0 col-md-6">
  <Card.Img src="https://c4.wallpaperflare.com/wallpaper/762/723/695/the-sky-mountains-lake-lake-saif-ul-malook-wallpaper-preview.jpg"/>
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
