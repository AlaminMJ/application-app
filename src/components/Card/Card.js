import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <div className="card">
      <h3>Applicent Approve</h3>
      <div className="card-content">
        <p>Total Approve : {props.total}</p>
        <p>Total Cost : {props.totalSalary}</p>
        <button className="btn">Remove All <i className='bx bx-user-x'></i></button>
      </div>
    </div>
  );
};

export default Card;
