import React, {Component} from 'react';
import './RegisterHouse.css';
import { Container ,Row, Col, Button, Form} from 'react-bootstrap';
import CurrencyInput from 'react-currency-input';
import {regions, villes, immoiliers, cours, nombreChambres, aventages, services} from "../Feeds/feeds"
import Select from 'react-select';
import firebase from "firebase";
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';
import { ProgressBar} from 'react-bootstrap';
// Setup Firebase
firebase.initializeApp({
  apiKey: process.env.FB_API_KEY,
  storageBucket: "gs://immo-togo.appspot.com"
});
const customStyles = {
    input: styles => {
      return {
        ...styles,
        height: '1.6em'
    };
  }
}

class RegisterHouse extends Component {
state = {
    titre: " ",
    address:" ",
    owner:" ",
    images:[],
    quartier:" ",
    villes:" ",
    descriptions:"",
    autreInfos:"",
    amount: "0.00 cfa",
    selectedRegion: null,
    selectedCity: null,
    selectedImmobilier: null,
    selectedCours:null,
    selectedNombreChambres: null,
    selectedAventages: null,
    selectedServices: null,
    filenames: [],
    downloadURLs: [],
    isUploading: false,
    uploadProgress: 0

};

// ================================= File Upload Functions ======================================

handleUploadStart = () =>
    this.setState({
      isUploading: true,
      uploadProgress: 0
    });
 
  handleProgress = progress =>
    this.setState({
      uploadProgress: progress
    });
 
  handleUploadError = error => {
    this.setState({
      isUploading: false
      // Todo: handle error
    });
    console.error(error);
  };
 
