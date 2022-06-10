import React from "react";
import "./css/google.css";
const Google = () => {
  return (
    <>
      <div className="google-cont">
        <form
          action="https://www.google.com/search"
          method="get"
          name="searchform"
        >
          <input
            type="text"
            name="q"
            placeholder="Google Search"
            className="search-input"
            autoComplete="off"
          />
          <button className="search-icon" type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </>
  );
};

export { Google };
