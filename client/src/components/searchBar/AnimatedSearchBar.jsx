import React, { useState } from "react";
import SearchComponent from "../ui/animated-glowing-search-bar";

const AnimatedSearchBar = ({
  onSearch,
  placeholder = "Search properties...",
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  const handleFocus = () => {
    // Add any focus logic here
  };

  const handleBlur = () => {
    // Add any blur logic here
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-md">
        <SearchComponent
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default AnimatedSearchBar;
