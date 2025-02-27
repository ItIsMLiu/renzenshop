import React from 'react';
import "../style/Global.css"
import "../style/Step.css"

function Step(props) {
  return <>
    <div className="card col-lg-6 col-md-6 col-sm-12 img-link" id="step">
      <img src={props.image} className="card-img" alt={`${ props.title } step image`}></img>
      <div className="card-img-overlay">
        <div className="subheading">
          <h5 className="card-title">{ props.title }</h5>
          <p className="card-text">
            <a href={`${ props.link }`} class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"> {props.link}</a>
          </p>
        </div>
      </div>
    </div>
  </>
}

export default Step;
