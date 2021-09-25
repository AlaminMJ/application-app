import React from "react";
import "./applicant.css";

const Applicant = (props) => {
  const { fn} = props;
  
  const { id,name, image, age, salary } = props.data;
  return (
    <div className="applicent">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <p> Name: {name}</p>
        <p> Age {age}</p>
        <p>Salary : {salary}</p>
        <button onClick={()=>fn(id)}>Confrim <i class='bx bx-check'></i></button>
      </div>
    </div>
  );
};

export default Applicant;
