import React, {Component} from 'react';
import './LendingPage.css';
import ReactHtmlParser from 'react-html-parser';
import axios from "axios";
import { Container ,Row, Col, Card, Form } from 'react-bootstrap';
import {regions, villes, immoiliers, cours, nombreChambres, aventages, services} from "../Feeds/feeds";
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
    chambres: "",
    aventages: "",
    services: "",
    // ======================================
    selectedRegion: null,
    selectedCity: null,
    selectedImmobilier: null,
    selectedCours:null,
    selectedNombreChambres: null,
    selectedAventages: null,
    selectedServices: null,
    documents: false
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
  // ==============================FILTRE AVENTAGES================================
  this.handleAventageChange= (aventagesOption) => {
    let filterednombreAventages= this.state.clonedImmobiliers.filter(immobilier => {
      return immobilier.aventages === aventagesOption.value[0];
    })
    this.setState({
      immobiliers: filterednombreAventages,
      selectedAventages: aventagesOption.value
    })

    // this.setState({ selectedAventages: selectedAventages, aventage: selectedAventages.value });
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
  const { immobiliers, selectedRegion, selectedCity, selectedImmobilier,selectedCours,selectedNombreChambres, selectedAventages, selectedServices} = this.state;
  return <div>

      <Container>
          <div style={{textAlign:"center"}}>
            <br/>
            <h3>Cherche </h3>
          </div>
        <br/>
        <Row style={{marginTop:"10px", height:"300px"}}>
        <Col sm={3} style={{background:"#DCDCDC", textAlign:"left"}}>
          <h4 style={{marginTop:"10px", fontFamily:"impact"}}>Filtre tes préférences</h4>
          <Row>
            <Col sm={6}>
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
            </Col>
            <Col sm={6}>
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
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Form.Group controlId="exampleForm.ControlSelect1" >
                <Form.Label style={{fontSize:"14px"}}>Numbre de pieces</Form.Label>
                <br/>
                <Select
                    styles={customStyles}
                    placeholder={selectedNombreChambres}
                    value={this.state.selectedNombreChambres}
                    onChange={this.handleNombreChambresChange}
                    options={nombreChambres}
                />
              </Form.Group>
            </Col>
            <Col sm={6}>
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
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
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
            </Col>
            <Col sm={6}>
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
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Form.Group controlId="exampleForm.ControlSelect1" >
                <Form.Label style={{fontSize:"14px"}}>Quatier</Form.Label>
                <Form.Control type="text" placeholder="Ex: Adidogomé " value={this.state.quartier} name="quartier" onChange={this.handleInputsChanges}/>
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group controlId="exampleForm.ControlSelect1" >
              <Form.Label style={{fontSize:"14px"}}>Aventages</Form.Label>
              <br/>
              <Select
                  styles={customStyles}
                  placeholder={selectedAventages}
                  value={this.state.selectedAventages}
                  onChange={this.handleAventageChange}
                  options={aventages}
                  isMulti
                />
              </Form.Group>      
            </Col>
          </Row>         
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
                        <Col sm={7}>
                          <div >
                            <Card>
                              <Card.Title><h4 style={{fontFamily:"impact" }}>{immobilier.titre}</h4></Card.Title>
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
                        </Col>
                        <Col sm={5} style={{textAlign:"left",background:"#DCDCDC"}}>
                            <h4 style={{fontFamily:"impact" }}>Details le l'immobilier</h4>
                            {/* <p> {immobilier.immobilier? `Type d'immobilier: ${immobilier.immobilier}` : ""}</p>                                                                                                */}
                            {/* <p style={{fontFamily:"impact" }}>{`Prix: ${immobilier.amount}`}</p>*/}
                            <Row>
                              <Col sm={6}>    
                                <p style={{fontFamily:"impact" }}>{`Prix: ${immobilier.amount}`}</p>                        
                              </Col>
                              <Col sm={6}>    
                                <a href="https://firebasestorage.googleapis.com/v0/b/immo-togo.appspot.com/o/immo-togo%2F27752247_1641686842578627_1891016869452810300_n.jpg?alt=media&token=f6b03fa1-4225-4add-8caa-f81f313e2d23" download="w3logo">Telecharger le contract</a>                                  
                              </Col>
                            </Row>
                            <p> {immobilier.cours ? `Type de cours: ${immobilier.cours}` : ""}</p> 
                            <p> {immobilier.services ? `Offre: ${immobilier.services}` : ""}</p>                                                          
                            <p> {`Ville & Village: ${immobilier.ville}`}</p>                                     
                            <p> {`Quartier: ${immobilier.quartier}`} </p>                                                          
                            <div>{immobilier.chambres ?(<div><strong>Nombre de Piece(s): </strong>{immobilier.chambres}</div>): ""}</div>                     
                            <p>{immobilier.aventage ? `Aventale du lieu: ${immobilier.aventage.map(aventage =>{
                            return ` ${aventage.value} |`
                            })}` : ""}
                            </p> 
                            <div><h6>Descriptions: </h6>  {ReactHtmlParser (this.state.descriptions)}  </div>                                                                                 
                            <div><h6>Address:</h6>{` ${immobilier.address}`}</div>                       
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

