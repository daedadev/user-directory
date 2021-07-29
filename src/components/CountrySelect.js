import React from "react";
import "../styles/CountrySelect.css";

function CountrySelect({ countrySelect }) {
  return (
    <div className="searchbox">
      <form className="form-inline">
        <select onchange="doSomething();" onfocus="this.selectedIndex = -1;">
          <option>US</option>
          <option>AU</option>
          <option>BR</option>
          <option>CA</option>
          <option>CH</option>
          <option>DE</option>
          <option>DK</option>
          <option>ES</option>
          <option>FI</option>
          <option>FR</option>
          <option>GB</option>
          <option>IE</option>
          <option>IR</option>
          <option>NL</option>
          <option>NZ</option>
          <option>TR</option>
        </select>
      </form>
    </div>
  );
}
export default CountrySelect;
