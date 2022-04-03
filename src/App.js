import "./App.scss";
import React, { useState } from "react";

const api = {
  key: "057b52589ea631c44cdb8d131610feaa",
  base: "https://api.openweathermanp.org/data/2.5/",
};
// console.log(api);

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (ev) => {
    if (ev.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };
  const buildmounth = (d) => {
    let month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December,",
    ];
  };
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="app">
      <main>
        <div className="box">
          <img src="https://www.nawpic.com/media/2020/summer-aesthetic-wallpaper-iphone-nawpic-15.jpg"></img>
          <div className="input">
            <input
              type="text"
              className="bar-search"
              placeholder="Search..."
            ></input>
          </div>
          <div className="results">
            <div>
              <div className="city">City</div>
              <div className="day">day</div>
            </div>
            <div className="degree">Grade</div>
            <div className="weather">Vreme</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
