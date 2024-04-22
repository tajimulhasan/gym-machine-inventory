import React from "react";
import img1 from "../../Images/img1.jpg";
import img2 from "../../Images/img2.jpg";
import img3 from "../../Images/img3.jpg";
import img4 from "../../Images/img6.jpg";
import { Carousel } from "react-bootstrap";
import './Banner.css';
const Banner = () => {
  return (
    <Carousel data-bs-theme="light" className="bann"> 
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" />
        <Carousel.Caption  className="carouselCaption">
          <h3> <span style={{color: '#ff9c1a'}}>Find</span> your better lifestyle.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img4} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
