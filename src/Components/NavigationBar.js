import { Component, React } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaNodeJs } from 'react-icons/fa';

class NavigationBar extends Component{
    render(){
        return(
            <header>
                <Navbar className="navBar" collapseOnSelect fixed="top" bg="light" expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Brand>
                            <FaNodeJs size="40"></FaNodeJs>
                        </Navbar.Brand>
                        <Navbar.Collapse className="responsive-navbar-nav">
                            <Nav className="nav">
                                <Nav.Link href="#Home">Home</Nav.Link>
                                <Nav.Link href="#About">About</Nav.Link>
                                <Nav.Link href="#Education">Education</Nav.Link>
                                <Nav.Link href="#Projects">Projects</Nav.Link>
                                <Nav.Link href="#Contacts">Contacts</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}

export default NavigationBar;