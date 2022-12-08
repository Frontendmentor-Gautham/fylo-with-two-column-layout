import React from "react";
import "./Signup.css";

const Signup = () => {
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
      <div className="signup-handler">
        <input type="email" placeholder="enter you email" />
        <button>Get Started For Free</button>
      </div>
    </section>
  );
};

export default Signup;
