import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const API = "http://localhost:8001/transactions"
function AccountContainer() {
  const [transactionData, setTransactionData] = useState([])
  const [searchVal,setSearchVal] = useState('')
  const [sorted, setSorted] = useState('')

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(setTransactionData)
  }, [])

  function newFormData (newTransaction) {
    setTransactionData([...transactionData, newTransaction])
  }

  function onDelete (transToDelete) {
    const freshTransactions = transactionData.filter(transaction => transaction.id !== transToDelete.id)
    setTransactionData(freshTransactions)
  }

  function onSort(sortedTrans) {
    setSorted(sortedTrans)
  }

  const byCategoryOrDesc = (a, b) => {
    switch (sorted) {
      case 'category': 
        if (a.category.toLowerCase() < b.category.toLowerCase()) {
          return -1
        } else {
          return 1
        }
      case 'desc':
        if (a.description.toLowerCase() < b.description.toLowerCase()) {
          return -1
        } else {
          return 1
        }
      default: return 0
    }
  }

  const sortedTransactions = [...transactionData].sort( byCategoryOrDesc)
  console.log(sortedTransactions)

  return (
    <div>
      <Search setSearchVal={setSearchVal} onSort={onSort}/>
      <AddTransactionForm API={API} newFormData={newFormData}/>
      <TransactionsList 
      onDelete={onDelete}
      transactionData={sortedTransactions.filter
      (transaction => transaction.description.toLowerCase().includes
      (searchVal.toLowerCase()))} />
    </div>
  );
}

export default AccountContainer;
