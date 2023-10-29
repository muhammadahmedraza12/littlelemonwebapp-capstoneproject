import React from "react";
import "./Confirmed.scss";
import { ReactComponent as Verified } from "../assets/Verified.svg";

const Confirmed = () => {
  return (
    <section className="confirmed container">
      <div className="img-wrap">
        <Verified />
      </div>
      <h2>Reservation Confirmed</h2>
      <p className="text">
        <b>Thank You!</b> Your Reservation has been confirmed.
      </p>
    </section>
  );
};

export default Confirmed;
