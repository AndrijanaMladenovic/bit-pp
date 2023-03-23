import React from "react";
import { BsEmojiFrown } from "react-icons/bs";
import "./Error.css";

export default function Error({ noItem, setItem }) {
  if (noItem === true) {
    return (
      <>
        <div className="error_container">
          <span className="emoji">
            <BsEmojiFrown />
          </span>
          <h1 className="message">
            We couldn't find any people matching your search
          </h1>
        </div>
      </>
    );
  } else {
    return setItem(false);
  }
}
