import React, { Component } from "react";
import {cloudinary_preset} from '../config'

// class CloudinaryUploadWidget extends Component {
//   componentDidMount() {
//     var myWidget = window.cloudinary.createUploadWidget(
//       {
//         cloudName: "dmxl4n5wy",
//         uploadPreset: cloudinary_preset,
//       },
//       (error, result) => {
//         if (!error && result && result.event === "success") {
//           console.log("Done!", result.info);
//         }
//         else{
//             if(error){
//             alert("Could not upload")
//             console.log(error)
//             }
//         }
//       }
//     );
//     document.getElementById("upload_widget").addEventListener(
//       "click",
//       function () {
//         myWidget.open();
//       },
//       false
//     );
//   }

//   render() {
//     return (
//       <button id="upload_widget" className="cloudinary-button rounded-md p-2 ml-9 mt-4">
//         Upload
//       </button>
//     );
//   }
// }

// export default CloudinaryUploadWidget;
export default function CloudinaryUploadWidget({setUrl,setName}) {
  // const { isAuthenticated } = useAuth0();

  const openWidget = () => {
    // create the widget
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dmxl4n5wy",
        uploadPreset: cloudinary_preset
      },
      (error, result) => {
        if (result.event === "success") {
          if (result.info.is_audio === true) {
            setUrl(result.info.secure_url);
            setName(result.info.original_filename);
            console.log(result.info)
          }
        }
      }
    );
    widget.open(); // open up the widget after creation
  };
  
  return (
    <div className="p-2 text-center bg-blue-700 rounded-full">
     {/*  */}
      <button
        onClick={() => openWidget()} // Updated
        variant="primary"
      >
        Upload Song
      </button>
    </div>
  );
}