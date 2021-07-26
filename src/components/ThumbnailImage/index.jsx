import React from "react";
import "./ThumbnailImage.css";

const ThumbnailImage = ({
    image,
    setImage
  }) => {
    return (
      <div
        className="image-container"
        onClick={() => setImage(image.uri)}
        key={image.uri}
      >
        <img src={`${image.uri}_2.jpg`} alt={image.alt || ''} />
      </div>
    );
  }

export default ThumbnailImage;
