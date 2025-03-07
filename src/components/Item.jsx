import React from 'react';
import { Card, Col } from "react-bootstrap";
import { Link } from 'react-router-dom'
import "../style/Global.css";
import "../style/Item.css";


const Item = ({ image1, title, price, category, id, colourProducts }) => {
  const colors = colourProducts ? colourProducts.split(",").map(color => color.trim()) : [];
  return (
    <Col xs={12} sm={6} md={4} lg={4} xl={3} xxl={2} className='item-col'>
      <Card className="item-card d-flex flex-column" id="item">
        <Link to={`/renzenshop/item/${category}/${id}`} target="_blank" rel="noopener noreferrer">
          <Card.Img src={image1} alt={`${title} curtain image`} className="item-image" />
        </Link>
      </Card>
      <Card className="item-text">
        <Link to={`/renzenshop/item/${category}/${id}`} target="_blank" rel="noopener noreferrer" className="custom-link mb-1">
          <h3 className='mb-0'>
            {title}
          </h3>
        </Link>
        <p className='mb-0'>
          {price} per m width
        </p>
        <div className="d-flex flex-wrap gap-2 mt-2 mb-3">
          {colors.map((color, index) => (
            <span
              key={index}
              className="d-inline-block p-2 border rounded-circle"
              style={{
                backgroundColor: color.toLowerCase(),
                color: ["beige", "cream", "white"].includes(color.toLowerCase()) ? "black" : "white"
              }}
            >
            </span>
          ))}
        </div>
      </Card>
    </Col>
  );
};

export default Item;
