import React from "react";

import one from "../assets/images/1.png";
import two from "../assets/images/2.png";
import three from "../assets/images/3.png";

const Onboarding = () => {
  return (
    <section className="onboarding">
      <div className="onboarding-container">
        <h2>Start your journey today.</h2>
        <div className="card-container">
          <div className="onboarding-card find"></div>
          <div className="onboarding-card evaluate"></div>
          <div className="onboarding-card build"></div>
        </div>
      </div>
    </section>
  );
};

export default Onboarding;
