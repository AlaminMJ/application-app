import React from "react";
import "./applicant.css";

const Applicant = (props) => {
  const { fn } = props;

  const { name, image, age, salary, designation } = props.data;
  return (
    <div className="applicent">
      <div className="image">
        <img src={image} alt="applicent" />
      </div>
      <div className="content">
        <p className="name"> Name: {name}</p>
        <p> Age {age}</p>
        <p>Salary : {salary}</p>
        <p className="deg">{designation}</p>

        <button onClick={() => fn(props.data)}>
          Confrim <i className="bx bx-check"></i>
        </button>
        <div className="social">
          <i className="bx bxl-facebook"></i>
          <i className="bx bxl-twitter"></i>
          <i className="bx bxl-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default Applicant;
