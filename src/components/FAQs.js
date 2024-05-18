import React from "react";
import { useState } from "react";

import videoIcon from "../assets/images/Vector-9.png";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const steps = [
    "I want to work part-time, is that possible",
    "How long are the average projects?",
    "How does the payment works?",
    "How much can I earn?",
    "I want to work part-time, is that possible",
    "How long are the average projects?",
    "How long are the average projects?",
    "How much can I earn?",
  ];

  const handleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className="faqs">
      <div className="faq-container">
        <h2>Frequently asked questions</h2>
        <div className="accordion faq-accordion">
          {steps.map((step, index) => (
            <div key={index} className="accordion-tab faq-accordion-tab">
              <button
                className={`accordion ${activeIndex === index ? "active" : ""}`}
                onClick={() => handleAccordion(index)}
              >
                <div className="process-icon">
                  <img src={videoIcon} alt="video-icon" />
                </div>
                {step}
              </button>
              <div
                className="panel faq-accordion-panel"
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
    </section>
  );
};

export default FAQs;
