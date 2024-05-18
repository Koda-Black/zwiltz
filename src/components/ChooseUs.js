import React from "react";

import frameCard from "../assets/images/Frame 626629.png";

const ChooseUs = () => {
  return (
    <section className="why-us">
      <div className="why-us-container">
        <div className="side-text">
          <h3>Why choose Zwilt?</h3>
          <p>
            We take complex hiring processes - and simplify them. Connecting you
            to the world’s highly qualified talent pool.
          </p>
        </div>
        <div className="demo-card">
          <img src={frameCard} alt="why us " />
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
