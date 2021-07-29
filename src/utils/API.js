import axios from "axios";

export default {
  // Gets all users
  getUsers: function () {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  },

  getCountry: function (country) {
    return axios.get(`https://randomuser.me/api/?results=200&nat=${country}`);
  },

  getGender: function (gender) {
    return axios.get(`https://randomuser.me/api/?results=200&gender=${gender}`);
  },
};
