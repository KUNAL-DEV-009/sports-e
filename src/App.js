import React from "react";
import "./styles.css";
import badmintonImg from './assets/badminton.jpg';
import basketball from './assets/basketball.jpg';
import tennis from './assets/tennis.jpg';
import football from './assets/football.jpg';
import swimming from './assets/swimming.jpg';
import cricket from './assets/cricket.jpg';
import hockey from './assets/hockey.jpg';
import cycling from './assets/cycling.jpg';
import tabletennis from './assets/tabletennis.jpg';
const FillDetails = () => {
  return (
      <div className="form-container">
        {/* Left Section */}
        <div className="section">
          <h1>
            <span>F</span>ill the Details
          </h1>

          <h2>Personal Details</h2>
          <div className="input-group">
            <input type="text" id="name" required />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-group">
            <input type="text" id="phone" required />
            <label htmlFor="phone">Phone number</label>
          </div>
          <div className="input-group">
            <input type="date" id="dob" required />
            <label htmlFor="dob">DOB</label>
          </div>
          <div className="flex-inputs">
            <div className="input-group">
              <input type="text" id="weight" required />
              <label htmlFor="weight">Weight</label>
            </div>
            <span>kg</span>
            <div className="input-group">
              <input type="text" id="height" required />
              <label htmlFor="height">Height</label>
            </div>
            <span>ft</span>
          </div>

          <h2>Address</h2>
          <div className="input-group">
            <input type="text" id="flat" required />
            <label htmlFor="flat">Flat / House no / Floor / Building *</label>
          </div>
          <div className="input-group">
            <input type="text" id="area" required />
            <label htmlFor="area">Area / Sector / Locality</label>
          </div>
          <div className="input-group">
            <input type="text" id="pincode" required />
            <label htmlFor="pincode">Pincode</label>
          </div>

          <h2>Area of Interest</h2>
          <div className="input-group">
            <select id="interest" required>
              <option value="" disabled selected>
                Select Sport
              </option>
              <option value="football">Football</option>
              <option value="badminton">Badminton</option>
              <option value="swimming">Swimming</option>
              <option value="cricket">Cricket</option>
              <option value="hockey">Hockey</option>
            </select>
            <label htmlFor="interest">Select Sport</label>
          </div>

          <div className="button-group">
            <button type="submit">Submit</button>
          </div>
        </div>

        {/* Right Section */}
        <div className="sports-section">
          <h2>
            Select Your 3 Preferred <span>Sport!</span>
          </h2>
          <div className="image-grid">
            {[
              { src: badmintonImg, alt: "Badminton", label: "Badminton" },
              { src: basketball, alt: "Basketball", label: "Basketball" },
              { src: tennis, alt: "Tennis", label: "Tennis" },
              { src: football, alt: "Football", label: "Football" },
              { src: swimming, alt: "Swimming", label: "Swimming" },
              { src: cricket, alt: "Cricket", label: "Cricket" },
              { src: hockey, alt: "Hockey", label: "Hockey" },
              { src: cycling, alt: "Cycling", label: "Cycling" },
              { src: tabletennis, alt: "Table Tennis", label: "Table Tennis" },
            ].map((item, index) => (
                <div className="image-item" key={index}>
                  <img src={item.src} alt={item.alt}/>
                  <label>{item.label}</label>
                </div>
            ))}
          </div>

          <div className="terms">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              I accept the terms and conditions of Academy. Action will be taken
              if done anything wrong.
            </label>
          </div>
        </div>
      </div>
  );
};

export default FillDetails;
