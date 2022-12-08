import React from "react";
import "./Features.css";
import arrow from "../../images/icon-arrow.svg";
import illustration2 from "../../images/illustration-2.svg";
import quote from "../../images/icon-quotes.svg";
import testimonial from "../../images/avatar-testimonial.jpg";

const Features = () => {
  return (
    <section className="features">
      <div className="features-content">
        <h2>Stay productive, wherever you are</h2>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required!
        </p>
        <div className="fylo-working">
          <a href="#no-where">See how Fylo works </a>
          <button>
            <img src={arrow} alt="arrow icon" />
          </button>
        </div>
        <div className="testimonial">
          <img src={quote} alt="quote icon" />
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="profile">
            <img src={testimonial} alt="testimonial" />
            <div className="profile-content">
              <p>Kyle Burton</p>
              <span>Founder & CEO, Huddle</span>
            </div>
          </div>
        </div>
      </div>
      <div className="features-img-wrapper">
        <img src={illustration2} alt="illustration" />
      </div>
    </section>
  );
};

export default Features;
