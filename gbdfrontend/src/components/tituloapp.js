
import {Row, Col,Container} from  'react-bootstrap';
function Titulo(){

return(
    <Container>
<Row className="mt-5">
    <Col>
        <h1>CREACIÓN INTENTS DIALOGFLOW</h1>
    </Col>
    </Row>
    <Row>
    <Col>
    <p>Arrasta el excel file con la informacion de los intents a crear.</p>
</Col>
</Row>
</Container>
)
}
export default Titulo;