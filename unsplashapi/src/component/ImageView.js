import "./ImageView.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageView = (props) => {
  const images = props.imagesArray.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageView;
