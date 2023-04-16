import React, { useContext } from "react";
import DataContext from "../context/DataContext";

function FilteredArticles() {
  const { search, setSearch } = useContext(DataContext);

  return (
    <div className="flex w-screen px-[1rem] sm:px-[4rem] mx-[4rem] py-[2rem] justify-between border-b-4">
      <p className="text-2xl">Latest Articles</p>
      <div>
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="search"></label>
          <input
            id="search"
            type="text"
            placeholder="Search Posts"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="ring-offset-0 ring-2 rounded-lg p-1"
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
}

export default FilteredArticles;
