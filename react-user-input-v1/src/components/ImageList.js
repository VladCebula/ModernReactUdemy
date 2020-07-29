import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
  const list = props.images.map((image) => {
    return <ImageCard image={image} key={image.id} />;
  });
  // const list = props.images.map(({ description, id, urls }) => {
  //   return <img alt={description} key={id} src={urls.regular} />;
  // });
  return <div className="image-list">{list}</div>;
};
export default ImageList;
