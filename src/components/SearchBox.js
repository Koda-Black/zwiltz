import React, { useState } from "react";

import searchIcon from "../assets/images/Vector.png";

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process search with the searchTerm
    console.log("Processing search for:", searchTerm);
    // Reset the search term after processing
    setSearchTerm("");
  };

  return (
    <form onSubmit={handleSubmit} id="search">
      <div className="search-container">
        <input
          className="search-box"
          type="text"
          placeholder="Looking for design |"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit" className="search-submit">
          <img src={searchIcon} alt="search" />
        </button>
      </div>
    </form>
  );
}

export default SearchBox;
