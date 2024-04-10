import React from "react";
import "./Login.css";
import { useState } from "react";
import Slide1 from "./assets/image/slide1.jpg";
const Login = () => {
  //   const registerBtn = document.getElementById("register");
  //   const container = document.getElementById("container");
  //   const loginBtn = document.getElementById("login");
  //   registerBtn.addEventListener("click", () => {
  //     container.classList.add("active");
  //   });
  //   registerBtn.addEventListener("click", () => {
  //     container.classList.add("active");
  //   });
  //   loginBtn.addEventListener("click", () => {
  //     container.classList.remove("active");
  //   });

  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <>
      <div
        className={"container1" + (isActive ? " active" : "")}
        id="container"
      >
        {" "}
        <div className="form-container sign-up">
          <form action="">
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <i class="fab fa-google-plus"></i>
              </a>
              <a href="#" className="icon">
                <i class="fab fa-facebook-square"></i>
              </a>
              <a href="#" className="icon">
                <i class="fab fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
            <span>or use your email for registeration</span>
            <div className="couple-text">
              <input type="text" className="text-input" required />
              <div className="labelline"> Username</div>
            </div>
            <div className="couple-text">
              <input type="text" className="text-input" required />
              <div className="labelline"> Email</div>
            </div>
            <div className="couple-text">
              <input type="password" required className="text-input" />
              <div className="labelline"> Password</div>
            </div>

            <button className="btn-accept">Sign up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form action="">
            <h1>Sign in</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <i class="fab fa-google-plus"></i>
              </a>
              <a href="#" className="icon">
                <i class="fab fa-facebook-square"></i>
              </a>
              <a href="#" className="icon">
                <i class="fab fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
            <span>or use your email for registeration</span>
            <div className="couple-text">
              <input type="text" className="text-input" required />
              <div className="labelline"> Username</div>
            </div>

            <div className="couple-text">
              <input type="password" required className="text-input" />
              <div className="labelline"> Password</div>
            </div>
            <a href="" className="tag">
              forget your password ?
            </a>
            <button className="btn-accept">Sign in</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>HELLO, MY FRIEND !!</h1>
              <p>
                Register with your personal details to use all of site features
              </p>
              <button className="hidden" id="login" onClick={handleLoginClick}>
                {" "}
                Sign in
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1> WELCOME BACK</h1>
              <p>Enter your personal details to use all of site features</p>
              <button
                className="hidden"
                id="register"
                onClick={handleRegisterClick}
              >
                {" "}
                Sign Up
              </button>
            </div>
          </div>
        </div>
        {/* -------------------- */}
      </div>
    </>
  );
};

export default Login;
