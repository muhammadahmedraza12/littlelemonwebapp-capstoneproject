import React, { useState } from "react";
import "./Reservation.scss";
import Image from "../assets/reservationpic.jpg";
import { Link, useNavigate } from "react-router-dom";

const Reservation = () => {
  const navigate = useNavigate();

  const [occasion, setOccasion] = useState("");
  const [date, setDate] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const [time, setTime] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [request, setRequest] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Add form validation here, e.g., check if fields are not empty
    if (
      occasion &&
      date &&
      numberOfGuests &&
      time &&
      fullName &&
      email &&
      mobile
    ) {
      // All required fields are filled, navigate to the "Confirmed" page
      navigate("/confirmed");
    } else {
      // Display an error message or provide feedback to the user
      alert("Please fill in all required fields.");
    }
  };

  return (
    <section className="reservation">
      <div className="container">
        <section className="reservation-wrap">
          <div className="form-wrap">
            <h2>Reservations</h2>
            <form onSubmit={handleFormSubmit}>
              <section className="booking-details">
                <h3>Personal Details</h3>
                <input
                  type="text"
                  name="Occasion"
                  id="occasion"
                  placeholder="Occasion"
                  required
                  maxLength="10"
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                />
                <input
                  type="date"
                  name="date"
                  id="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  type="number"
                  name="number"
                  id="number"
                  min="2"
                  max="20"
                  placeholder="No of Guests"
                  required
                  value={numberOfGuests}
                  onChange={(e) => setNumberOfGuests(e.target.value)}
                />
                <input
                  type="time"
                  name="time"
                  id="time"
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </section>
              <section className="booking-details">
                <h3>Booking Details</h3>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  maxLength="30"
                  required
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="E-mail Id"
                  maxLength="30"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  name="mobile"
                  id="mobile"
                  minLength="5"
                  maxLength="10"
                  placeholder="(+92) Mobile Number"
                  required
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
                <input
                  type="text"
                  name="request"
                  id="request"
                  placeholder="Special Request ?"
                  value={request}
                  onChange={(e) => setRequest(e.target.value)}
                />
              </section>
              <button type="submit">Confirm Reservation</button>
            </form>
          </div>
          <div className="img-wrap">
            <img src={Image} alt="Restaurant" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Reservation;


