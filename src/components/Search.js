import React from "react";

function Search({setSearchVal}) {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
