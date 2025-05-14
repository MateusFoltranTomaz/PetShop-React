import React from "react";
import Banner from "../components/Banner";
import Servico from "../components/Servico";
import banhoTosa from '../imagens/banho-tosa.jpg';
import vacinaCachorro from '../imagens/vacina-cachorro.jpg';
import adestramentoCachorro from '../imagens/adestramento.jpg';
import hotelCachorro from '../imagens/hotel-para-cachorros.jpg';

const Home = () => {
	return (
		<div>
			<Banner />

			<section className="section d-flex py-5">
				<Servico 
				imagemServico={banhoTosa} 
				tituloImagem='Banho e tosa para Pets' 
				tituloServico='Banho e Tosa'
				/>
				<Servico 
				imagemServico={vacinaCachorro} 
				tituloImagem='Pet Care' 
				tituloServico='Pet Care'
				/>
				<Servico 
				imagemServico={adestramentoCachorro} 
				tituloImagem='Adestramento' 
				tituloServico='Adestramento'
				/>
				<Servico 
				imagemServico={hotelCachorro} 
				tituloImagem='Hotel Resort' 
				tituloServico='Hotel Resort'
				/>
			</section>
		</div>
	);
};

export default Home;
