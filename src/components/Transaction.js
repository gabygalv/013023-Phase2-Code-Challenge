import React from "react";

function Transaction({transaction, onDelete}) {
  const {amount, category, date, description} = transaction

  function handleDelete () {
    fetch(`http://localhost:8001/transactions/${transaction.id}`,{
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(() => {
      onDelete(transaction)
    })
  }

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button onClick={handleDelete}>x</button></td>
    </tr>
  );
}

export default Transaction;
