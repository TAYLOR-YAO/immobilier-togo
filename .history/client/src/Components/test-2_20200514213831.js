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
        <div id="responsive" class="modal hide fade" tabindex="-1" data-width="760">
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
    <h3>Responsive</h3>
  </div>
  <div class="modal-body">
    <div class="row-fluid">
      <div class="span6">
        <h4>Some Input</h4>
        <p><input type="text" class="span12"/></p>
        <p><input type="text" class="span12"/></p>
        <p><input type="text" class="span12"/></p>
        <p><input type="text" class="span12"/></p>
      </div>
    </div>
  </div>
  <div class="modal-footer">
    <button type="button" data-dismiss="modal" class="btn">Close</button>
    <button type="button" class="btn btn-primary">Save changes</button>
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