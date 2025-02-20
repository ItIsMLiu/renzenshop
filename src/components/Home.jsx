import React from 'react';
import { NavLink } from 'react-router-dom';

import "../style/Home.css"
import "../style/Global.css"

function Home() {
  return <>
    <div className="mb-4">
      <div className="container-fluid homeHero">
        <p className="col-12 fs-4">Made to Measure</p>
        <h1 className="col-12 fw-bold">Premium Curtains</h1>
        <p className="col-12 fs-4">Style your space, frame your view.</p>
        <NavLink 
          to="/renzenshop/contact"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          <button className="btn btn-primary btn-lg" type="button" id="herogit">Get in Touch!</button>
        </NavLink>
        
      </div>
    </div>
    
  </>
}

export default Home;
