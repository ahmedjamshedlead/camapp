import React, { useState } from "react";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

function App() {
  const [image, setImage] = useState(undefined);

  function handleTakePhoto(dataUri) {
    // Do stuff with the photo...
    // console.log("takePhoto", dataUri);
    setImage(dataUri);
  }

  return image === undefined ? (
    <Camera
      idealFacingMode={FACING_MODES.ENVIRONMENT}
      imageType={IMAGE_TYPES.JPG}
      imageCompression={0.97}
      isMaxResolution={true}
      onTakePhoto={(dataUri) => {
        handleTakePhoto(dataUri);
      }}
    />
  ) : (
    <>
      <button title="reset" onClick={() => setImage(undefined)}>
        Reset!
      </button>
      <img alt="captured" src={image} width={400} />
    </>
  );
}

export default App;
