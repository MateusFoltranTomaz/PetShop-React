import React from 'react'
import Col from 'react-bootstrap/Col'

function Servicos(props) {
  return (
    <Col lg="3" md="6" sm="12" className='servico px-3'>
        <img src={props.ImagemServico} alt={props.TituloImagem} />
        <h3>{props.TituloServico}</h3>

    </Col>
  )
}

export default Servicos
