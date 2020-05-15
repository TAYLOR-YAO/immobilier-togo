import React, {Component} from 'react';
import './LendingPage.css';
import ReactHtmlParser from 'react-html-parser';
import axios from "axios";
import { Container ,Row, Col, Card, Form,Button, Modal } from 'react-bootstrap';
import {regions, villes, immoiliers, cours, nombreChambres, services} from "../Feeds/feeds";
import Select from 'react-select';
import { Carousel } from 'react-responsive-carousel';
const customStyles = {
  input: styles => {
    return {
      ...styles,
      height: '1.6em'
  };
}
}
class LendingPage extends Component {
 state = {
    immobiliers: [],
    quartier:" ",
    ville:" ",
    descriptions:"",
    autreInfos:"",
    amount: "0.00 cfa",
    // ======================================
    region: "",
    immobilier: "",
    cours: "",
    chambres: "",,
    services: "",
    // ======================================
    selectedRegion: null,
    selectedCity: null,
    selectedImmobilier: null,
    selectedCours:null,
    selectedNombreChambres: null,
    selectedServices: null,
    documents: false,
    show: false,
    close: false,
};
componentDidMount = ()=>{
  axios.get("/api/poster-vente", this.state).then(response=>{      
    this.setState({
        immobiliers: response.data,
        clonedImmobiliers: response.data
      })
  })
  this.handleRegionChange = (regionOption) => {
    let filteredRegions = this.state.clonedImmobiliers.filter(immobilier => {
        return immobilier.region === regionOption.value;
    })
    this.setState({
        immobiliers: filteredRegions,
        selectedRegion: regionOption.value
    })
  }
  // ==============================FILTRE Ville================================
  this.handleVillesChange= (cityOption) => {
    let filteredCities = this.state.clonedImmobiliers.filter(immobilier => {
      return immobilier.ville === cityOption.value;
    })
    this.setState({
      immobiliers: filteredCities,
      ville: cityOption.value
    })
  }
  // ==============================FILTRE TYPE D'IMMOBILIER================================
  this.handleImmobilierChange= (immobilierTypeOption) => {
    let filteredImmobilierType= this.state.clonedImmobiliers.filter(immobilier => {
      return immobilier.immobilier === immobilierTypeOption.value;
    })
    this.setState({
      immobiliers: filteredImmobilierType,
      selectedImmobilier: immobilierTypeOption.value
    })
  }

  // ==============================FILTRE TYPE DE COURS================================
  this.handleCoursChange= (coursOptions) => {
    let filteredCoursType= this.state.clonedImmobiliers.filter(immobilier => {
      return immobilier.cours === coursOptions.value;
    })
    this.setState({
      immobiliers: filteredCoursType,
      selectedCours: coursOptions.value
    })
  }
  // ==============================FILTRE NOMBRE DE CHAMBRES================================
  this.handleNombreChambresChange= (nombreChambresOption) => {
    let filterednombreChambres= this.state.clonedImmobiliers.filter(immobilier => {
      return immobilier.chambres === nombreChambresOption.value;
    })
    this.setState({
      immobiliers: filterednombreChambres,
      selectedNombreChambres: nombreChambresOption.value
    })
  }

// =====================================FILTER SERVICES======================================
  this.handleServicesChange = (servicesOptions) => {
    // this.setState({ selectedServices: selectedServices, services: selectedServices.value });
    let filteredServices= this.state.clonedImmobiliers.filter(immobilier => {
      return immobilier.aventages === servicesOptions.value[0];
    })
    this.setState({
      immobiliers: filteredServices,
      selectedServices: servicesOptions.value
    })
  }
    
}

handleAmountChange = (event, maskedvalue, floatvalue) =>{
  this.setState({amount: maskedvalue});
}


handleServicesChange= (selectedServices) => {
  this.setState({ selectedServices: selectedServices, services: selectedServices.value });
}

handleInputsChanges = event => {
  const { target: { name, value } } = event;
  this.setState({ [name]: value });
}
  
render() {
  // const { immobiliers} = this.state;
  const { immobiliers, selectedRegion, selectedCity, selectedImmobilier,selectedCours,selectedNombreChambres, selectedServices} = this.state;
  return <div>

      <Container>
          <div style={{textAlign:"center"}}>
            <br/>
            <hr/>
            <h3>Trouve ton Immobilier sans te deplacer</h3>
            <hr/>
          </div>
        <br/>
        <Row style={{marginTop:"10px", height:"300px"}}>
        <Col sm={3} style={{background:"#DCDCDC", textAlign:"left"}}>
          <h4 style={{marginTop:"10px", fontFamily:"impact"}}>Filtre tes préférences</h4>
            <Form.Group controlId="exampleForm.ControlSelect1" >
              <Form.Label style={{fontSize:"14px"}}>Type d'immbilier</Form.Label>
              <br/>
              <Select
              styles={customStyles}
              placeholder={selectedImmobilier}
              value={this.state.selectedImmobilier}
              onChange={this.handleImmobilierChange}
              options={immoiliers}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1" >
              <Form.Label style={{fontSize:"14px"}}>Type de service</Form.Label>
              <br/>
              <Select
                  styles={customStyles}
                  placeholder={selectedServices}
                  value={this.state.selectedServices}
                  onChange={this.handleServicesChange}
                  options={services}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1" >
              <Form.Label style={{fontSize:"14px"}}>Capacite Humain</Form.Label>
              <br/>
              <Select
                  styles={customStyles}
                  placeholder={selectedNombreChambres}
                  value={this.state.selectedNombreChambres}
                  onChange={this.handleNombreChambresChange}
                  options={nombreChambres}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1" >
            <Form.Label style={{fontSize:"14px"}}>Types de cours</Form.Label>
            <br/>
            <Select
              styles={customStyles}
              placeholder={selectedCours}
              value={this.state.selectedCours}
              onChange={this.handleCoursChange}
              options={cours}
              // isMulti
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1" >
            <Form.Label style={{fontSize:"14px"}}>Region</Form.Label>
            <br/>
            <Select
                styles={customStyles}
                placeholder={selectedRegion}
                value={this.state.selectedRegion}
                onChange={this.handleRegionChange}
                options={regions}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1" >
            <Form.Label style={{fontSize:"14px"}}>Ville & Village</Form.Label>
            <br/>
            <Select
                styles={customStyles}
                placeholder={selectedCity}
                value={this.state.selectedCity}
                onChange={this.handleVillesChange}
                options={villes}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1" >
              <Form.Label style={{fontSize:"14px"}}>Quatier</Form.Label>
              <Form.Control type="text" placeholder="Ex: Adidogomé " value={this.state.quartier} name="quartier" onChange={this.handleInputsChanges}/>
            </Form.Group>
          </Col>
{/* ===================================================================== */}
          <Col sm={9}>
            <Row>
              <Col sm={12}>
                <Row>
                  <Col sm={12}>
                    { immobiliers.map(immobilier => 
                    <div key={immobilier._id} >
                      <Row style={{borderTop:"3px double #000", paddingTop:"10px"}}>
                        <Col sm={8}>
                          <div >
                            <Card>
                              <Card.Title><h4 style={{fontFamily:"impact" }}>{immobilier.titre}</h4></Card.Title>
                                <Card.Body className="housepics">
                                  <Carousel>
                                  {immobilier.images.map((image,index) =>
                                    <div key={index}>
                                      <img src={image} alt="Item View"/>
                                      <p className={image}>Legend 2</p>
                                    </div>
                                  )}
                                </Carousel>
                              </Card.Body>
                            </Card>
                          </div>
                        </Col>
                        <Col sm={4} style={{textAlign:"left",background:"#DCDCDC", paddingTop:"10px",overflow:"auto"}}>
                            <h4 style={{fontFamily:"impact" }}>Details le l'immobilier</h4>
                            <hr/>
                            <h5  style={{fontFamily:"impact" }}>{`Prix:   ${immobilier.amount}`}</h5>    
                            <hr/>
                            <p style={{fontFamily:"impact" }}><strong>Telephone: </strong>{` ${immobilier.sellerContacts}`}</p>
                            <hr/>
                            <a href="mailto:taylot.dev25@gmail.com?subject=Immo-Togo: Manifestation d'interet">{`Contacter le proprietaire: ${immobilier.sellerEmail}`}</a>
                            <hr/>
                            <a href="https://firebasestorage.googleapis.com/v0/b/immo-togo.appspot.com/o/immo-togo%2F27752247_1641686842578627_1891016869452810300_n.jpg?alt=media&token=f6b03fa1-4225-4add-8caa-f81f313e2d23" download="w3logo">Telecharger le contract</a>                                  
                            <hr/>
                            <Row>
                              <Col sm={12}>
                                <Button
                                  variant="outline-dark"
                                  // variant="none"
                                  onClick={() => this.setState({ show: true })}
                                >
                                  Plus de Detailles
                                </Button>
                                <Modal
                                  show={this.state.show}
                                  animation={true}
                                  size="md" className="hadow-lg border">
                                  <Modal.Header className="bg-danger text-white text-center py-1" id="mondal-header">
                                    <Modal.Title className="text-center">
                                      <h5>Plus De Detailles A Lire</h5>
                                    </Modal.Title>
                                  </Modal.Header>
                                  <Modal.Body className="py-0 border">
                                    {/*=====================Modal Body====================== */}
                                    <p><strong>Type de cours:</strong> {immobilier.cours ? ` ${immobilier.cours}` : ""}</p> 
                                    <p><strong>Offre:</strong> {immobilier.services ? ` ${immobilier.services}` : ""}</p>                                                          
                                    <p><strong>Ville & Village:</strong>{` ${immobilier.ville}`}</p>                                     
                                    <p><strong>Quartier:</strong>  {` ${immobilier.quartier}`} </p>                                                          
                                    <div>{immobilier.chambres ?(<div><strong>Nombre de Piece(s): </strong>{immobilier.chambres}</div>): ""}</div>                     
                                    <p>{immobilier.aventage ? `Aventale du lieu: ${immobilier.aventage.map(aventage =>{
                                    return ` ${aventage.value} |`
                                    })}` : ""}
                                    </p> 
                                    <div><h6><strong>Address:</strong> </h6>{` ${immobilier.address}`}</div> 
                                    <hr/>  
                                    <div><h5><strong>Descriptions:</strong> </h5>  {ReactHtmlParser (immobilier.descriptions)}  </div>                                                        
                                    {/* ==================================================== */}
                                   
                                  </Modal.Body>
                                    <Modal.Footer className="py-1 d-flex justify-content-center">
                                      <div>
                                        <Button
                                          variant="outline-dark" onClick={() => this.setState({ show: false })}>Cancel</Button>
                                      </div>
                                      <div>
                                        <Button variant="outline-danger" className="mx-2 px-3">Delete</Button>
                                      </div>
                                    </Modal.Footer>
                                </Modal>
                              </Col>
                            </Row>                                             
                        </Col>
                      </Row> 
                        <hr/>
                      </div>                            
                    )}
                  </Col>
                </Row>
               
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>  
  }
}

export default LendingPage;

