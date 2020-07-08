import React, { useState } from "react";
import "./Slider.css";

function Slider({ reviews }) {
  const [activeReview, setActiveReview] = useState(0);
  const handleClick = (action) => {
    let actions = {
      increase: () => {
        if(activeReview===reviews.length-1) return setActiveReview(0);
        return setActiveReview(activeReview + 1);
      },
      decrease: () => {
        if(activeReview===0) return setActiveReview(reviews.length-1);
        return setActiveReview(activeReview - 1);
      }
    };
    actions[`${action}`]();
  };
  return(
    <div className="slider-container">
      <div className="slider-col">
        <h4 className="slider-name">{reviews.length>0?reviews[activeReview].name:''}</h4>
        <p className="slider-position">{reviews.length>0?reviews[activeReview].position:''}</p>
      </div>
      <div className="slider-col">
        <p className="slider-comment">
          {reviews.length>0?reviews[activeReview].comment:''}
        </p>
      </div>
      <div className="slider-pagination">
        <div className="slider-pagination-counter"><i>{activeReview+1}/{reviews.length>0?reviews.length:'#'}</i></div>
        <button onClick={() => handleClick('increase')} className="slider-button"><i className="material-icons slider-btn">arrow_back</i></button>
        <button onClick={() => handleClick('decrease')} className="slider-button"><i className="material-icons slider-btn">arrow_forward</i></button>
      </div>
    </div>
  )
}

export default Slider;