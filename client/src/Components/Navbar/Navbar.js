import React, {Component} from 'react';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import './Navbar.css';
var logo = "https://thumbs.dreamstime.com/z/mains-et-maisons-toits-logo-d-immobiliers-89005989.jpg";


class Navigations extends Component {
 state = {
   username: ""
};

  render() {
    return <div>

<Navbar collapseOnSelect expand="lg" bg="success" variant="dark" className="navbar navbar-fixed-top">
    <Navbar.Brand href="/node_modules">
        <img src={logo} className="App-logo" alt="logo" style={{float:"left"}} />  
    </Navbar.Brand>
    <Navbar.Brand href="/">
        <h4>Immo-Togo  </h4>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
            <NavDropdown title="Nos Services" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Annonce et vente de Maison</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Annonce et vente de Terrains</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Annonce et location</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/">Contactez Nous</Nav.Link>
            <Nav.Link href="poster-immobiliers">Poste ta maision</Nav.Link>
            <NavDropdown title="Mon Compte" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Modifier</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Solicite L'aide</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Quitter</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    </Navbar.Collapse>
</Navbar>
       
    </div>
    
  }
}

export default Navigations;
