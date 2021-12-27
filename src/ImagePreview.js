import React from "react";
import PropTypes from "prop-types";

import "./ImagePreview.css";

export const ImagePreview = ({ dataUri, isFullscreen, reset }) => {
  let classNameFullscreen = isFullscreen ? "demo-image-preview-fullscreen" : "";

  return (
    <div className={"demo-image-preview " + classNameFullscreen}>
      <button style={{ position: "absolute" }} onClick={reset ?? reset()}>
        Reset
      </button>
      <img src={dataUri} alt="" />
    </div>
  );
};

ImagePreview.propTypes = {
  dataUri: PropTypes.string,
  isFullscreen: PropTypes.bool,
};

export default ImagePreview;
