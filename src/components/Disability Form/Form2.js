import "./Form2.css";

import React, { useState } from "react";

const Form2 = ({ onSubmit }) => {
  const [disability, setDisability] = useState("");
  const [emergencyContactNumber, setEmergencyContactNumber] = useState("");
  const [careTakers, setCareTakers] = useState("");
  const [requirements, setRequirements] = useState("");
  const [pleaseSpecify, setPleaseSpecify] = useState("");
  const [modeOfTransportation, setModeOfTransportation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      disability,
      emergencyContactNumber,
      careTakers,
      requirements,
      pleaseSpecify,
      modeOfTransportation,
    });
  };

  return (
    <div className="container">
      <h2>Form 2</h2>
      <form onSubmit={handleSubmit}>
          Disability
          <input
            type="text"
            value={disability}
            onChange={(event) => setDisability(event.target.value)}
            required
          />

        <div>
        
            Emergenency Contact Number
            <input
              type="tel"
              value={emergencyContactNumber}
              onChange={(event) =>
                setEmergencyContactNumber(event.target.value)
              }
              required
            />
        </div>

        <div>
          Care Takers
          <select id="care-takers" name="care-takers" required>
            <option value="">--Please select--</option>
            <option value="nurse">Nurse</option>
            <option value="doctor">Doctor</option>
            value={careTakers}
            onChange={(event) => setCareTakers(event.target.value)} required
          </select>
        </div>

        <div>
          Requirements
          <select id="requirements" name="requirements" required>
            <option value="">--Please select--</option>
            <option value="medicines">Medicines</option>
            <option value="bandages">Bandages</option>
            <option value="plasters">Plasters</option>
            <option value="wheelchair">Wheelchair</option>
            onChange={(event) => setRequirements(event.target.value)} required
          </select>
        </div>

        <div>
          Mode of Transportation
          <select id="transportation" name="transportation" required>
            <option value="">--Please select--</option>
            <option value="car">Car</option>
            <option value="bus">Bus</option>
            <option value="train">Train</option>
            <option value="flight">Flight</option>
            onChange={(event) =>
              setModeOfTransportation(event.target.value)
            }
            required
          </select>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form2;
