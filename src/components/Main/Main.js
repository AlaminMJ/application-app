import React, { useEffect, useState } from "react";
import Applicant from "../Applicant/Applicant";
import ToastList from "../ApplicentApproveList/ToastList";
import Card from "../Card/Card";
import "./Main.css";

const Main = () => {
  // Data fetching
  const [applicents, setApplicents] = useState([]);
  useEffect(() => {
    fetch("./applicant.json")
      .then((res) => res.json())
      .then((data) => setApplicents(data));
  }, []);

  const [addedApplicents, setAddedApplicents] = useState([]);
  //   add appliced handling
  const addApplicent = (id) => {
    const newAddedApplicents = [...addedApplicents, id];
    setAddedApplicents(newAddedApplicents);
  };

  useEffect(() => {
    if (addedApplicents.length) {
      applicents.filter((applicent) => addedApplicents.includes(applicent.id));
    }
  }, [addedApplicents,applicents]);

  return (
    <div className="main container">
      <div className="applicant-container">
        <h3>Applicent ({applicents.length})</h3>
        <div className="wrapper">
          {applicents.map((applicent) => (
            <Applicant
              key={applicent.id}
              fn={addApplicent}
              data={applicent}
            ></Applicant>
          ))}
        </div>
      </div>
      <div className="aside-bar">
      
          <Card></Card>
          <ToastList>
            
          </ToastList>
          
      </div>
    </div>
  );
};

export default Main;
