import React, { Component } from "react";
import Pagination from "react-js-pagination";
// import customStysheets from "react-bootstrap/less/bootstrap.less"
// require("bootstrap/less/bootstrap.less");
 
class Example extends Component {
  
    state = {
      activePage: 1,
      secondPage: false
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
        <div id="responsive" className="modal hide fade" tabindex="-1" data-width="760">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h3>Responsive</h3>
          </div>
          <div className="modal-body">
            <div className="row-fluid">
              <div className="span6">
                <h4>Some Input</h4>
                <p><input type="text" className="span12"/></p>
                <p><input type="text" className="span12"/></p>
                <p><input type="text" className="span12"/></p>
                <p><input type="text" className="span12"/></p>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" data-dismiss="modal" className="btn">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
        

        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={2}
          totalItemsCount={3}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
        {page ? (<h1>Hello page 2</h1>) : (<h1>Hello page 1</h1>)}
    <h1>{this.state.activePage}</h1>
      </div>
    );
  }
}

export default Example