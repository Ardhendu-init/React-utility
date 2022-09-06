import React from "react";
import { useState } from "react";
import "./App.css";
import Table from "./Table";
import { Users } from "./user";
const App = () => {
  const [name, setName] = useState("");
  const users = Users.filter((users) =>
    users.first_name.toLowerCase().includes(name)
  );
  return (
    <div className="app">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        onChange={(e) => setName(e.target.value)}
      />

      <Table data={users} />
    </div>
  );
};

export default App;
