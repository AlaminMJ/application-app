import React, { useEffect, useState } from "react";
import Applicant from "../Applicant/Applicant";
import Card from "../Card/Card";
import Toast from "../Toast/Toast";
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
  const addApplicent = (approveObj) => {
    const newAddedApplicents = [...addedApplicents, approveObj];
    setAddedApplicents(newAddedApplicents);
  };

  useEffect(() => {
    if (addedApplicents.length) {
      applicents.filter((applicent) => addedApplicents.includes(applicent.id));
    }
  }, [addedApplicents, applicents]);

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
        <Card
          total={addedApplicents.length}
          totalSalary={addedApplicents.reduce(
            (preciousVal, currentVal) => preciousVal + currentVal.salary,
            0
          )}
        ></Card>
        <div className="toastList">
          {addedApplicents.map((applicent) => {
            return <Toast key={applicent.id + "aj"} data={applicent}></Toast>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
