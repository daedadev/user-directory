import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  users: [{}],
  order: "descend",
  filteredUsers: [{}],
});

export default AuthContext;
