import React, { useEffect } from "react";
import PropTypes from "prop-types";

import "./ImagePreview.css";

export const ImagePreview = ({ dataUri, isFullscreen, reset }) => {
  let classNameFullscreen = isFullscreen ? "demo-image-preview-fullscreen" : "";

  async function uploadImage(img) {
    // var url = `https://api.imgbb.com/1/upload?key=25dca1bbdcb2b598cb99b32e3231057&image=${img}`;
    const formdata = new FormData();
    formdata.append("image", img);
    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "https://api.imgbb.com/1/upload?key=2b0c6ed12df9f8afd07e803c67249d0e",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  // useEffect(() => {
  //   uploadImage(dataUri);
  // }, [dataUri]);

  return (
    <div className={"demo-image-preview " + classNameFullscreen}>
      <button style={{ position: "absolute" }} onClick={reset ?? reset()}>
        Reset
      </button>
      <button
        style={{ position: "absolute" }}
        onClick={() => uploadImage(dataUri)}
      >
        Upload
      </button>
      <img src={`data:image/png;base64,${dataUri}`} alt="" />
    </div>
  );
};

ImagePreview.propTypes = {
  dataUri: PropTypes.string,
  isFullscreen: PropTypes.bool,
};

export default ImagePreview;
