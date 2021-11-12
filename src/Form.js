import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <form className="Form" id="city-search">
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Please type a city"
            autoComplete="off"
            className="form-control search-input"
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            className="btn btn-primary w-100"
            value="Search"
          />
        </div>
      </div>
    </form>
  );
}
