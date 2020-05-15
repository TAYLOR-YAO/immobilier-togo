import React, {Component} from 'react';
import CKEditor from "react-ckeditor-component";
import ReactHtmlParser from 'react-html-parser'; 
import './RegisterHouse.css';
import axios from "axios";
import { Row, Col, Form,Container} from 'react-bootstrap';
import CurrencyInput from 'react-currency-input';
import {regions, villes, immoiliers, cours, nombreChambres, services} from "../Feeds/feeds";
import Select from 'react-select';
import firebase from "firebase";
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';
import { ProgressBar} from 'react-bootstrap';
import Pagination from "react-js-pagination";
firebase.initializeApp({
  apiKey: process.env.FB_API_KEY,
  storageBucket: "gs://immo-togo.appspot.com"
});
const customStyles = {
    input: styles => {
      return {
        ...styles,
        height: '1.5em !inportant',
        color:"red"
    };
  }
}

class RegisterHouse extends Component {
    state = {
        titre: "",
        address:" ",
        seller:" Taylor Yao",
        quartier:" ",
        ville:" ",
        sellerContacts:"+1 4048629078",
        sellerEmail:"yaotaylor@gmail.com",
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
        filenames: [],
        downloadURLs: [],
        documents:[],
        images:[],
        isUploading: false,
        uploadProgress: 0,
        docsUploadProgress:0,
        docNum: 1,
        content: 'content',
        activePage: 1,
        secondPage: false
    };
    // ================================TEXT Editore=================================================
    updateContent(newContent) {
        this.setState({
            descriptions: newContent
        })
    }
    handlePageChange=(pageNumber)=>{
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }
    onEditorChange=(event)=>{
      console.log("onChange fired with event info: ", event);
      var newContent = event.editor.getData();
      this.setState({
        descriptions: newContent
      })
    }
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
     
