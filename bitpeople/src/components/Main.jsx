import { MdCake, MdEmail } from "react-icons/md";
import moment from "moment";

import Email from "../Email";

import "./Main.css";

export const Main = ({ gender, email, name, lastname, img, date, active }) => {
  let className = "";

  return (
    <>
      <div className={gender === "female" ? (className = "female") : "men"}>
        <div className={active != true ? (className = "cardFlex") : "cardGrid"}>
          <img
            src={img}
            alt=""
            className={active != true ? (className = "round") : "square"}
          />
          <div className="info">
            <p>
              {name} {lastname}
            </p>
            <p>
              <MdEmail />
              email: {Email(email)}
            </p>
            <p>
              <MdCake /> {moment(`${date}`).format("DD .MM. YYYY")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Main;
