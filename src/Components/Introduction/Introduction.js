import React from "react";
import { useState } from "react";
import illustration1 from "../../images/illustration-1.svg";
import "./Introduction.css";

const Introduction = () => {
  const [userInput, setUserInput] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  const handleInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (userInput.trim().length !== 0) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };

  return (
    <section className="intro">
      <div className="intro-content">
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        {/* input-wrapper */}
        <div className={isEmpty ? "input-wrapper empty" : "input-wrapper"}>
          <div className="empty-input">
            <input
              type="text"
              onChange={handleInput}
              value={userInput}
              placeholder="Enter your email"
              autoComplete="off"
            />
            <div className={isEmpty ? "empty-warning" : "empty-none"}>
              Please check your email
            </div>
          </div>
          <button onClick={handleClick}>Get started</button>
        </div>
      </div>
      <div className="intro-img-wrapper">
        <img src={illustration1} alt="illustration" />
      </div>
    </section>
  );
};

export default Introduction;
