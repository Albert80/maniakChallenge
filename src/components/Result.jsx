import React from "react";
import "./Result.css";

function Result(props) {
  return(
    <div className="result-container">
      <span className="dollar-sign">$</span><p className="result-number">{props.children}</p>
    </div>
  )
};

export default Result;