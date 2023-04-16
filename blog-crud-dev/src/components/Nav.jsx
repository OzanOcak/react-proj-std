import { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";

const Nav = () => {
  return (
    <nav className="flex mb-5">
      <ul className="flex gap-2 fl">
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
