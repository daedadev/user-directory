import React from "react";
import "../styles/CountrySelect.css";

function CountrySelect({ countrySelect }) {
  return (
    <div className="searchbox">
      <form className="form-inline">
        <select onChange={(e) => countrySelect(e.target.value)}>
          <option value="US">United States</option>
          <option value="AU">Australia</option>
          <option value="BR">Brazil</option>
          <option value="CA">Canada</option>
          <option value="CH">Switzerland</option>
          <option value="DE">Germany</option>
          <option value="DK">Denmark</option>
          <option value="ES">Spain</option>
          <option value="FI">Finland</option>
          <option value="FR">France</option>
          <option value="GB">Great Britain</option>
          <option value="IE">Ireland</option>
          <option value="IR">Iran</option>
          <option value="NL">Netherlands</option>
          <option value="NZ">New Zealand</option>
          <option value="TR">Turkey</option>
        </select>
      </form>
    </div>
  );
}
export default CountrySelect;
