import React from 'react';
import { useParams } from 'react-router-dom';
import sheers from '../sheers.json';
import blockouts from '../blockouts.json';
import lightfilterings from '../lightfilterings.json';
import { Row, Col, Card } from "react-bootstrap";
import "../style/Global.css";

const categories = {
  blockouts,
  sheers,
  lightfilterings
};

const ItemDetails = () => {
  const { category, id } = useParams();
  const numericId = parseInt(id, 10);  // Convert id to number
  const itemList = categories[category] || [];
  const item = itemList.find((item) => item.id === numericId);  // Find by id

  if (!item) {
    return <h2>Item not found</h2>;
  }

  return (
    <div className="item-details">
      <h1>{item.title}</h1>
      <Card.Img src={item.image1} alt={`${item.title} image`} />
      <p>{item.price}</p>
      <p>{item.description}</p>
    </div>
  );
};

export default ItemDetails;
