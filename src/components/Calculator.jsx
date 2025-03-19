import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

const Calculator = ({ item }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [curtainType, setCurtainType] = useState("Triple Pinch Pleat");
  const [curtainOption, setCurtainOption] = useState("Single");
  const [price, setPrice] = useState(0);

  const multipliers = {
    "Triple Pinch Pleat": 2,
    "Double Pinch Pleat": 2,
    Eyelets: 2,
    Ripple: 2.5,
  };

  const calculatePrice = () => {
    const X = multipliers[curtainType];
    const G = item.weight;
    const W = width;
    const H = height;
    const C = item.cost;

    const formulaResult =
      ((C * X * W/100) + (55 + 70 * ((G/1000/2.7) * (W*X/100) * (H/100) - 0.5)))/9.014202*2;

    setPrice(formulaResult);
  };

  return (
    <Card className="p-4 mx-auto" style={{ maxWidth: "400px" }}>
      <Card.Body>
        <h2 className="text-center">Price Estimator</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Pole or Track Width (cm):</Form.Label>
            <Form.Control
              type="number"
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Drop Height (cm):</Form.Label>
            <Form.Control
              type="number"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Select Your Heading Options: </Form.Label>
            <div>
              {Object.keys(multipliers).map((type) => (
                <Form.Check
                  key={type}
                  type="radio"
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
            <Form.Label>Single or Pair:</Form.Label>
            <div>
              <Form.Check
                type="radio"
                label="Single"
                name="curtainOption"
                value="Single"
                checked={curtainOption === "Single"}
                onChange={(e) => setCurtainOption(e.target.value)}
              />
              <Form.Check
                type="radio"
                label="Pair"
                name="curtainOption"
                value="Pair"
                checked={curtainOption === "Pair"}
                onChange={(e) => setCurtainOption(e.target.value)}
              />
            </div>
          </Form.Group>
          <Button variant="primary" className="w-100" onClick={calculatePrice}>
            Get Price
          </Button>
        </Form>
        <div className="mt-4 text-center fw-bold">Total Price: £{price.toFixed(0)}</div>
        <p className="text-center">(exclude track, pole, measurement & installation services)</p>
      </Card.Body>
    </Card>
  );
};

export default Calculator;