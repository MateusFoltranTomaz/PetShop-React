import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner from '../imagens/banner.jpg';
import banner01 from '../imagens/Banner-01.jpg';
import banhoETosa from '../imagens/banho-e-tosa.png';
import './Banner.css';

function Banner() {
  return (
    <Carousel className="custom-banner-carousel">
      <Carousel.Item>
        <img
          className="imagen1"
          src={banner}
          alt="Banner 1"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imagen2"
          src={banner01}
          alt="Banner 2"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imagen3"
          src={banhoETosa}
          alt="Banner 3"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
