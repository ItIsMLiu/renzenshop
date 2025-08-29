import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import sheers from '../sheers.json';
import blockouts from '../blockouts.json';
import roomdarkenings from '../roomdarkenings.json';
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import "../style/Global.css";
import Calculator from './Calculator';

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

    const colourNames = item.colourDetails
        ? item.colourDetails.split(",").map(name => name.trim())
        : [];

    const colours = [
        { pill: item.pill1, enlarge: item.colour1, name: colourNames[0] },
        { pill: item.pill2, enlarge: item.colour2, name: colourNames[1] },
        { pill: item.pill3, enlarge: item.colour3, name: colourNames[2] },
        { pill: item.pill4, enlarge: item.colour4, name: colourNames[3] },
        { pill: item.pill5, enlarge: item.colour5, name: colourNames[4] },
        { pill: item.pill6, enlarge: item.colour6, name: colourNames[5] },
        { pill: item.pill7, enlarge: item.colour7, name: colourNames[6] },
        { pill: item.pill8, enlarge: item.colour8, name: colourNames[7] },
        { pill: item.pill9, enlarge: item.colour9, name: colourNames[8] },
        { pill: item.pill10, enlarge: item.colour10, name: colourNames[9] },
        { pill: item.pill11, enlarge: item.colour11, name: colourNames[10] },
        { pill: item.pill12, enlarge: item.colour12, name: colourNames[11] },
        { pill: item.pill13, enlarge: item.colour13, name: colourNames[12] },
        { pill: item.pill14, enlarge: item.colour14, name: colourNames[13] },
    ].filter(c => c.pill && c.name);

    const mainImage = item.image1;
    const otherImages = [
        item.image2,
        item.image3,
        item.image4,
        item.image5,
        item.image6,
        item.image7,
    ].filter(Boolean); // removes undefined/null

    const chunkArray = (arr, size) => {
        return arr.reduce((acc, _, i) => 
            (i % size ? acc : [...acc, arr.slice(i, i + size)]), []);
    };

    const imageRows = chunkArray(otherImages, 2);
    const colourPalette = chunkArray(colours, 4);

    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedName, setSelectedName] = useState(null);

    const handleImageClick = (img, name = null) => {
        if (!img) return; // nothing to show
        setSelectedImage(img);
        setSelectedName(name);
        setShowModal(true);
    };

    const handleClose = () => {
    setShowModal(false);
    setSelectedImage(null);
    setSelectedName(null);
    };

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
                {/* Main full-width image */}
                {mainImage && (
                    <Row className="py-4">
                        <Card.Img 
                            src={mainImage} 
                            alt={`${item.title} curtain image`} 
                            onClick={() => handleImageClick(mainImage)} 
                            className="clickable-img"
                        />
                    </Row>
                )}

                {/* Rest in pairs */}
                {imageRows.map((row, rowIndex) => (
                    <Row key={rowIndex} className="pb-4">
                        {row.map((src, colIndex) => (
                            <Col key={colIndex}>
                            <Card.Img 
                                src={src} 
                                alt={`${item.title} curtain image`} 
                                onClick={() => handleImageClick(src)} 
                                className="clickable-img"
                            />
                            </Col>
                        ))}
                    </Row>
                ))}
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
                    {item.blockoutPercent && (
                        <p><strong>Blockout %: </strong>{item.blockoutPercent}</p>
                    )}
                    <p><strong>Material: </strong> {item.material}</p>
                    <p><strong>Colour Options:</strong> {/*{item.colourDetails}*/}</p>

                    {colourPalette.map((row, rowIndex) => (
                    <Row xs={4} key={rowIndex} className="pb-4">
                        {row.map((c, colIndex) => (
                        <Col key={colIndex}>
                            <Card.Img 
                            src={c.pill} 
                            alt={`${item.title} colour option`} 
                            onClick={() => handleImageClick(c.enlarge || c.pill, c.name)} 
                            className="clickable-img"
                            />
                            <p className="mt-2 colour-name text-center">{c.name}</p>
                        </Col>
                        ))}
                    </Row>
                    ))}

                    <Calculator item={item} />
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

        <Modal show={showModal} onHide={handleClose} centered size="xl">
            <Modal.Header closeButton className="mx-2 clickable-img-header">
                {selectedName && (
                    <p className="mt-3"><strong>{selectedName}</strong></p>
                )}
            </Modal.Header>
            <Modal.Body className="text-center">
                {selectedImage && (
                    <img 
                        src={selectedImage} 
                        alt="Full size curtain" 
                        style={{ maxWidth: "100%", maxHeight: "100vh" }} 
                    />
                )}
            </Modal.Body>
        </Modal>
    </Container>
  );
};

export default ItemDetails;