  handleUploadSuccess = async filename => {
    const downloadURL = await firebase
      .storage()
      .ref("immo=images")
      .child(filename)
      .getDownloadURL();
 
    this.setState(oldState => ({
      filenames: [...oldState.filenames, filename],
      downloadURLs: [...oldState.downloadURLs, downloadURL],
      uploadProgress: 100,
      isUploading: false
    }));
  };


// ==============================================================================================


handleAmountChange = (event, maskedvalue, floatvalue) =>{
    this.setState({amount: maskedvalue});
}
handleRegionChange= (selectedRegion) => {
    this.setState({ selectedRegion });
}
handleVillesChange= (selectedCity) => {
    this.setState({ selectedCity });
}
handleImmobilierChange= (selectedImmobilier) => {
    this.setState({ selectedImmobilier });
}
handleCoursChange= (selectedCours) => {
    this.setState({ selectedCours });
}
handleNombreChambresChange= (selectedNombreChambres) => {
    this.setState({ selectedNombreChambres });
}
handleAventageChange= (selectedAventages) => {
    this.setState({ selectedAventages });
}
handleServicesChange= (selectedServices) => {
    this.setState({ selectedServices });
}

handleInputsChanges = event => {
    const { target: { name, value } } = event;
    this.setState({ [name]: value });
}
  
render() {
    const { selectedRegion, selectedCity, selectedImmobilier,selectedCours,selectedNombreChambres, selectedAventages, selectedServices} = this.state;
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
                    <div style={{textAlign:"left"}}>
                        <Row>
                            <Col sm={6}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Titre</Form.Label>
                                    <Form.Control type="text" placeholder="Ex: Maison A Vndre "  value={this.state.titre} name="titre" onChange={this.handleInputsChanges}/>
                                </Form.Group>
                            </Col> 
                            <Col sm={6}>
                                <Form.Group controlId="exampleForm.ControlSelect1" >
                                    <Form.Label>Type d'Immobilier</Form.Label>
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
                        </Row>
                        <Row>
                             <Col sm={6}>
                                <Form.Group controlId="exampleForm.ControlSelect1" >
                                    <Form.Label>Type de service</Form.Label>
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
                            <Col sm={6}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Prix</Form.Label>
                                    <br/>
                                    <CurrencyInput suffix=" cfa"  decimalSeparator="," thousandSeparator="."  value={`${this.state.amount} + CFA`} onChangeEvent={this.handleAmountChange}/>
                                </Form.Group>                            
                                </Col>                          
                            </Row>
                            <Row>
                                <Col sm={6}>
                                    <Form.Group controlId="exampleForm.ControlSelect1" >
                                        <Form.Label>Numbre de Chambres</Form.Label>
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
                                        <Form.Label>Types de cours</Form.Label>
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
                        <Form>
                            <Row>
                                <Col sm={6}>
                                    <Form.Group controlId="exampleForm.ControlSelect1" >
                                        <Form.Label>Region</Form.Label>
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
                                    <Form.Label>Ville & Village</Form.Label>
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
                                        <Form.Label>Quatier</Form.Label>
                                        <Form.Control type="text" placeholder="Ex: Adidogomé " value={this.state.quartier} name="quartier" onChange={this.handleInputsChanges}/>
                                    </Form.Group>
                                </Col>
                                <Col sm={6}>
                                <Form.Group controlId="exampleForm.ControlSelect1" >
                                        <Form.Label>Aventages</Form.Label>
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
                            {/* <Row>
                                <Col sm={6}>
                                    <Form.Group controlId="exampleForm.ControlSelect1" >
                                        <Form.Label>Aventages</Form.Label>
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
                            </Row> */}

                            <Row>
                                <Col sm={6}>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Detailles de l'immobilier</Form.Label>
                                        <Form.Control as="textarea" rows="3" placeholder="Ex: Villa a 3 chambre sallons WC douce interne..."/>
                                    </Form.Group>
                                </Col> 
                                <Col sm={6}>
                                    <Form.Group controlId="exampleForm.ControlTextarea2">
                                        <Form.Label>Donner l'address</Form.Label>
                                        <Form.Control as="textarea" rows="3" placeholder="Ex: Maison Christian rue victoire, Adidogome Togo"/>
                                    </Form.Group>
                                </Col>                           
                            </Row>
                            <Row>
                            <Col sm={6}>
                            <CustomUploadButton
                                accept="image/*"
                                storageRef={firebase.storage().ref('immo=images')}
                                onUploadStart={this.handleUploadStart}
                                onUploadError={this.handleUploadError}
                                onUploadSuccess={this.handleUploadSuccess}
                                onProgress={this.handleProgress}
                                style={{backgroundColor: 'steelblue', color: 'white', padding: 10, borderRadius: 4}}
                                multiple>
                                Ajoutez Les Images
                            </CustomUploadButton>
                            <ProgressBar now={this.state.uploadProgress} label={`${this.state.uploadProgress}%`} />

                            </Col> 
                            
                            <Col sm={6}>
                               
                                <Button>Poster</Button>                                       
                                                                        
                            </Col>                            
                        </Row>  
                        </Form>
                    </div>
                </Col>
                <Col sm={6}>
                    <div style={{textAlign:"left"}}>
                        <Row>
                            <Col sm={6}>
                                <p><strong>Type d'immobilier: </strong> {selectedImmobilier ? selectedImmobilier.value : ""}</p>                               
                            </Col> 
                            <Col sm={6}>
                                <p><strong>Titre: </strong> {` ${this.state.titre}`}</p>                              
                            </Col>                            
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <p><strong>Type de Service: </strong> {selectedServices ? selectedServices.value : ""}</p>                                   
                            </Col> 
                            <Col sm={6}>
                                <p><strong>Prix: </strong> {` ${this.state.amount}`}</p>                        
                            </Col>                            
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <p><strong>Type de cours: </strong> {` ${selectedCours ? selectedCours.value : ""}`}</p>                                                          
                            </Col> 
                            <Col sm={6}>
                                <p><strong>Region: </strong> {selectedRegion ? selectedRegion.value : ""}</p>                                                        
                            </Col>                            
                        </Row>                        
                        <Row>
                            <Col sm={6}>
                                <p><strong>Ville & Village: </strong> {selectedCity ? selectedCity.value : ""}</p>                                     
                            </Col> 
                            <Col sm={6}>
                                <p><strong>Quartier: </strong> {` ${this.state.quartier}`} </p>                                                          
                            </Col>                            
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <p><strong>Nobre de Piece(s): </strong> {selectedNombreChambres ? selectedNombreChambres.value : ""}</p>                    
                            </Col> 
                            <Col sm={6}>
                                <p><strong>Aventale du lieu: </strong> {selectedAventages? selectedAventages.map(aventage =>{
                                return ` ${aventage.value} |`
                                }) : ""}
                                </p>                       
                            </Col>                            
                        </Row> 
                        <Row>
                            <Col sm={12}>
                                <strong>Images</strong>
                                <div>
                                    {this.state.downloadURLs.map((downloadURL, i) => {
                                        return <img key={i} src={downloadURL} alt="Item View" style={{height:"120px"}}/>;
                                    })}
                                </div>                                       
                            </Col>                             
                        </Row>                      
                    </div>
                </Col>
            </Row>
        </Container>
    </div>  
  }
}

export default RegisterHouse;
