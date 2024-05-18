import React from "react";
import UnionFooter from "../assets/images/Union.png";
import skills from "../assets/images/Vector-1.png";
import categories from "../assets/images/Vector-2.png";
import profile from "../assets/images/Vector-3.png";
import shopify from "../assets/images/pexels-christina-morillo-1181424-removebg-preview 1.png";
import magento from "../assets/images/pexels-puwadon-sangngern-13419240-removebg-preview 1.png";
import datascience from "../assets/images/image 244.png";
import webflow from "../assets/images/image 247.png";
import dotnet from "../assets/images/image 246.png";
import next from "../assets/images/Vector-4.png";
import previous from "../assets/images/Vector-5.png";
import figma from "../assets/images/image 248.png";
import photoshop from "../assets/images/image 249.png";
import illustration from "../assets/images/image 249 (1).png";
import unreal from "../assets/images/image 250.png";
import cinema from "../assets/images/image 251.png";
import explorIconWhite from "../assets/images/Vector-6.png";

const MarketPlace = () => {
  return (
    <section className="  market-section">
      <div className="  section-footer">
        <img src={UnionFooter} alt="section footer" />
      </div>

      <div className="  marketplace ">
        <h2 className="marketplace-title">
          Your one-stop marketplace for finding the talent your business needs.
        </h2>

        <div className="skills-market-cover">
          <div className="skills-market-left-col">
            <div className="professional-market">
              <p>Find Dev and IT professionals to scale your business.</p>
              <div className="profile-description">
                <div className="info">
                  <span className="icon">
                    <img src={skills} alt="skills" />
                  </span>
                  <span className="text">989 Skills</span>
                </div>
                <div className="info">
                  <span className="icon">
                    <img src={categories} alt="categories" />
                  </span>
                  <span className="text">45 Sub-Categories</span>
                </div>
                <div className="info">
                  <span className="icon">
                    <img src={profile} alt="profile" />
                  </span>
                  <span className="text">1011 Profiles</span>
                </div>
              </div>
            </div>
            <div className="professional-market">
              <p>Explore Creative individuals with a keen eye for detail.</p>
              <div className="profile-description">
                <div className="info">
                  <span className="icon">
                    <img src={skills} alt="skills" />
                  </span>
                  <span className="text">989 Skills</span>
                </div>
                <div className="info">
                  <span className="icon">
                    <img src={categories} alt="categories" />
                  </span>
                  <span className="text">45 Sub-Categories</span>
                </div>
                <div className="info">
                  <span className="icon">
                    <img src={profile} alt="profile" />
                  </span>
                  <span className="text">1011 Profiles</span>
                </div>
              </div>
            </div>
            <div className="explore-more">
              <div className="explore-btn">
                <img src={explorIconWhite} alt="Explore More" />
              </div>
              <p>Explore more</p>
            </div>
          </div>

          <div className="skills-marke-right-col">
            <div className="skill-stack">
              <p className="skill-stack-name">IT & Development</p>
              <div className="skill-stack-description">
                <div className="info">
                  <span className="icon">
                    <img src={shopify} alt="shopify" />
                  </span>
                  <span className="text">Shopify Developer</span>
                </div>
                <div className="info">
                  <span className="icon">
                    <img src={magento} alt="magento" />
                  </span>
                  <span className="text">Magento Developer</span>
                </div>
                <div className="info">
                  <span className="icon">
                    <img src={datascience} alt="Data Scientist" />
                  </span>
                  <span className="text">Data Scientist</span>
                </div>
                <div className="info">
                  <span className="icon">
                    <img src={webflow} alt="Webflow Developer" />
                  </span>
                  <span className="text">Webflow Developer</span>
                </div>
                <div className="info">
                  <span className="icon">
                    <img src={dotnet} alt="Dot Net Developer" />
                  </span>
                  <span className="text">Dot Net Developer</span>
                </div>
                <div className="info">
                  <span className="icon">
                    <img src={next} alt="Next" className="next-and-previous" />
                  </span>
                  <span className="text"></span>
                </div>
              </div>
            </div>
            <div className="skill-stack">
              <p className="skill-stack-name">Design & Creative</p>
              <div className="skill-stack-description">
                <div className="info">
                  <span className="icon">
                    <img
                      src={previous}
                      alt="previous"
                      className="next-and-previous"
                    />
                  </span>
                  <span className="text"></span>
                </div>
                <div className="info">
                  <span className="icon">
                    <img src={figma} alt="UX Designer" />
                  </span>
                  <span className="text">UX Designer</span>
                </div>
                <div className="info">
                  <span className="icon">
                    <img src={photoshop} alt="Graphics Designer" />
                  </span>
                  <span className="text">Graphics Designer</span>
                </div>
                <div className="info">
                  <span className="icon">
                    <img src={illustration} alt="Illustration Artist" />
                  </span>
                  <span className="text">Illustration Artist</span>
                </div>
                <div className="info">
                  <span className="icon">
                    <img src={unreal} alt="Unreal Engine" />
                  </span>
                  <span className="text">Unreal Engine</span>
                </div>
                <div className="info">
                  <span className="icon">
                    <img src={cinema} alt="Cinema 4D" />
                  </span>
                  <span className="text">Cinema 4D</span>
                </div>
              </div>
            </div>

            <div className="explore-text">
              <p>
                <strong>30 more</strong> to explore
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketPlace;