    handleDocsProgress = progress =>
        this.setState({
        docsUploadProgress: progress
        
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
        .ref("immo-togo")
        .child(filename)
        .getDownloadURL();
    
        this.setState(oldState => ({
        filenames: [...oldState.filenames, filename],
        images: [...oldState.images, downloadURL],
        uploadProgress: 100,
        isUploading: false
        }));
    };
    handleDocUploadSuccess = async filename => {
        const downloadURL = await firebase
        .storage()
        .ref("immo-documents")
        .child(filename)
        .getDownloadURL();
        this.setState(oldState => ({
        filenames: [...oldState.filenames, filename],
        documents: [...oldState.documents, downloadURL],
        docsUploadProgress: 100,
        isUploading: false
        }));
    };
// ==============================================================================================
    handleAmountChange = (event, maskedvalue, floatvalue) =>{
        console.log(maskedvalue)
        this.setState({amount: maskedvalue});
    }
    handleRegionChange= (selectedRegion) => {
        this.setState({ selectedRegion: selectedRegion, region: selectedRegion.value });
    }
    handleVillesChange= (selectedCity) => {
        this.setState({ selectedCity: selectedCity, ville: selectedCity.value });
    }
    handleImmobilierChange= (selectedImmobilier) => {
        this.setState({ selectedImmobilier: selectedImmobilier, immobilier:selectedImmobilier.value  });
    }
    handleCoursChange= (selectedCours) => {
        this.setState({ selectedCours: selectedCours, cours: selectedCours.value });
    }
    handleNombreChambresChange= (selectedNombreChambres) => {
        this.setState({ selectedNombreChambres: selectedNombreChambres, chambres: selectedNombreChambres.value });
    }
    handleServicesChange= (selectedServices) => {
        this.setState({ selectedServices: selectedServices, services: selectedServices.value });
    }

    handleInputsChanges = event => {
        const { target: { name, value } } = event;
        this.setState({ [name]: value });
    }
    
    handleISubmit = event => {
        event.preventDefault()
        axios.post("/api/poster-vente", this.state).then(response=>{      
            console.log(response.data);
        });
    }

    render() {
        const { selectedRegion, selectedCity, selectedImmobilier,selectedCours,selectedNombreChambres, selectedAventages, selectedServices} = this.state;
        if(this.state.activePage === 1){
            localStorage.setItem("pageNum",2)
        }else{localStorage.removeItem("pageNum")}
        let page = localStorage.getItem("pageNum")
    return <Container>

            <div style={{margin:"30px"}}>
                {/* <br/> */}
                <div>
                    <h3>Enregistre Ton Immobillier</h3>
                    <hr/>
                </div>
                <br/>
                <Row>
                    <Col sm={6}>
                        <div style={{textAlign:"left"}}>  
                        {page ? 
                            (<Row>
                                <Col sm={12}>
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
                                    </Col>
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

                                </Row>
                                <Row>
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
                                </Row>
                                <Row>
                                    
                                    <Col sm={6}>
                                        <Row>
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
                                        <Col sm={6}>
                                        <Form.Group controlId="exampleForm.ControlSelect1" >
                                            <Form.Label>Quatier</Form.Label>
                                            <Form.Control type="text" placeholder="Ex: Adidogomé " value={this.state.quartier} name="quartier" onChange={this.handleInputsChanges}/>
                                        </Form.Group>
                                        </Col>
                                        </Row> 
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group controlId="exampleForm.ControlTextarea2">
                                            <Form.Label>Address</Form.Label>
                                            <Form.Control placeholder="Ex: Maison Christian rue victoire, Adidogome Togo" name="address" value={this.state.address} onChange={this.handleInputsChanges}/>
                                        </Form.Group>
                                    </Col>                            
                                </Row>
                                    
                                </Col>
                            </Row>) 
                            : 
                            (<Row>
                                <Col sm={12}>
                                <Row>
                                    <Col sm={12}>
                                        <CKEditor 
                                            activeClass="p5" 
                                            content={this.state.descriptions} 
                                            events={{
                                                "blur": this.onBlur,
                                                "afterPaste": this.afterPaste,
                                                "change": this.onEditorChange
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                {/* =============================IMAGES UPLOAD====================================== */}

                                    <Col sm={6}>
                                        <CustomUploadButton
                                            accept="image/*"
                                            storageRef={firebase.storage().ref('immo-togo')}
                                            onUploadStart={this.handleUploadStart}
                                            onUploadError={this.handleUploadError}
                                            onUploadSuccess={this.handleUploadSuccess}
                                            onProgress={this.handleProgress}
                                            style={{backgroundColor: 'steelblue', color: 'white', padding: 5, borderRadius: 5, marginTop:"10px"}}
                                            multiple>
                                            Ajoutez les images
                                            <ProgressBar now={this.state.uploadProgress} label={`${this.state.uploadProgress}%`} />
                                        </CustomUploadButton>
                                    </Col>
                            {/* ===================================DOCUMENTS UPLOAF====================================== */}

                                    <Col sm={6}>
                                        <CustomUploadButton
                                            accept="*"
                                            storageRef={firebase.storage().ref('immo-documents')}
                                            onUploadStart={this.handleUploadStart}
                                            onUploadError={this.handleUploadError}
                                            onUploadSuccess={this.handleDocUploadSuccess}
                                            onProgress={this.handleDocsProgress}
                                            style={{backgroundColor: 'steelblue', color: 'white', padding: 5, borderRadius: 4,marginTop:"10px"}}
                                            multiple>
                                            Documents importants
                                            <ProgressBar now={this.state.docsUploadProgress} label={`${this.state.docsUploadProgress}%`} />  
                                        </CustomUploadButton>
                                    </Col>
                            {/* ======================================================================================= */}
                                </Row>
                                </Col>
                            </Row>)}
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div style={{textAlign:"left"}}>
                            <Row>
                                <Col sm={8}>
                                    <h3>Informations fournies</h3>                         
                                </Col> 
                                <Col sm={4}>
                                    <button className="button" onClick={this.handleISubmit}>
                                        <span>Poster</span>
                                    </button>                  
                                </Col>                            
                            </Row>  
                            <hr/>  
                            {
//======================================= If Statment Below============================================

                            page ? 
                                (<div>                                  
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
                                            <p><strong>Address: </strong> {` ${this.state.address}`} </p>                    
                                        </Col>  
                                        <Col sm={12}>
                                            <strong>Descriptions: </strong>
                                            {ReactHtmlParser (this.state.descriptions)}                                                        
                                        </Col>                           
                                    </Row> 
                                </div>
                                ) 
                                :
//======================================= Else Statment Below============================================

                                (<div>
                                <Row>
                                <Col sm={10}>
                                    <strong>Images:</strong>
                                    <div style={{borderRight:"3px double #000"}}>
                                        {this.state.images.map((downloadURL, i) => {
                                            return <img key={i} src={downloadURL} alt="Item View" style={{height:"120px"}}/>;
                                        })}
                                    </div>   
                                </Col>                             
                                <Col sm={2}>
                                    <strong>Documents:</strong>
                                    <div>
                                        {this.state.documents.map((documentURL, i) => {                              
                                            return  (<a  key={i} href={documentURL} download="w3logo" >{`${ i+1} - document `}</a> )  
                                        })}
                                    </div>   
                                </Col>                             
                            </Row>         
                            </div>
                            )
                            }                      
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>  
    }
}

export default RegisterHouse;
