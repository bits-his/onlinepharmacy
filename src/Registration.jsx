import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import CountrySelect from "react-bootstrap-country-select";
import "./Register.css";

export default function Registration() {
  const [value, setValue] = useState(null);
  const [display, setDisplay] = useState(false);
  return (
    <div>
      <CountrySelect
        value={value}
        onChange={setValue}
        className="w-75  h-75 select"
        flags={true}
        size="lg"
      />
      <div class="form-row mb-4">
        <a href="#" class="text text-links underline">
          why choose a location?
        </a>
      </div>
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
