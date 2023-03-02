import React from "react";

function Transaction({transaction}) {
  const {amount, category, date, description} = transaction
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
}

export default Transaction;
