import React, {Component} from 'react';
// import './LendingPage.css';
import axios from "axios";
import { Container ,Row, Col, Card, Dropdown, Button, ButtonGroup, DropdownButton } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';

class LendingPage extends Component {
 state = {
   immobiliers: []
};
componentDidMount = ()=>{

  axios.get("/api/poster-vente", this.state).then(response=>{      

    this.setState({
        immobiliers: response.data.sort(function() { return 0.5 - Math.random() }),
        // immobiliers: response.data,

      })
  })
}
  
render() {
  const { immobiliers} = this.state;
  return <div>

      <Container>
          <div style={{textAlign:"center"}}>
            <br/>
            <h3>Chereche Ta Maisson A achetter ou A Louer</h3>
          </div>
        <br/>
        <Row style={{marginTop:"10px", height:"300px"}}>
        <Col sm={3}>
          <h3>Filtrer</h3>
            <ButtonGroup vertical style={{textAlign:"left"}}>
              <Button>Button</Button>
              <Button>Button</Button>

              <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
              </DropdownButton>

            </ButtonGroup>
          </Col>
          <Col sm={9}>
            <Row>
              <Col sm={12}>
                { immobiliers.map(immobilier => 
               <div key={immobilier.images}>
               <Card>
               <Card.Title>This is some text within a card body.</Card.Title>
                   <Card.Body className="housepics">
                   <Carousel>
                   {immobilier.images.map((image,index) =>
                         <div key={index}>
                            <img src={image} alt="House Views"/>
                            <p className={image}>Legend 2</p>
                        </div>
                    )}
                   </Carousel>
                   </Card.Body>
              </Card>

          </div>
               
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>  
  }
}

export default LendingPage;

