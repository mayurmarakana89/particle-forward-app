import React, { useState, useEffect } from "react";

import ImageList from "./components/ImageList";
import ExpandedImage from "./components/ExpandedImage";
import "./App.css";

const Loading = () => <div>Loading...</div>;
const Error = () => <div>Error has occured on data fetch</div>;

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [images, setImages] = useState([]);
  const [productTitle, setProductTitle] = useState('');
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        const res = await fetch(
          "https://www.particleforward.com/api/challenge/index.json"
        );

        const { title, images } = await res.json();
        setProductTitle(title)
        setImages(images);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };

    fetchImages();
  }, []);

  return (
    <div className="app">
      {hasError && <Error />}
      {selectedImage ? 
        <ExpandedImage title={productTitle} image={selectedImage} setImage={setSelectedImage} /> :
        isLoading ?
          <Loading /> : 
          <>
            <h1 className="app-header">Image Gallery</h1>
            <div className="wrapper">
              <ImageList images={images} setSelectedImage={setSelectedImage} />
            </div>
          </>
      }
    </div>
  );
};

export default App;
