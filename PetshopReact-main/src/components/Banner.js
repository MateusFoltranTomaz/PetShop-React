import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import banner from "../imagens/banner.jpg";
import banner01 from "../imagens/banner01.jpg";
import banhoETosa from "../imagens/banhoETosa.png";

const Banner = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel activeIndex={index} onSelect={handleSelect} className="custom-carousel">
			<Carousel.Item>
				<img src={banner} className="imagemBanner" alt="Imagem 1"></img>
			</Carousel.Item>
			<Carousel.Item>
				<img src={banner01} className="imagemBanner" alt="Imagem 2"></img>
			</Carousel.Item>
			<Carousel.Item>
				<img src={banhoETosa} className="imagemBanner" alt="Imagem 3"></img>
			</Carousel.Item>
		</Carousel>
	);
};

export default Banner;
