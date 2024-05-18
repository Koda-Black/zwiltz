import React from "react";
import { useState } from "react";

import videoIcon from "../assets/images/Vector-9.png";

const WhatWeDo = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const steps = [
    "Step 1: Resume Screening",
    "Step 2: Video Interview",
    "Step 3: Technical Evaluation",
    "Step 4: Application Review",
    "Step 5: Lets get to work",
  ];

  const handleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className=" ">
      <div className="how-we-ensure-you">
        <div className="how-we-ensure-you-container">
          <h2 className="title">How we ensure you’re in good hands.</h2>
          <p className="subtitle">
            With our comprehensive screening process, we hand-pick highly
            skilled candidates so you can onboard them in a matter of days.
          </p>

          <div className="accordion">
            {steps.map((step, index) => (
              <div key={index} className="accordion-tab">
                <button
                  className={`accordion ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => handleAccordion(index)}
                >
                  <div className="process-icon">
                    <img src={videoIcon} alt="video-icon" />
                  </div>
                  {step}
                </button>
                <div
                  className="panel"
                  style={{ maxHeight: activeIndex === index ? "100%" : 0 }}
                >
                  <p>
                    Candidates are assessed through skill based questions in a
                    virtual setting. Allowing you to gauge personality and
                    cultural fit.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
