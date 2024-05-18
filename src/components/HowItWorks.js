import React from "react";
import quoted from "../assets/images/“.png";
import Jason from "../assets/images/Frame 136.png";
import groove from "../assets/images/groovehq.png";
import nbtn1 from "../assets/images/Vector-8.png";
import nbtn2 from "../assets/images/Vector-7.png";
import user from "../assets/images/groovehq-white.png";

const HowItWorks = () => {
  return (
    <section className=" ">
      <div className="how-it-works">
        <div className="quotation-mark">
          <img src={quoted} alt="quotation" />
        </div>
        <div className="how-it-works-container">
          <div className="how-it-works-left-col">
            <h3>
              How it worked for Jason{" "}
              <img src={Jason} alt="Jason" className="jason-image" /> at{" "}
              <img src={groove} alt="Groove logo" className="groove-logo" />
            </h3>
            <p>
              Zwilt enabled us to deliver on time and they’ve been heavy hitters
              in our corner since.
            </p>

            <div className="navigate-btn">
              <div className="n-btn">
                <img src={nbtn1} alt="next" />
              </div>
              <div className="n-btn">
                <img src={nbtn2} alt="prev" />
              </div>
            </div>
          </div>

          <div className="how-it-works-right-col">
            <div className="user-info">
              <div className="user-avatar">
                <div className="user">
                  <img src={user} alt="user" />
                </div>
              </div>
              <div className="user-description">
                <h4>Jason Makki</h4>
                <p>Engineer at GROOVE</p>
                <p>San Francisco</p>
              </div>
            </div>
            <p className="user-overview-text">
              Zwilt enabled us to deliver on time and they’ve been heavy hitters
              in our corner since. Zwilt enabled us to deliver on time and
              they’ve been heavy hitters in our corner since.Zwilt enabled us to
              deliver on time and they’ve been heavy hitters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
