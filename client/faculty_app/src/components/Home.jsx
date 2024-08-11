import React from "react";
import { useState } from "react";
import "../components/Home.css";
import Results from "./Results";

export default function Home() {
  const [searchinitiated, setSearchstat] = useState(false);
  const searchStat = () => {
    setSearchstat(true);
  };
  const [selectedFilter, setFilter] = useState("");
  return (
    <>
      <div className="parent">
        <div
          className={`search-container ${searchinitiated ? "slide-up" : ""}`}
        >
          <input
            className="form-control me-2 outline"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <select
            className="filter"
            value={selectedFilter}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          >
            <option value="Dept" hidden>
              Dept
            </option>
            <option>IT</option>
            <option>CSE</option>
            <option>AIML</option>
          </select>
          <button
            className="btn btn-outline-primary search"
            onClick={searchStat}
            type="submit"
          >
            Search
          </button>
        </div>
        <Results searchinitiated={searchinitiated} />
      </div>
    </>
  );
}
