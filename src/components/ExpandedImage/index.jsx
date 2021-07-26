import React from "react";
import "./ExpandedImage.css";

const ExpandedImage = ({ title, image, setImage }) => {
  return (
    <div className={"expanded-image"}>
      <div className={"black-bar expanded-image-header"}>
        <span
          data-testid={"expanded-image-title"}
          className={"expanded-image-title"}
        >
          {title}
        </span>
        <button
          data-testid={"expanded-close-btn"}
          onClick={() => setImage("")}
          className={"expanded-close-button"}
        >
          Close
        </button>
      </div>
      <img src={`${image}_27.jpg`} alt="" />
      <div className={"black-bar expanded-image-footer"}></div>
    </div>
  );
};

export default ExpandedImage;
