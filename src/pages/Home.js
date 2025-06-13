import React from "react";
import Banner from "../components/Banner";
import banner from "../imagens/banner.jpg";
import Servico from "../components/Servico";
import banhoTosa from "../imagens/banhoTosa.jpg";
import vacinaCachorro from "../imagens/vacina-cachorro.jpg";
import adestramento from "../imagens/adestramento.jpg";
import hotelResort from "../imagens/hotel-para-cachorros.jpg";
import TituloSecao from "../components/TituloSecao";
import Cliente from "../components/Cliente";
import Cachorro from "../imagens/rottweiller.jpg";
import Delivery from "../components/Delivery";
import CallToAction from "../components/CallToAction";
import ContentImgRight from "../components/ContentImgRight";


const Home = () => {
	return (
		<div>
			<Banner/>

			<section className='section d-flex py-5'>
			<Servico imagemServico={ banhoTosa } tituloImagem="Banho e Tosa para Pets" tituloServico="Banho e Tosa" />
			<Servico imagemServico={ vacinaCachorro } tituloImagem="Pet care para pets" tituloServico="Pet Care" />
			<Servico imagemServico={ adestramento } tituloImagem="Adestramento para pets" tituloServico="Adestramento" />
			<Servico imagemServico={ hotelResort } tituloImagem="Hotel e resorts para pets" tituloServico="Hotel Resort" />
			</section>

			<CallToAction titulo='SEJA BEM VINDO AO PET SHOP'/>

			<ContentImgRight titulo='Rlação com cliente' texto='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
			The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.' 
			imagem={Cachorro} alt='Foto de Rottweiller'/>

			<section className="d-flex">
				<Delivery imagemDelivery={ banner } 
				tituloDelivery="Atendimento Delivery" 
				numeroDelivery="0800 555 3232" />
			</section> 
			
			
		</div>

	);
};

export default Home;
