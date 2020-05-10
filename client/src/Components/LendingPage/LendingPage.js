import React, {Component} from 'react';
import './LendingPage.css';
import { Container ,Row, Col, Card, Dropdown, Button, ButtonGroup, DropdownButton } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';

var house1= "https://everipedia-storage.s3-accelerate.amazonaws.com/NewlinkFiles/11464966/30301555.jpg";

class Immobiliers extends Component {
 state = {
   color: ""
};
  
render() {
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

              <Button>Button</Button>
              <Button>Button</Button>

              <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-2">
                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
              </DropdownButton>

              <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-3">
                <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
              </DropdownButton>
            </ButtonGroup>
          </Col>
          <Col sm={9}>
            <Row>
              <Col sm={9}>
              <Card>
                <Card.Title>This is some text within a card body.</Card.Title>
                  <Card.Body className="housepics">
                    <Carousel>
                    <div>
                        <img src={house1} alt="House Views"/>
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src={house1} alt="House Views"/>
                        <p className={house1}>Legend 2</p>
                    </div>
                    <div>
                        <img src={house1} alt="House Views"/>
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src={house1} alt="House Views"/>
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src={house1} alt="House Views"/>
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src={house1} alt="House Views"/>
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src={house1} alt="House Views"/>
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src={house1} alt="House Views"/>
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src={house1} alt="House Views"/>
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src={house1} alt="House Views"/>
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src={house1} alt="House Views"/>
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src={house1} alt="House Views"/>
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src={house1} alt="House Views"/>
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src={house1} alt="House Views"/>
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src={house1} alt="House Views"/>
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img src={house1} alt="House Views"/>
                        <p className="legend">Legend 3</p>
                    </div>
                  </Carousel>
                    {/* <img src={house1} alt="House Views" style={{width:"100%"}}/> */}
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={3} style={{textAlign:"left"}}>
                <h5> <strong> Details de la maision</strong></h5>
                <br/>
                <p>
                Deliver Your Customers The Mobile Messaging Experience They Deserve. 
                Security, Reliability And Human Support - Learn Why Top Brands Choose OpenMarket.
                Enterprise-Grade Network. 24/7 Technical Support. Trusted By 300 Top Brands. 
                5 Billion Messages A Week. Connect To 200+ Countries. Services: Mobile Broadcasting, 
                Two-Factor Authentication, Customer
                </p>

              </Col>
            </Row>

          </Col>
        </Row>
      </Container>
    </div>  
  }
}

export default Immobiliers;
