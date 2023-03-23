import React from "react";
import moment from "moment";
import "./footer.css";

export default function Footer() {
  const date = localStorage.getItem("date_now");
  let format = moment.unix(date / 1000).format("DD MMM YYYY hh:mm a");

  return (
    <footer>
      <p>
        <i className="fa fa-copyright" aria-hidden="true"></i> &copy; 2023
        Copyrght Bit
        <span> Last update {moment(format).startOf().fromNow()}</span>
      </p>
    </footer>
  );
}
