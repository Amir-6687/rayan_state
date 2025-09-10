import { useState } from "react";
import "./searchBar.scss";
import { Link } from "react-router-dom";

const types = ["buy", "rent"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="searchBar">
      <div className="searchContainer">
        <div className="typeSelector">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => switchType(type)}
              className={`typeBtn ${query.type === type ? "active" : ""}`}
            >
              {type === "buy" ? "Buy" : "Rent"}
            </button>
          ))}
        </div>

        <div className="searchForm">
          <div className="inputGroup">
            <div className="inputWrapper">
              <input
                type="text"
                name="city"
                placeholder="Enter city or location"
                onChange={handleChange}
                className="searchInput"
              />
            </div>
          </div>

          <div className="priceGroup">
            <div className="inputWrapper">
              <input
                type="number"
                name="minPrice"
                الا
                min={0}
                max={10000000}
                placeholder="Min €"
                onChange={handleChange}
                className="priceInput"
              />
            </div>

            <div className="inputWrapper">
              <input
                type="number"
                name="maxPrice"
                min={0}
                max={10000000}
                placeholder="Max €"
                onChange={handleChange}
                className="priceInput"
              />
            </div>
          </div>

          <Link
            to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
            className="searchButton"
          >
            <svg
              className="searchIcon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>Search</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
