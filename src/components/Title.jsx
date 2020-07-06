import React from "react";
import "./Title.css";

function Title({ children }) {
  return(
    <h2 className="title-view">
      {children}
    </h2>
  )
}

export default Title;