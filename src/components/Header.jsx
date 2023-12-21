import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary name">
          <div className="container-fluid">
            <Link className="navbar-brand name" to="/">
              <h2>Fiza Akhtar</h2>
            </Link>
          </div>
        </nav>
        <div className="leftbar text-center">
          <ul style={{ padding: "2px" }}>
            <li
              onClick={() => {
                navigate("/");
              }}
              style={{ cursor: "pointer" }}
            >
              <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
                ABOUT
              </Link>
            </li>
            <li onClick={() => setCheck(!check)} style={{ cursor: "pointer" }}>
              PAINTINGS
            </li>
            {check ? (
              <>
                <li
                  onClick={() => navigate("/unseenHand")}
                  style={{ cursor: "pointer" }}
                >
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={"/unseenHand"}
                  >
                    UNSEEN HAND
                  </Link>
                </li>
                <li
                  onClick={() => navigate("/adaptingtobelong")}
                  style={{ cursor: "pointer" }}
                >
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={"/adaptingtobelong"}
                  >
                    ADAPTING TO BELONG
                  </Link>
                </li>
                <li
                  onClick={() => navigate("/savouringserendipity")}
                  style={{ cursor: "pointer" }}
                >
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={"/savouringserendipity"}
                  >
                    SAVOURING SERENDIPITY
                  </Link>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
