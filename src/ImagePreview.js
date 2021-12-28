import React, { useState } from "react";
import PropTypes from "prop-types";

import "./ImagePreview.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BeatLoader, BarLoader } from "react-spinners";

const url =
  "https://api.imgbb.com/1/upload?key=2b0c6ed12df9f8afd07e803c67249d0e";

export const ImagePreview = ({ dataUri, isFullscreen, reset }) => {
  let classNameFullscreen = isFullscreen ? "demo-image-preview-fullscreen" : "";
  const [copied, setCopied] = useState(false);
  const [value, setValue] = useState("");
  const [loader, setLoader] = useState(false);

  async function uploadImage(img) {
    const formdata = new FormData();
    formdata.append("image", img);
    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setValue(result.data.display_url);
        setLoader(false);
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <>
      <div className={"demo-image-preview " + classNameFullscreen}>
        <div
          style={{
            margin: "2px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => {
              setValue("");
              setCopied(false);
              reset && reset();
            }}
            className="button"
          >
            Reset
          </button>
          {value !== "" ? (
            <div style={{ margin: "5px" }}>
              <input
                value={value}
                onChange={({ target: { value } }) => setValue(value)}
                className="Input"
              />
              <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
                {copied ? (
                  <button disabled className="button2">
                    Copy
                  </button>
                ) : (
                  <button className="button1">Copy</button>
                )}
              </CopyToClipboard>
            </div>
          ) : (
            <div style={{ margin: "5px" }}>
              <button
                className="button"
                onClick={() => {
                  setLoader(true);
                  const bs = /base64,(.+)/.exec(dataUri)[1];
                  uploadImage(bs);
                }}
              >
                Upload
              </button>
              {loader ? <BeatLoader loading size={12} /> : null}
            </div>
          )}
        </div>
        <img src={dataUri} alt="" />
      </div>
    </>
  );
};

ImagePreview.propTypes = {
  dataUri: PropTypes.string,
  isFullscreen: PropTypes.bool,
};

export default ImagePreview;
