import React, { Component } from "react";
import Pagination from "react-js-pagination";
import { Container ,Row, Col, Card, Dropdown, Button, Modal} from 'react-bootstrap';

// import customStysheets from "react-bootstrap/less/bootstrap.less"
// require("bootstrap/less/bootstrap.less");
 
class Example extends Component {
  
    state = {
      activePage: 1,
      secondPage: false,
      show: false,
      close: false,
    };
 
    handlePageChange=(pageNumber)=>{
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }
 
  render() {
    // const [secondPage] = this.state;
    if(this.state.activePage === 2){
        localStorage.setItem("pageNum",2)
    }else{localStorage.removeItem("pageNum")}
    let page = localStorage.getItem("pageNum")
    return (
      <div>

        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={2}
          totalItemsCount={3}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
        {page ? (<h1>Hello page 2</h1>) : (<div><Button
            variant="none"
            onClick={() => this.setState({ show: true })}
          >
            Choose Profile
          </Button>
          <Modal
            show={this.state.show}
            animation={true}
            size="md" className="hadow-lg border">
            <Modal.Header className="bg-danger text-white text-center py-1">
              <Modal.Title className="text-center">
                <h5>Delete</h5>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="py-0 border">
              body   
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
        </div>)}
    <h1>{this.state.activePage}</h1>
      </div>
    );
  }
}

export default Example