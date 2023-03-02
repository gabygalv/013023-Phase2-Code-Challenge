import React, { useState } from "react";

function AddTransactionForm({API, newFormData}) {
  const [formData, setFormData] = useState({
    description:'',
    date:'',
    category:'',
    amount:'',
    id:'',
  })
function handleChange (e) {
  const {name, value} = e.target
  setFormData({
    ...formData, 
    [name]: value
  })
}

function handleSubmit (e) {
  e.preventDefault()
  fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  .then(res => res.json())
  .then(newFormData(formData))
}

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input 
          onChange={handleChange}
          type="date" 
          name="date" 
          value={formData.date}  />
          <input
          onChange={handleChange} 
          type="text" 
          name="description" 
          placeholder="Description" 
          value={formData.description} />
          <input
          onChange={handleChange} 
          type="text" 
          name="category" 
          placeholder="Category" 
          value={formData.category} />
          <input
          onChange={handleChange} 
          type="number" 
          name="amount" 
          placeholder="Amount" 
          step="0.01" 
          value={formData.amount}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
