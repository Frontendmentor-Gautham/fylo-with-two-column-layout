import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
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
    <section className="signup">
      <div className="signup-content">
        <h2>Get early access today</h2>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </div>
      {/* signup-handler */}
      <div className={isEmpty ? "signup-handler empty" : "signup-handler"}>
        <div className="empty-input">
          <input
            type="email"
            placeholder="enter you email"
            onChange={handleInput}
            value={userInput}
            autoComplete="off"
          />
          <div className={isEmpty ? "empty-warning-msg" : "empty-none"}>
            Please enter correct email
          </div>
        </div>
        <button onClick={handleClick}>Get Started For Free</button>
      </div>
    </section>
  );
};

export default Signup;
