import React from 'react';
import { Card, Col, Row, Button } from "react-bootstrap";
import "../style/Global.css";
import "../style/Sheer.css";


const Sheer = ({ image, title, price }) => {
  return (
    <Col xs={6} sm={6} md={4} lg={4} xl={3} xxl={3} className='sheer-col'>
      <Card className="sheer-card text-center d-flex flex-column justify-content-center align-item-center" id="sheer">
        <Card.Img src={image} alt={`${title} image`} className="sheer-image" />
      </Card>
      <Card className="sheer-text">
          <h3>
            {title.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
          ))}
          </h3>
          <h3>
            {price}
          </h3>
      </Card>
    </Col>
  );
};

export default Sheer;
