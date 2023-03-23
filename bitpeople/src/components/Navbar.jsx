import React, { useState } from "react";

import { Link } from "react-router-dom";
import { IoMdRefresh } from "react-icons/io";
import { BsFillGrid3X2GapFill, BsFillGrid1X2Fill } from "react-icons/bs";
import "./Navbar.css";
import $ from "jquery";

export default function Navbar({
  maleCount,
  femaleCount,
  active,
  setActive,
  turnOn,
  setIsOn,
  fetchDate,
  setFetchDate,
}) {
  const [on, off] = useState(false);
  let className = "";

  const setItem = () => {
    if (on === false) {
      return $(".icons").css("display", "none");
    }
  };

  const checkPath = () => {
    const path = window.location.pathname;
    if (path === "/") {
      $(".icons").css("display", "block");
    }
  };
  checkPath();

  return (
    <>
      <nav>
        <Link
          className="home"
          to="/"
          style={{ display: "flex" }}
          onClick={(e) =>
            setIsOn(turnOn) && e.preventDefault() && setIsOn(false)
          }>
          Bit People
        </Link>
        <div className="icons">
          <Link to="/about" onClick={() => setItem(!on)}>
            About
          </Link>
          <Link onClick={() => setIsOn(!turnOn)}>
            <IoMdRefresh />
          </Link>
          <Link onClick={() => setActive(!active)}>
            {active ? <BsFillGrid1X2Fill /> : <BsFillGrid3X2GapFill />}
          </Link>
        </div>
      </nav>
      <span className="count">
        Male: {maleCount} Female : {femaleCount}
      </span>
    </>
  );
}
