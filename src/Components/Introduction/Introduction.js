import React from "react";
import illustration1 from "../../images/illustration-1.svg";
import "./Introduction.css";

const Introduction = () => {
  return (
    <section className="intro">
      <div className="intro-content">
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        <div className="input-wrapper">
          <input type="text" placeholder="Enter your email" />
          <button>Get started</button>
        </div>
      </div>
      <div className="intro-img-wrapper">
        <img src={illustration1} alt="illustration" />
      </div>
    </section>
  );
};

export default Introduction;
