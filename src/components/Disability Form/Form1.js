import "./Form1.css";


import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

const Form1 = (props) => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [passportNumber, setPassportNumber] = useState("");
  const [disability, setDisability] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    disability==="Yes"? props.setIsForm2Active(true): navigate("/Upcoming Trips")
    props.onSubmit({ firstName, lastName, email,age, gender, contactNumber, passportNumber, disability });
    
  };


  const handleAgeChange = (event) => {
    const inputAge = event.target.value;
    if (inputAge < 70) {
      setAge(inputAge);
    } else {
      setAge("");
      alert("Age must be less than 70");
    }
  };

  return (
    <div className="container">
    <form onSubmit={handleSubmit}>

      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value) } required
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)} required
        />
      </label>

      <br />

      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)} required
        />
      </label>

      <br />
      
      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={handleAgeChange}
          required        />
      </label>

      <br />

      <label>
        Gender:
        <label>
          <input
            type="radio"
            value="Male"
            checked={gender === "Male"}
            onChange={(event) => setGender(event.target.value)}  
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            value="Female"
            checked={gender === "Female"}
            onChange={(event) => setGender(event.target.value)}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            value="Others"
            checked={gender === "Others"}
            onChange={(event) => setGender(event.target.value)}  
          />
          Others
        </label>
      </label>

      <br />

      <label>
        Contact Number
        <input
          type="tel"
          value={contactNumber}
          onChange={(event) => setContactNumber(event.target.value)} required
        />
      </label>
     
      <br />
      <label>
        Passport Number:
        <input
          type="text"
          value={passportNumber}
          onChange={(event) => setPassportNumber(event.target.value)} required
        />
      </label>
      <br />
      <label>
        Do you have a disability?
        <label>
          <input
            type="radio"
            value="Yes"
            checked={disability === "Yes"}
            onChange={(event) => setDisability(event.target.value)} required
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="No"
            checked={disability === "No"}
            onChange={(event) => setDisability(event.target.value)}
          />
          No
        </label>
      </label>
      <br />
      <button type="submit">Submit</button>
      
    </form>
  </div>
  );
};

export default Form1;
