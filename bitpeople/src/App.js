import "./App.css";
import Card from "./components/Card";
import { React, useState, useEffect } from "react";
import FetchApi from "./components/api/FetchApi";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router";

function App() {
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);
  const [active, setActive] = useState(false);
  const [noItem, setItem] = useState(false);
  const [ready, setIsReady] = useState(false);
  const [turnOn, setIsOn] = useState(false);
  const [query, setQuery] = useState("");
  const data1 = JSON.parse(localStorage.getItem("latest_users"));
  const [itemsCopy, setItemsCopy] = useState(data1);
  const [fetchDate, setFetchDate] = useState(0);

  if ((turnOn === true) | !data1) {
    return (
      <>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar
                  maleCount={maleCount}
                  femaleCount={femaleCount}
                  active={active}
                  setActive={setActive}
                  ready={ready}
                  setIsReady={setIsReady}
                  turnOn={turnOn}
                  setIsOn={setIsOn}
                />
                <FetchApi
                  setMaleCount={setMaleCount}
                  setFemaleCount={setFemaleCount}
                  active={active}
                  setActive={setActive}
                  setItem={setItem}
                  noItem={noItem}
                  ready={ready}
                  setIsReady={setIsReady}
                  turnOn={turnOn}
                  setIsOn={setIsOn}
                  fetchDate={fetchDate}
                  setFetchDate={setFetchDate}
                />
              </>
            }
          />
          <Route path="/about" element={<About setIsOn={setIsOn} />} />
        </Routes>
        <Error noItem={noItem} setItem={setItem} />;
        <Footer fetchDate={fetchDate} setFetchDate={setFetchDate} />
      </>
    );
  } else if ((turnOn === false) | data1) {
    return (
      <>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar
                  maleCount={maleCount}
                  femaleCount={femaleCount}
                  active={active}
                  setActive={setActive}
                  ready={ready}
                  setIsReady={setIsReady}
                  turnOn={turnOn}
                  setIsOn={setIsOn}
                />
                <Card
                  query={query}
                  setQuery={setQuery}
                  maleCount={maleCount}
                  setMaleCount={setMaleCount}
                  setFemaleCount={setFemaleCount}
                  setItem={setItem}
                  active={active}
                  setActive={setActive}
                  itemsCopy={itemsCopy}
                  setItemsCopy={setItemsCopy}
                />
              </>
            }
          />
          <Route path="/about" element={<About setIsOn={setIsOn} />} />
        </Routes>
        <Error noItem={noItem} setItem={setItem} />;
        <Footer />
      </>
    );
  }
}

export default App;
