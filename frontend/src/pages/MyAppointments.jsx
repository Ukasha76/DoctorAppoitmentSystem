import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointments = () => {
  const { doctor = [] } = useContext(AppContext); // Default to empty array

  return (
    <div>
      <p>MyAppointments</p>
      <div>
        {doctor.slice(0, 2).map((items, index) => (
          <div key={index}>
            <div>
              <img src={items.ima} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
