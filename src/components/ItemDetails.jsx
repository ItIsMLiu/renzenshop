import React from 'react';
import { useParams } from 'react-router-dom';
import sheers from '../sheers.json';
import blockouts from '../blockouts.json';
import roomdarkenings from '../roomdarkenings.json';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../style/Global.css";

const categories = {
  blockouts,
  sheers,
  roomdarkenings
};

const ItemDetails = () => {
  const { category, id } = useParams();
  const numericId = parseInt(id, 10);  // Convert id to number
  const itemList = categories[category] || [];
  const item = itemList.find((item) => item.id === numericId);  // Find by id

  if (!item) {
    return (
        <Container fluid className="py-5 item-details">
            <Row className="custom-row justify-content-center justify-content-center align-item-center mx-auto">
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="details-title-col text-centre">
                    <h1>Item not found</h1>
                </Col>
            </Row>
        </Container>
    );
  };

  return (
    <Container fluid className="py-5 item-details">
        <Row className="custom-row justify-content-center justify-content-center align-item-center mx-auto">
            <Col xs={12} sm={10} md={6} lg={6} xl={6} xxl={5} className="empty-col">
            </Col>
            <Col xs={12} sm={10} md={6} lg={6} xl={6} xxl={5} className="details-title-col text-start">
                <h1>{item.title}</h1>
            </Col>
            <Col xs={12} sm={10} md={6} lg={6} xl={6} xxl={5} className="details-images-col">
                <Row className='py-4'>
                    <Card.Img src={item.image1} alt={`${item.title} curtain image`} />
                </Row>
                <Row className='pb-4'>
                    <Col>
                        <Card.Img src={item.image2} alt={`${item.title} curtain image`} />
                    </Col>
                    <Col>
                        <Card.Img src={item.image3} alt={`${item.title} curtain image`} />
                    </Col>
                </Row>
                <Row className='pb-4'>
                    <Col>
                        <Card.Img src={item.image4} alt={`${item.title} curtain image`} />
                    </Col>
                    <Col>
                        <Card.Img src={item.image5} alt={`${item.title} curtain image`} />
                    </Col>
                </Row>
                <Row className='pb-4'>
                    {item.image6 && (
                        <Card.Img src={item.image6} alt={`${item.title} curtain image`} />
                    )}
                </Row>
                <Row className='pb-4'>
                    {item.image7 && (
                        <Card.Img src={item.image7} alt={`${item.title} curtain image`} />
                    )}
                </Row>
            </Col>
            
            <Col xs={12} sm={10} md={6} lg={6} xl={6} xxl={5} className="details-text-col">
                <Card className="text-start py-4">
                    <p>
                        {item.description.split('\n').map((line, index) => (
                            <span key={index}>
                                {line}
                                <br />
                            </span>
                        ))}
                    </p>
                    <p><strong>Product ID: </strong> {item.type}{item.id}</p>
                    <p><strong>Price: </strong>{item.price} per m width</p>
                    <p><strong>Colour Options:</strong> {item.colourDetails}</p>
                    {item.blockoutPercent && (
                        <p><strong>Blockout %: </strong>{item.blockoutPercent}</p>
                    )}
                    <p><strong>Material: </strong> {item.material}</p>
                    {item.weight && (
                        <p><strong>Weight: </strong>{item.weight} per metre.</p>
                    )}
                    <div className="d-inline-block">
                        <Button variant="primary" className="my-4 me-4" href="/order">
                            Ordering Steps
                        </Button>                        
                        <Button variant="primary" className="my-4 me-4" href="/guide">
                            Buying Guide
                        </Button>
                        <Button variant="primary" className="my-4 me-4" href="/contact">
                            Contact Us
                        </Button>
                    </div>
                </Card>
            </Col>
        </Row>
    </Container>
  );
};

export default ItemDetails;
