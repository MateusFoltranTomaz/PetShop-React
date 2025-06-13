import React from "react";
import Rotulo from "../components/Rotulo";
import ContentImgLeft from "../components/ContentImgLeft";
import banhoTosa from "../imagens/banhoTosa.jpg"
import CallToAction from "../components/CallToAction";
import ContentImgRight from "../components/ContentImgRight";
import vacina from "../imagens/vacina-cachorro.jpg"

const BanhoTosa = () => {
	return (
		<div>
			<Rotulo rotulo='Banho e Tosa'/>

			<ContentImgLeft imagem={banhoTosa} textoImagem='Foto de banho e tosa' titulo='Cuidados com o seu pet' texto='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sted do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
			mostrarBotao={true}/>
		
			<CallToAction titulo='PET CARE'/>

			<ContentImgRight titulo='Atenção especial ao seu pet' texto='Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.' 
			imagem={vacina} textoImagem='Imagem de cachorro sendo vacinado' mostrarBotao={true}/>
		</div>
	);
};

export default BanhoTosa;
