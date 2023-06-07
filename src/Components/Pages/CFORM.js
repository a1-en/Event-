import React, { useState } from "react";
import Header1 from '../Header1';

import "../../Components/Pages/css/bookingform.css"


function CFORM() 
{ 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkinDate, setCheckinDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Check-in date:", checkinDate);
    console.log("Check-out date:", checkoutDate);
  };

  return (
    
    <form onSubmit={handleSubmit} className="booking-form">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <div className="date-inputs">
        <div>
          <label htmlFor="checkinDate">Check-in date:</label>
          <input
            type="date"
            id="checkinDate"
            value={checkinDate}
            onChange={(event) => setCheckinDate(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="checkoutDate">Check-out date:</label>
          <input
            type="date"
            id="checkoutDate"
            value={checkoutDate}
            onChange={(event) => setCheckoutDate(event.target.value)}
          />
        </div>
      </div>

      <button type="submit">Book now</button>
    </form>
  );
}

export default CFORM;
