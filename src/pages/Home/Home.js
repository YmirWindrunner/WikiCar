import { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [car, setCar] = useState("");

  const APIKEY = "rqxpuRQNimXHwav4X5ORiQ==rtod1WvMfmNZmSf6";
  const APIKEYPHOTO = "ActLY6VgedpqAypSzs4RxitKdUj4Ht3XXXCPufYwoYk";

  const fetchUserData = (event) => {
    event.preventDefault();

    var apiResponses = [];
    var apiResponsePhoto = [];

    const headers = { "Content-Type": "application/json", "X-Api-Key": APIKEY };
    try {
      fetch(
        `https://api.unsplash.com/search/photos?page=1&per_page=20&query=${car}&client_id=${APIKEYPHOTO}`
      )
        .then((response) => {
          return response.json();
        })
        .then((photos) => {
          apiResponsePhoto = photos;
        });
    } catch (error) {
      console.log("hello");
      console.log(error);
    }
    try {
      fetch("https://api.api-ninjas.com/v1/cars?limit=2&model=" + car, {
        headers,
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          apiResponses = data;
          if (apiResponses.length > 0) {
            navigate("/cars", {
              state: { apiResponsePhoto, apiResponses, car },
              replace: true,
            });
          } else {
            // window.location.href = "Error.js";
            navigate("/error");
          }
        });
      // throw new Error("oops");
    } catch (error) {
      console.log("block error");
      // window.location.href = "Error.js";
      console.log(error);
    }
  };

  return (
    <div className="my-div">
      <p className="Titre">CAR TRACKER</p>
      <div className="container">
        <form onSubmit={fetchUserData}>
          <label>
            <input
              className="Barre"
              placeholder="Search for a car..."
              type="text"
              name="name"
              onChange={(event) => setCar(event.target.value)}
            />
          </label>
        </form>
      </div>
      <div className="description">
        <h3>Search for your favorits models</h3>
      </div>
    </div>
  );
}
