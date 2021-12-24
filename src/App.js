import React from "react";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

function App() {
  function handleTakePhoto(dataUri) {
    // Do stuff with the photo...
    console.log("takePhoto", dataUri);
  }

  return (
    <Camera
      idealFacingMode={FACING_MODES.ENVIRONMENT}
      imageType={IMAGE_TYPES.JPG}
      imageCompression={0.97}
      isMaxResolution={true}
      onTakePhoto={(dataUri) => {
        handleTakePhoto(dataUri);
      }}
    />
  );
}

export default App;
