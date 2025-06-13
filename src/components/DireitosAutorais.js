import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DireitosAutorais() {

   const ano = new Date().getFullYear()

   const bgcolor = { backgroundColor: "#808080", padding: "20px 0", marginTop: '-10px'}

   const alinhar = {textAlign: 'center'}


  return (
      <Container fluid style={bgcolor}>
      <Row>
        <Col style={alinhar}>
           &copy; { ano }  Pet Shop - Todos os direitos reservados
        </Col>
      </Row>
    </Container>
  
  )
}

export default DireitosAutorais
