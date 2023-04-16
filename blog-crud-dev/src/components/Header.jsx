import { Link } from "react-router-dom";
import Nav from "./Nav";

const Header = ({ title }) => {
  return (
    <header className="flex w-screen px-[1rem] sm:px-[4rem] justify-between text-2xl my-3 flex-none h-[4rem]">
      <h1 className=" text-gray-400 hover:text-gray-600">
        <Link to="/">{title}</Link>
      </h1>
      <Nav />
    </header>
  );
};

export default Header;
