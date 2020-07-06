import React from "react";
import "./Slider.css";

function Slider({ reviews }) {
  return(
    <div className="slider-container">
      <div className="slider-col">
        <h4 className="slider-name">{reviews.length>0?reviews[0].name:'Name'}</h4>
        <p className="slider-position">{reviews.length>0?reviews[0].position:'Position'}</p>
      </div>
      <div className="slider-col">
        <p className="slider-comment">
          {reviews.length>0?reviews[0].comment:'Comment'}
        </p>
      </div>
      <div className="slider-pagination">
        <div className="slider-pagination-counter"><i>#/#</i></div>
        <i className="material-icons slider-btn">arrow_back</i>
        <i className="material-icons slider-btn">arrow_forward</i>
      </div>
    </div>
  )
}

export default Slider;