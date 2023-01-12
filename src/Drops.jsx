import React from "react";
import useState from "react";
import { Col, Dropdown, DropdownMenu, DropdownToggle, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";
export default function Drops() {
  const navigate = useNavigate();
  const [dropdown, setdropdown] = useState(false);
  const toggle1 = () => {
    setdropdown(!dropdown);
  };
  return (
    <div>
      <Dropdown toggle={toggle1} isOpen={dropdown} className="shadow">
        <DropdownToggle data-toggle="dropdown" tag="span">
          <p className="nav_menu" style={{ margin: 0 }}>
            WATCH
          </p>
        </DropdownToggle>
        <DropdownMenu className="dropdown_menu shadow">
          <div className="">
            <div
              className="drop_down_item"
              onClick={() => {
                navigate("/videos");
                toggle1();
              }}
            >
              <span className="item_span">VIDEOS</span>
            </div>
            <div
              className="drop_down_item"
              onClick={() => {
                navigate("/images");
                toggle1();
              }}
            >
              <span className="item_span">IMAGES</span>
            </div>
            <div
              className="drop_down_item"
              onClick={() => {
                navigate("/audio");
                toggle1();
              }}
            >
              <span className="item_span">AUDIO</span>
            </div>
          </div>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

    <div className="icon_div p-1">
      <Dropdown toggle={toggle1} isOpen={dropdown} className=" shadow">
        <DropdownToggle data-toggle="dropdown" tag="span">
          <span>Account</span> <img src={account} alt="" />
        </DropdownToggle>
        <DropdownMenu className="dropdown_menu shadow p-4 mt-5">
          <div className="">
            <ButtonGroup>
              <div
                className="drop_down_item"
                onClick={() => {
                  navigate("/register");
                  toggle1();
                }}
              >
                <Button>
                  <span className="item_span">LOGIN</span>
                </Button>
              </div>
              <div
                className="drop_down_item"
                onClick={() => {
                  navigate("/register");
                  toggle1();
                }}
              >
                <Button>
                  <span className="item_span">Signin</span>
                </Button>
              </div>
            </ButtonGroup>

            <div
              className="drop_down_item p-1 m-2"
              onClick={() => {
                navigate("");
                toggle1();
                alert("payment");
              }}
            >
              <span className="item_span ">PAYMENT</span>
            </div>
            <div
              className="drop_down_item p-1 m-2"
              onClick={() => {
                navigate("");
                toggle1();
                alert("my order");
              }}
            >
              <span className="item_span">MY ORDER</span>
            </div>
            <div
              className="drop_down_item p-1 m-2"
              onClick={() => {
                navigate("");
                toggle1();
                alert("Message");
              }}
            >
              <span className="item_span">MESSAGE CENTER</span>
            </div>
          </div>
        </DropdownMenu>
      </Dropdown>
    </div>;
