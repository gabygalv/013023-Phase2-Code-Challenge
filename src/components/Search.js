import React from "react";

function Search({setSearchVal, onSort}) {

  const handleSort = e => onSort(e.target.value)

  return (
    <>
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={(e) => setSearchVal(e.target.value)}
      />
        <i className="circular search link icon"></i>
    </div>
    <div>
      <label className="ui center aligned fluid">Sort By: </label>
        <select onChange={handleSort}>
          <option value=''></option>  
          <option value='category'>Category</option>  
          <option value='description'>Description</option>  
        </select>
    </div>
    </>
  );
}

export default Search;
