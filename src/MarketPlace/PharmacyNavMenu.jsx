/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Col,
  Row,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  ButtonGroup,
  Modal,
  ModalBody,
} from "reactstrap";
import InputField from "../CustomFiles/InputField";
import search from "../image/search.png";
import cart from "../image/cart.png";
import bell from "../image/bell.png";
import help from "../image/help.png";
import account from "../image/account.png";
import "./MarketPlace.css";
import "../Styles/Styles.css";
import "../CustomFiles/InputFields.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import drugcipherIcon from "../image/DCIcon5.png";
import Registration from "../Registration";
import Register from "../Register";
import Signin from "../Signin";

export default function PharmacyNavMenu() {
  const navigate = useNavigate();
  const [dropdown, setdropdown] = useState(false);
  const [modal, setModal] = useState(false);
  const [mymodal, setMyModal] = useState(false);

  const toggle1 = () => setModal(!modal);
  const toggle2 = () => setMyModal(!mymodal);
  const toggle = () => {
    setdropdown(!dropdown);
  };
  const cartList = useSelector((state) => state.cart.cartList);
  let totalItems = cartList.length;
  return (
    <div className="pharmacy_nav_menu" style={{ positon: "sticky", top: 0 }}>
      {/* <h1>{JSON.stringify(total)}: lldkjd</h1> */}
      <Row className="m-0 p-0">
        <Col md={3}>
          <img
            src={drugcipherIcon}
            alt="drugcipherlogo"
            style={{ width: 55, marginTop: 7 }}
            onClick={() => navigate("/")}
          />
          <p className="dc_name" onClick={() => navigate("/")}>
            Online Pharmacy
          </p>
        </Col>
        <Col md={6} className="">
          <div style={{ marginTop: 13 }}>
            <div>
              <InputField
                type={"text"}
                name="searchDrugs"
                placeholder={"Search Drugs"}
                className="search_input"
              />
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              height: "70px",
            }}
          >
            <div
              className="icon_div p-1"
              style={{ position: "relative" }}
              onClick={() => navigate("/cart")}
            >
              <div className="absolute">
                <span>{totalItems}</span>
              </div>
              <img src={cart} alt="" />
            </div>
            <div className="icon_div p-1">
              <img src={bell} alt="" />
            </div>
            <div className="icon_div p-1">
              <img src={help} alt="" />
            </div>
            {/* <div className="icon_div p-1" onClick={() => navigate(`/drops`)}>
              <span>Account</span> <img src={account} alt="" />
            </div> */}
            <div>
              <Dropdown isOpen={dropdown} toggle={toggle}>
                <DropdownToggle>
                  <span>Account</span> <img src={account} alt="" />
                </DropdownToggle>
                <DropdownMenu className="mt-4">
                  <DropdownItem>
                    {" "}
                    <ButtonGroup className="mb-2">
                      <Button className="mr-1" onClick={toggle1}>
                        <Modal isOpen={modal} toggle={toggle1}>
                          <ModalBody>
                            <Registration />
                          </ModalBody>
                        </Modal>
                        Register
                      </Button>
                      <Button className="mr-1" onClick={toggle2}>
                        <Modal isOpen={mymodal} toggle={toggle2}>
                          <ModalBody>
                            <Signin />
                          </ModalBody>
                        </Modal>
                        Sign in
                      </Button>
                    </ButtonGroup>
                  </DropdownItem>
                  <DropdownItem className="mb-1">My Orders</DropdownItem>
                  <DropdownItem className="mb-1">
                    Payment Item Text
                  </DropdownItem>
                  <DropdownItem className="mb-1">Message center</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
