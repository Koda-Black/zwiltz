import React, { useState } from "react";

import pascal from "../assets/images/pascal.gif";

import Header from "./Header";
import SearchBox from "./SearchBox";
import MarketPlace from "./MarketPlace";
import HowItWorks from "./HowItWorks";
import WhatWeDo from "./WhatWeDo";
import Onboarding from "./Onboarding";
import ChooseUs from "./ChooseUs";
import FAQs from "./FAQs";
import Footer from "./Footer";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("IT & Development");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const itJobs = [
    "Software Developer",
    "Systems Analyst",
    "DevOps Engineer",
    "Database Administrator",
    "Network Engineer",
    "IT Support Specialist",
    "Cybersecurity Analyst",
    "Cloud Engineer",
  ];

  const designJobs = [
    "Graphic Designer",
    "UI/UX Designer",
    "Creative Director",
    "Animator",
    "Illustrator",
    "Web Designer",
    "Video Editor",
    "Product Designer",
  ];

  return (
    <div>
      <Header />
      <section id="hero">
        <div className="hero-container">
          <h1 className="hero-title">
            Finding the right fit{" "}
            <span className="hero-gif">
              <img src={pascal} alt="pascal" className="hero-image" />
            </span>{" "}
            has never been easier.
          </h1>

          <p className="hero-subtitle">
            With our rigorous pre-vetting process, you'll never have to worry
            about finding the ideal candidate ever again.
          </p>

          <SearchBox />
          <div className="skills-container">
            <div className="skill-titles">
              <div
                className={`tab development-skill ${
                  activeTab === "IT & Development" ? "active" : ""
                }`}
                onClick={() => handleTabClick("IT & Development")}
              >
                <p>IT & Development</p>
              </div>
              <div
                className={`tab design-skill ${
                  activeTab === "Design and Creative" ? "active" : ""
                }`}
                onClick={() => handleTabClick("Design and Creative")}
              >
                <p>Design and Creative</p>
              </div>
            </div>

            <div className="tab-content">
              {activeTab === "IT & Development" && (
                <div className="job-list">
                  {itJobs.map((job, index) => (
                    <div key={index} className="job-item">
                      {job}
                    </div>
                  ))}
                </div>
              )}
              {activeTab === "Design and Creative" && (
                <div className="job-list">
                  {designJobs.map((job, index) => (
                    <div key={index} className="job-item">
                      {job}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <MarketPlace />
      <HowItWorks />
      <WhatWeDo />
      <Onboarding />
      <ChooseUs />
      <FAQs />
      <Footer />
    </div>
  );
}
