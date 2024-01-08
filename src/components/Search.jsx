import React from 'react';
import "./search.css"

const Search = () => {
  return (
    <form action="#" className="search">
      <div className="input-group">
        <input
          id="search"
          name="search"
          type="text"
          className="form-control rounded-start-pill "
          placeholder="Search..."
          required
        />
        <label className="visually-hidden" htmlFor="search"></label>
        <button
        style={{
          background:"#121212"
        }}
          className="btn rounded-end-pill  text-white"
          type="submit"
          aria-label="Search"
        >
          <i className="bi bi-search"></i>
        </button>
      </div>
    </form>
  );
};

export default Search;
