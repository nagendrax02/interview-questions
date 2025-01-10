import React, { useState } from "react";
import restaurantsData from "../json/restaurants.json";
import Dropdown from "../components/Dropdown";
import restaurantData from "../json/restaurants.json";

function Restaurants() {
  console.log(restaurantsData);

  const options = [{ name: "Name" }, { name: "Rating" }];

  const [data, setData] = useState(restaurantData);

  const handleDropDownChange = (value) => {
    switch (value) {
      case "Name":
        const filteredData = [...data].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        setData(filteredData);
        break;

      case "Rating":
        const ratingFilteredData = [...data].sort((a, b) => {
          return a.rating - b.rating;
        });
        console.log(ratingFilteredData, "rating ");
        setData(ratingFilteredData);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div>
        <Dropdown
          handleDropDownChange={handleDropDownChange}
          options={options}
        />

        {data.map((user, index) => {
          return (
            <li key={index} style={{ display: "flex", flexDirection: "row" }}>
              <input type="radio"></input>
              <div>{user.name}</div>
            </li>
          );
        })}

        <button
          onClick={() => {
            let filterArray = [...data].sort((a, b) => {
              return a.name.localeCompare(b.name);
            });
            console.log("filtered array-->", filterArray);
            setData(filterArray);
          }}
        >
          Sort
        </button>
      </div>
    </>
  );
}

export default Restaurants;
