import Card from "../Card";
import { useState, useEffect } from "react";
import React from "react";
import Main from "../Main";
import { moment } from "moment";
import "./fetchApi.css";
import { ImSearch } from "react-icons/im";

export function FetchApi({
  setMaleCount,
  setFemaleCount,
  active,
  setItem,
  turnOn,
  setIsOn,
  fetchDate,
  setFetchDate,
}) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsloaded] = useState(false);
  const [items, setItems] = useState([]);
  const [itemsCopy, setItemsCopy] = useState([]);
  const [query, setQuery] = useState("");

  let className = "";

  const url = "https://randomuser.me/api/?results=15";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsloaded(true);
          localStorage.setItem("latest_users", JSON.stringify(result.results));
          setItems(result.results);
          setItemsCopy(result.results);
          setFetchDate(Date.now());
          localStorage.setItem("date_now", Date.now());
        },
        (error) => {
          setIsloaded(true);
          setError(error);
        }
      );
  }, []);

  useEffect(() => {
    setFemaleCount(items.filter((item) => item.gender === "female").length);
    setMaleCount(items.filter((item) => item.gender === "male").length);
  }, [items]);

  const search = (event) => {
    const inputValue = event.target.value;
    const data = itemsCopy.filter(
      (item) =>
        item.name.first.toLowerCase().includes(inputValue.toLowerCase()) ||
        item.name.last.toLowerCase().includes(inputValue.toLowerCase())
    );
    data && data.length > 0 ? setItem(false) : setItem(true);
    setItems(data);
    setQuery(inputValue);
  };

  if (!isLoaded) {
    return (
      <div className="load">
        {
          <div className="sk-cube-grid">
            <div className="sk-cube sk-cube1"></div>
            <div className="sk-cube sk-cube2"></div>
            <div className="sk-cube sk-cube3"></div>
            <div className="sk-cube sk-cube4"></div>
            <div className="sk-cube sk-cube5"></div>
            <div className="sk-cube sk-cube6"></div>
            <div className="sk-cube sk-cube7"></div>
            <div className="sk-cube sk-cube8"></div>
            <div className="sk-cube sk-cube9"></div>
          </div>
        }
      </div>
    );
  } else if (error) {
    return <h1>Error</h1>;
  } else {
    return (
      <>
        {setMaleCount(items?.filter((item) => item.gender === "male").length)}
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
          {items?.map((item, index) => {
            return (
              <>
                <Main
                  key={index}
                  gender={item.gender}
                  email={item.email}
                  name={item.name.first}
                  lastname={item.name.last}
                  img={item.picture.large}
                  date={item.dob.date}
                  active={active}
                />
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default FetchApi;
