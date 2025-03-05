import React from 'react';
import { Card, Col, Row, Button } from "react-bootstrap";
import "../style/Global.css";
import "../style/Item.css";


const Item = ({ image, title, price, link }) => {
  return (
    <Col xs={6} sm={6} md={4} lg={4} xl={3} xxl={3} className='item-col'>
      <Card className="item-card d-flex flex-column" id="item">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Card.Img src={image} alt={`${title} image`} className="item-image" />
        </a>
      </Card>
      <Card className="item-text">
        <a href={link} target="_blank" rel="noopener noreferrer" className="custom-link mb-1">
          <h3 className='mb-0'>
            {title}
          </h3>
        </a>
        <p>
          {price}
        </p>
      </Card>
    </Col>
  );
};

export default Item;
