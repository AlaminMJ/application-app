import React from "react";
import "./Toast.css";
const Toast = (props) => {
  const { image, name } = props.data;
  return (
    <div className="toast">
      <div className="image">
        <img src={image} alt="applicent"/>
      </div>
      <p>{name}</p>
      <div className="close">
        <i className="bx bx-x"></i>
      </div>
    </div>
  );
};

export default Toast;
