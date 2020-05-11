import React, {Component} from 'react';
import axios from "axios";

class ImageUpload extends Component {
    state = {
      files: []
    }
  
    fileSelectedHandler = (e) => {
      this.setState({ files: [...this.state.files, ...e.target.files] })
    //   console.log(this.state.files)
    }
    Submit= (e) => {
        e.preventDefault()
        // console.log(this.state.files)
        let photos = this.state.files
        console.log(photos)

        axios
        .post("/api/photos/upload",this.state)
        .then(res => console.log(res.data)) // re-direct to login on successful register
        .catch(err =>
        console.log("Cached ERROR...")
        );
    }
  
    render() {
      return (
          <div>
        <form>
          <div><h2>Upload images</h2></div>
          <h3>Images</h3>
          <input type="file" multiple onChange={this.fileSelectedHandler} />
        </form>
        <br/>
        <br/>
        <button onClick={this.Submit}>Submit</button>
        </div>

      )
    }
  }

  export default ImageUpload;