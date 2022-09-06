import React from "react";

const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        <th> First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        {data.map((user) => (
          <tr key={user.id}>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
