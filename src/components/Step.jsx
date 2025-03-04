import React from 'react';
import { Card, Col } from "react-bootstrap";
import "../style/Global.css"
import "../style/Step.css"

const Step = ({ image, title, description }) => {
  return (
    <Col xs={12} sm={10} md={6} lg={6} xl={5} xxl={5} className='step-col'>
      <Card className="step-card text-center d-flex flex-column justify-content-center align-item-center" id="step">
        <Card.Img src={image} alt={`${title} image`} className="step-image" />
        <Card.ImgOverlay className="d-flex flex-column justify-content-center">
        </Card.ImgOverlay>
        <h3 className='step-title'>
          {title.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
          ))}
        </h3>
      </Card>
      <Card className="step-text">
          <p>
            {description.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
          ))}
          </p>
      </Card>
    </Col>
  );
};

export default Step;
