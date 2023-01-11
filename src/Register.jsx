import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import "./Register.css";
import Registration from "./Registration";
import Signin from "./Signin";

export default function Register() {
  const [page, setPage] = useState(false);
  return (
    <div className="sign-in-body">
      <Row className="mt-5">
        <Col md={4}></Col>
        <Col md={4}>
          <form>
            <header>
              <ul className="header-menu">
                <li>
                  <div className="header-login-wrapper">
                    <h4
                      className="header-login-button"
                      onClick={() => setPage(false)}
                    >
                      Sign in
                    </h4>
                    <span className={!page ? "header-login-line" : ""}></span>
                  </div>
                </li>
                <div>
                  <h4
                    className="header-register-button"
                    onClick={() => setPage(true)}
                  >
                    Register
                  </h4>
                  <span className={page ? "header-login-line" : ""}></span>
                </div>
              </ul>
            </header>

            {!page ? <Signin /> : <Registration />}
          </form>

          <div className="icons">
            <a href="#" className="facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="google">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="youtube">
              <i className="fab fa-apple"></i>
            </a>
          </div>
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
}
