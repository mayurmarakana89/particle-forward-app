import React from "react";
import ThumbnailImage from "../ThumbnailImage";

const ImageList = ({ images, setSelectedImage }) => {
  return (
    <>
      {images.map((image) => (
        <ThumbnailImage key={image.uri} image={image} setImage={setSelectedImage} />
      ))}
    </>
  );
};

export default ImageList;
