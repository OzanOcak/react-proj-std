import { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "./context/DataContext";

const Nav = () => {
  const { search, setSearch } = useContext(DataContext);
  return (
    <nav className="flex w-screen justify-around mb-5">
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
      <ul className="flex gap-2 fl">
        <li className="hover:underline">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:underline">
          <Link to="/list">Post</Link>
        </li>
        <li className="hover:underline">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
