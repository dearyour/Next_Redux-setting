import React, { useCallback, useEffect, useRef } from "react";
function Sign() {
  //   const signinBtn: any = useRef(null);
  //   const signupBtn: any = useRef(null);
  //   const body: any = useRef(null);
  //   const formBx: any = useRef(null);
  //   useEffect(() => {
  //     if (signupBtn.current) {
  //       signupBtn.onclick = function () {
  //         formBx.classList.add("active");
  //         body.classList.add("active");
  //       };
  //     }
  //     if (signinBtn.current) {
  //       signinBtn.onclick = function () {
  //         formBx.classList.remove("active");
  //         body.classList.remove("active");
  //       };
  //     }
  //   }, []);
  if (window) {
    const signinBtn: any = document.querySelector(".signinBtn");
    const signupBtn: any = document.querySelector(".signupBtn");
    const body: any = document.querySelector(".body");
    const formBx: any = document.querySelector(".formBx");
  }
  useEffect(() => {
    const signinBtn: any = document.querySelector(".signinBtn");
    const signupBtn: any = document.querySelector(".signupBtn");
    const body: any = document.querySelector(".body");
    const formBx: any = document.querySelector(".formBx");

    signupBtn.onclick = function () {
      formBx.classList.add("active");
      body.classList.add("active");
    };
    signinBtn.onclick = function () {
      formBx.classList.remove("active");
      body.classList.remove("active");
    };
  });

  return (
    <body className="body">
      <div className="container">
        <div className="blueBg">
          <div className="box signin">
            <h2>Already Have an Account ?</h2>
            <button className="signinBtn">Sign in</button>
          </div>
          <div className="box signup">
            <h2>Don't Have an Account ?</h2>
            <button className="signupBtn">Sign up</button>
          </div>
        </div>
        <div className="formBx">
          <div className="form signinForm">
            <form>
              <h3>Sign In</h3>
              <input type="text" name="" placeholder="Username" />
              <input type="password" name="" placeholder="Password" />
              <input type="submit" name="" value="Login" />
              <a href="#" className="forgot">
                Forgot Password
              </a>
            </form>
          </div>
          <div className="form signupForm">
            <form>
              <h3>Sign Up</h3>
              <input type="text" name="" placeholder="Username" />
              <input type="text" name="" placeholder="Email Address" />
              <input type="password" name="" placeholder="Password" />
              <input type="password" name="" placeholder="Confirm Password" />
              <input type="submit" name="" value="Register" />
            </form>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Sign;
