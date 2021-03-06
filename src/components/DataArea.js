import React, { Component } from "react";
import DataTable from "./DataTable";
import Nav from "./Nav";
import API from "../utils/API";
import "../styles/DataArea.css";

export default class DataArea extends Component {
  state = {
    users: [{}],
    order: "descend",
    filteredUsers: [{}],
  };

  headings = [
    { name: "Image", width: "10%" },
    { name: "Name", width: "10%" },
    { name: "Phone", width: "20%" },
    { name: "Email", width: "20%" },
    { name: "DOB", width: "10%" },
  ];

  handleSort = (heading) => {
    if (this.state.order === "descend") {
      this.setState({
        order: "ascend",
      });
    } else {
      this.setState({
        order: "descend",
      });
    }

    const compareFnc = (a, b) => {
      if (this.state.order === "ascend") {
        // account for missing values
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        // numerically
        else if (heading === "name") {
          return a[heading].first.localeCompare(b[heading].first);
        } else {
          return a[heading] - b[heading];
        }
      } else {
        // account for missing values
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        // numerically
        else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        } else {
          return b[heading] - a[heading];
        }
      }
    };
    const sortedUsers = this.state.filteredUsers.sort(compareFnc);
    this.setState({ filteredUsers: sortedUsers });
  };

  handleSearchChange = (event) => {
    console.log(event.target.value);
    const filter = event.target.value;
    const filteredList = this.state.users.filter((item) => {
      // merge data together, then see if user input is anywhere inside
      let values = Object.values(item).join("").toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ filteredUsers: filteredList });
  };

  searchByCountry(country) {
    API.getCountry(country).then((results) => {
      this.setState({
        users: results.data.results,
        filteredUsers: results.data.results,
      });
    });
  }

  searchByGender(gender) {
    API.getGender(gender).then((results) => {
      this.setState({
        users: results.data.results,
        filteredUsers: results.data.results,
      });
    });
  }

  componentDidMount() {
    API.getUsers().then((results) => {
      this.setState({
        users: results.data.results,
        filteredUsers: results.data.results,
      });
    });
  }

  render() {
    return (
      <>
        <Nav handleSearchChange={this.handleSearchChange} />
        <div className="searchbox">
          <form className="former">
            <h2>Select Country</h2>
            <select
              className="selector"
              onChange={(e) => this.searchByCountry(e.target.value)}
            >
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
          <form className="former">
            <h2>Or Select Gender</h2>
            <select
              className="selector"
              onChange={(e) => this.searchByGender(e.target.value)}
            >
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </form>
        </div>

        <div className="data-area">
          <DataTable
            headings={this.headings}
            users={this.state.filteredUsers}
            handleSort={this.handleSort}
          />
        </div>
      </>
    );
  }
}
