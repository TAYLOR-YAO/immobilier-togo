// import React from "react";
// import firebase from "firebase";
// import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';
// import { ProgressBar} from 'react-bootstrap';
// // Setup Firebase
// firebase.initializeApp({
//   apiKey: process.env.FB_API_KEY,
//   storageBucket: "gs://assime-images.appspot.com"
// });

// class ImagesUpload extends React.Component {
//   state = {
//     filenames: [],
//     downloadURLs: [],
//     isUploading: false,
//     uploadProgress: 0
//   };
 
//   handleUploadStart = () =>
//     this.setState({
//       isUploading: true,
//       uploadProgress: 0
//     });
 
//   handleProgress = progress =>
//     this.setState({
//       uploadProgress: progress
//     });
 
//   handleUploadError = error => {
//     this.setState({
//       isUploading: false
//       // Todo: handle error
//     });
//     console.error(error);
//   };
 
//   handleUploadSuccess = async filename => {
//     const downloadURL = await firebase
//       .storage()
//       .ref("images")
//       .child(filename)
//       .getDownloadURL();
 
//     this.setState(oldState => ({
//       filenames: [...oldState.filenames, filename],
//       downloadURLs: [...oldState.downloadURLs, downloadURL],
//       uploadProgress: 100,
//       isUploading: false
//     }));
//   };
 
//   render() {
    
//     return (
//       <div>
//         <CustomUploadButton
//             accept="image/*"
//             storageRef={firebase.storage().ref('images')}
//             onUploadStart={this.handleUploadStart}
//             onUploadError={this.handleUploadError}
//             onUploadSuccess={this.handleUploadSuccess}
//             onProgress={this.handleProgress}
//             style={{backgroundColor: 'steelblue', color: 'white', padding: 10, borderRadius: 4}}
//             multiple
//         >
//             Select your awesome avatar
//         </CustomUploadButton>
//         <ProgressBar now={this.state.uploadProgress} label={`${this.state.uploadProgress}%`} />
//         {/* <p>Filenames: {this.state.filenames.join(", ")}</p> */}
//         <div>
//           {this.state.downloadURLs.map((downloadURL, i) => {
//             return <img key={i} src={downloadURL} alt="Item View"/>;
//           })}
//         </div>
//       </div>
//     );
//   }
// }
 
// export default ImagesUpload;