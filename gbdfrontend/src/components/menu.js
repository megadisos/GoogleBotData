
import {Navbar, Container,Nav} from  'react-bootstrap';
function Menu(){

    return (

        <Container className="container-fluid">
    <Navbar  expand="lg" className="mainMenu">
        <Container>
            <Navbar.Brand href="#home">Dialapplet</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#link">Crear Menú</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </Container>
    )
}
export default Menu;