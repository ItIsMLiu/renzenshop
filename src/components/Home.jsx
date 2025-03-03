import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

import "../style/Home.css";
import "../style/Global.css";

function Home() {
  return (
    <Container fluid className="homeHero">
      <p>Made to Measure</p>
      <h1>Premium Curtains</h1>
      <p>Style your space, frame your view.</p>
      <NavLink to="/renzenshop/contact" end>
        <Button variant="primary" size="lg" id="herogit">
          Get in Touch!
        </Button>
      </NavLink>
    </Container>
  );
}

export default Home;