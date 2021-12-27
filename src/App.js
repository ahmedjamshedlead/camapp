import React, { useState } from "react";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import ImagePreview from "./ImagePreview";

function App() {
  const [dataUri, setDataUri] = useState("");

  function handleTakePhotoAnimationDone(dataUri) {
    console.log("takePhoto");
    setDataUri(dataUri);
  }
  return (
    <div>
      {dataUri ? (
        <ImagePreview dataUri={dataUri} reset={() => setDataUri("")} />
      ) : (
        <Camera
          onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
          idealFacingMode={FACING_MODES.ENVIRONMENT}
          imageType={IMAGE_TYPES.JPG}
          imageCompression={0.97}
          isMaxResolution={true}
        />
      )}
    </div>
  );
}

export default App;
