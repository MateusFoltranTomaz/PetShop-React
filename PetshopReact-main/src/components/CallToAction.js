import React from 'react';
import Col from 'react-bootstrap/Col';

function CallToAction(props) {
  return (
    <Col lg="12" className='call-to-action px-5 my-3'>
      <img src={props.imagem} alt={props.alt} />
      <h3>{props.titulo}</h3>
      <p>{props.descricao}</p>
    </Col>
  );
}

export default CallToAction;
