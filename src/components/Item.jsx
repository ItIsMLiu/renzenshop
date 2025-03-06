import React from 'react';
import { Card, Col } from "react-bootstrap";
import { Link } from 'react-router-dom'
import "../style/Global.css";
import "../style/Item.css";


const Item = ({ image1, title, price, category, id, colourOption }) => {
  return (
    <Col xs={6} sm={6} md={4} lg={4} xl={3} xxl={3} className='item-col'>
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
        <p>
          {colourOption}
        </p>
      </Card>
    </Col>
  );
};

export default Item;
