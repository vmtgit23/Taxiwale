import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './User';

function NavbarHeader() {
  return (
    <Navbar bg="light" expand="lg" fixed='top'>
      <Container>
        <a href='#Home'> <img src={require('./steeringWheel.png')} className="App-logo" alt="logo"/> </a> &nbsp; &nbsp; &nbsp;
        <Navbar.Brand href="#Home">Taxiwale</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href='#AboutUs' >About Us</Nav.Link>
            <Nav.Link href="#Blog">Blog</Nav.Link>
            <Nav.Link href="#ContactUs">Contact Us</Nav.Link>
          </Nav>
          <Nav className='ml-auto'>
            <User/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;