import React, { useState } from "react";
import { Card, Form, Button, Modal } from "react-bootstrap";
import "../style/Calculator.css";

const Calculator = ({ item }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [unit, setUnit] = useState("cm");
  const [curtainType, setCurtainType] = useState("Triple Pinch Pleat");
  const [curtainOption, setCurtainOption] = useState("Single");
  const [price, setPrice] = useState(0);
  const [modalContent, setModalContent] = useState([]); 
  const [modalTitle, setModalTitle] = useState("");
  const [modalDescription, setModalDescription] = useState("");
  const [modalImage, setModalImage] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const multipliers = {
    "Triple Pinch Pleat": 2,
    "Double Pinch Pleat": 2,
    Eyelets: 2,
    Ripple: 2.5,
  };

  const convertToCm = (value) => {
    switch (unit) {
      case "inches":
        return value * 2.54;
      case "mm":
        return value / 10;
      default:
        return value; 
    }
  };

  const calculatePrice = () => {
    const X = multipliers[curtainType];
    const G = item.weight;
    const W = convertToCm(width);
    const H = convertToCm(height);
    const C = item.cost;

    const formulaResult =
      ((C * X * W / 100) + (55 + 70 * ((G / 1000 / 2.7) * (W * X / 100) * (H / 100) - 0.5))) / 9.014202 * 2;

    setPrice(formulaResult);
  };

  const handleModalShow = (title, description, contentArray, imageUrlArray) => {
    setModalTitle(title);
    setModalDescription(description);
    setModalContent(contentArray);
    setModalImage(imageUrlArray);
    setShowModal(true);
  };

  return (
    <Card style={{ maxWidth: "400px" }} className="px-0">
      <Card.Body className="px-0">
        <h2 className="">Price Estimator</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label><strong>Enter your measurements:</strong>
              <Button variant="link" className="p-0 ms-2" onClick={() => handleModalShow("How to measure?", 
              "", 
              ["7.A. Pole Length or Track Length", "7.B. Chosen Curtain Drop Length - Measure from underside of pole or sliders to: 7.B.1. to the top of the sill; or 7.B.2. to the bottom of the sill; or 7.B.3. to the top of the radiator; or 7.B.4. to the top of the floor."],
              ["/images/HowToMeasure.jpg"])}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-info-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
              </Button>
            </Form.Label>
            <div>
              {["cm", "inches", "mm"].map((u) => (
                <Form.Check
                  key={u}
                  type="radio"
                  id={u}
                  label={u}
                  name="unit"
                  value={u}
                  checked={unit === u}
                  onChange={(e) => setUnit(e.target.value)}
                />
              ))}
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label><strong>Pole or Track Length ({unit}):</strong></Form.Label>
            <Form.Control
              type="number"
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
              className="calInputBox"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label><strong>Curtain Drop Length ({unit}):</strong></Form.Label>
            <Form.Control
              type="number"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              className="calInputBox"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              <strong>Select Your Heading Option:</strong>
              <Button variant="link" className="p-0 ms-2" onClick={() => handleModalShow("Select your heading options:", 
                "", 
                ["3.A. Triple Pinch Pleat (Created with metal 4-Prong drapery hooks, suitable for tracks or poles with rings).", 
                "3.B. Double Pinch Pleat (Fixed folds, hung using adjustable plastic hooks, suitable for tracks or poles with rings).", 
                "3.C. Eyelets (for poles only).", 
                "3.D. Ripple (for special ripple tracks only)."], 
                ["/images/HeadingStyle-1.jpg", 
                "/images/HeadingStyle-2.jpg"])}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-info-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </Button>
            </Form.Label>
            <div>
              {Object.keys(multipliers).map((type) => (
                <Form.Check
                  key={type}
                  type="radio"
                  id={type}
                  label={type}
                  name="curtainType"
                  value={type}
                  checked={curtainType === type}
                  onChange={(e) => setCurtainType(e.target.value)}
                />
              ))}
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              <strong>Single or Double Panel:</strong>
              <Button variant="link" className="p-0 ms-2" onClick={() => handleModalShow("Choose a Single Curtain or a Double:", 
              "Fitting a double or just one panel, the measuring method remains the same. Just measure the width of your pole or track and provide that measurement. From there, we'll determine the appropriate fabric fullness based on the width you provide.", 
              ["4.A. Choose 'Single' for one curtain panel - Best when there is room on only one side of your window. We'll use the amount of fabric based on your track or pole width.", "4.B. Choose 'Double' for two panels that meet in the middle - Ideal when there is room on both sides of your window. We'll use the same amount of fabric based on your track or pole width, but split the fabric into two panels."],
              ["/images/SingleDoublePanel.jpg"])}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-info-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
              </Button>
            </Form.Label>
            <div>
              <Form.Check
                type="radio"
                id="singleOption"
                label="Single"
                name="curtainOption"
                value="Single"
                checked={curtainOption === "Single"}
                onChange={(e) => setCurtainOption(e.target.value)}
              />
              <Form.Check
                type="radio"
                id="doubleOption"
                label="Double"
                name="curtainOption"
                value="Double"
                checked={curtainOption === "Double"}
                onChange={(e) => setCurtainOption(e.target.value)}
              />
            </div>
          </Form.Group>

          <Button variant="primary" className="w-100" onClick={calculatePrice}>
            Get Price
          </Button>
        </Form>
        <div className="mt-4 fw-bold">Total Price: £{price.toFixed(0)}</div>
        <p>(exclude track, pole, measurement & installation services)</p>
      </Card.Body>

      {/* Bootstrap Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton className="mx-2">
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="mx-2">
          {modalDescription}
          {modalImage.map((image, index) => (
              <img 
                Key={index}
                src={image} 
                alt="Modal" 
                style={{ width: '100%', marginBottom: '10px' }} />
            ))}
          <ul>
            {modalContent.map((content, index) => (
              <li key={index}>{content}</li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer className="mx-2">
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};

export default Calculator;
