import React from 'react';
import "../style/Services.css"
import "../style/Global.css"

function Services() {
  return (
    <div className="container-fluid allContent">
      <div className="row align-items-center" >
        <div className="container-fluid col-lg-2 col-md-12 col-sm-12 secTitleContain"><h2>Portfolio Gallery</h2></div>
        <div className="container-fluid col-lg-10 col-md-12 col-sm-12 section-block">
          <div className="container">
            <div className="row">
              <div className="card col-lg-12 col-md-12 col-sm-12">
                <h5 className="card-title">Description:</h5>
                <p className="card-text">Welcome to my work portfolio showcasing an array of webpage projects crafted with HTML, CSS, and JavaScript. This compilation encapsulates a diverse range of creations, from responsive and interactive websites to dynamic user interfaces. Each project emphasizes the fusion of clean HTML structure, aesthetically pleasing CSS design, and the functionality infused by JavaScript. From engaging landing pages to immersive web applications, this portfolio demonstrates my proficiency in leveraging these core web technologies to create compelling online experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
