import React from "react";
import SearchBox from "./SearchBox.js";
import CountrySelect from "./CountrySelect";
import "../styles/Nav.css";

function Nav({ handleSearchChange, countrySelect }) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="navbar-collapse row" id="navbarNav">
        <SearchBox handleSearchChange={handleSearchChange} />
        <CountrySelect countrySelect={countrySelect} />
      </div>
    </nav>
  );
}
export default Nav;
