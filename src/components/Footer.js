import React from "react";
import { Link } from "react-router-dom";

import footerIcon1 from "../assets/images/Vector (10).png";
import Logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <section className=" footer">
      <div className="footer-container">
        <div className="card">
          <h4>Need a job done, and done well? Get started</h4>
          <div className="footer-btn">
            <img src={footerIcon1} alt="see more" />
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-info">
            <div className="logo">
              <Link to="/" className="image">
                <img src={Logo} alt="logo" />
              </Link>
            </div>
            <div className="footer-overview">
              <p>
                We take complex hiring processes - and simplify them. Connecting
                you to the world’s highly qualified talent pool.
              </p>
            </div>
            <div className="footer-cta">
              <small>LINKS AND REDIRECTS</small>
              <div className="footer-cta-btn">
                <Link to="/hireme">Hire Now</Link>
                <Link to="/aplly">Apply Now</Link>
              </div>
            </div>
          </div>

          <div className="contact-us">
            <h4>Connecting the right people to the right businesses.</h4>
            <div className="link-list">
              <table>
                <tr>
                  <td>PLATFORM</td>
                  <td>CATEGORIES</td>
                  <td>HELP</td>
                  <td>GET IN TOUCH @</td>
                </tr>
                <tr>
                  <td>Find Work</td>
                  <td>Data Science</td>
                  <td>FAQ’s</td>
                  <td>Instagram</td>
                </tr>
                <tr>
                  <td>Find Talent</td>
                  <td>IT & Networking</td>
                  <td>Contact Us</td>
                  <td>LinkedIn</td>
                </tr>
                <tr>
                  <td>Categories</td>
                  <td>Web & Mobile</td>
                  <td></td>
                  <td>Twitter</td>
                </tr>
                <tr>
                  <td>About Us</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="footnote"></div>
      </div>
    </section>
  );
};

export default Footer;
