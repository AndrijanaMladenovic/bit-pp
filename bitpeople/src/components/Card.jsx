import { MdCake, MdEmail } from "react-icons/md";
import moment from "moment";
import { useEffect } from "react";
import { ImSearch } from "react-icons/im";
import { useState } from "react";
import { FetchApi } from "./api/FetchApi";
import Email from "../Email";

import "./card.css";

const Card = ({
  active,
  query,
  setQuery,
  setMaleCount,
  setFemaleCount,
  setItem,
  setItemsCopy,
  itemsCopy,
}) => {
  let className = "";
  const data1 = JSON.parse(localStorage.getItem("latest_users"));

  const [data, setData] = useState(data1);

  useEffect(() => {
    setFemaleCount(data.filter((item) => item.gender === "female").length);
    setMaleCount(data.filter((item) => item.gender === "male").length);
  }, [data]);

  const search = (event) => {
    const inputValue = event.target.value;
    const data = itemsCopy.filter(
      (item) =>
        item.name.first.toLowerCase().includes(inputValue.toLowerCase()) ||
        item.name.last.toLowerCase().includes(inputValue.toLowerCase())
    );
    data && data.length > 0 ? setItem(false) : setItem(true);
    setData(data);
    setQuery(inputValue);
  };

  return (
    <>
      {setMaleCount(data?.filter((item) => item.gender === "male").length)}
      <div className="search">
        <h1>
          <ImSearch />
        </h1>
        <input
          placeholder="search Users"
          value={query}
          type="search"
          onChange={search}
        />
      </div>
      <div className={active !== true ? (className = "flex") : "grid"}>
        {data?.map((item, index) => {
          return (
            <>
              <div
                key={index}
                className={
                  item.gender === "female" ? (className = "female") : "men"
                }>
                <div
                  className={
                    active != true ? (className = "cardFlex") : "cardGrid"
                  }>
                  <img
                    src={item.picture.large}
                    alt=""
                    className={
                      active != true ? (className = "round") : "square"
                    }
                  />
                  <div className="info">
                    <p>
                      {item.name.first} {item.name.last}
                    </p>

                    <p>
                      <MdEmail />
                      email: {Email(item.email)}
                    </p>

                    <p>
                      <MdCake />{" "}
                      {moment(`${item.dob.date}`).format("DD .MM. YYYY")}
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Card;
