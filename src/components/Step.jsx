import React from 'react';
import { Card, Col, Row, Button } from "react-bootstrap";
import "../style/Global.css";
import "../style/Step.css";

const Step = ({ image, title, description, link1, buttonText1, link2, buttonText2 }) => {
  return (
    <Row className="custom-row justify-content-center align-item-center mx-auto">
      {/* Image Card */}
      <Col xs={12} sm={10} md={6} lg={6} xl={6} xxl={5} className="step-col">
        <Card className="step-card text-center d-flex flex-column justify-content-center align-items-center" id="step">
          <Card.Img src={image} alt={`${title} image`} className="step-image" />
          <Card.ImgOverlay className="d-flex flex-column justify-content-center"></Card.ImgOverlay>
          <h3 className="step-title">
            {title.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </h3>
        </Card>
      </Col>

      {/* Text Card */}
      <Col xs={12} sm={10} md={6} lg={6} xl={6} xxl={7} className="step-col d-flex flex-column justify-content-center align-item-center ">
        <Card className="step-text p-3">
          <Card.Body>
            <Card.Text>
              {description.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
              {link1 && (
                <Button variant="primary" className="my-4 me-4" href={link1} target="_blank">
                  {buttonText1}
                </Button>
              )}
              {link2 && (
                <Button variant="primary" className="my-4 me-4" href={link2} target="_blank">
                  {buttonText2}
                </Button>
              )}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Step;
