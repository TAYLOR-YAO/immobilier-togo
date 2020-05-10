import React, {Component} from 'react';
import './RegisterHouse.css';
import { Container ,Row, Col, Button} from 'react-bootstrap';

class RegisterHouse extends Component {
 state = {
   titre: "",
   address:"",
   owner:"",
   images:[],
   descriptions:"",
   length: "",
   larg: "",
   autreInfos:""
};
  
render() {
  return <div>

        <Container>
            <br/>
            <Row  className="posteTitre">
                <div>
                    <h3>Enregistre ton immobilier</h3>

                </div>
            </Row>
            <br/>
            <Row>
                <Col sm={6}>
                    6
                </Col>
                <Col sm={6}>6
                <Button>Poste</Button>
                </Col>
            </Row>
        </Container>
    </div>  
  }
}

export default RegisterHouse;
