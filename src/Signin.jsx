import React from "react";
import "./Register.css";
import { useState } from "react";
export default function Signin() {
  const [display, setDisplay] = useState(false);
  return (
    <div>
      <div className="sign-in-body">
        <form>
          <>
            <div class="form-row">
              <input
                class="form-control form-control-lg w-75 mb-4"
                type="text"
                placeholder="username"
              />
            </div>
            <div class="form-row">
              <div className="d-flex">
                <input
                  class="form-control form-control-lg w-75 mb-4"
                  type={display ? "password" : "text"}
                  placeholder="password "
                />
                <i
                  className={
                    display ? "fa fa-eye" : "fa-solid fa-eye-low-vision"
                  }
                  style={{ marginLeft: -30, marginTop: 15 }}
                  onClick={() => setDisplay(!display)}
                ></i>
              </div>
            </div>
            <div class="form-row">
              <button type="submit " class="w-75 p-3 button-submit register">
                Create account
              </button>
              <div id="other-option-wrapper">
                <span class="line"></span>
                <p className="continue-with">Or continue with</p>
                <span className="line"></span>
              </div>
            </div>
          </>
        </form>
      </div>
    </div>
  );
}
