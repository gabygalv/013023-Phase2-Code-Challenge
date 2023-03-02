import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const API = "http://localhost:8001/transactions"
function AccountContainer() {
  const [transactionData, setTransactionData] = useState([])
  const [searchVal,setSearchVal] = useState('')

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(setTransactionData)
  }, [])

  function newFormData (newTransaction) {
    setTransactionData([...transactionData, newTransaction])
  }

  console.log(searchVal)

  return (
    <div>
      <Search setSearchVal={setSearchVal}/>
      <AddTransactionForm API={API} newFormData={newFormData}/>
      <TransactionsList 
      transactionData={transactionData.filter
      (transaction => transaction.description.toLowerCase().includes
      (searchVal.toLowerCase()))} />
    </div>
  );
}

export default AccountContainer;
