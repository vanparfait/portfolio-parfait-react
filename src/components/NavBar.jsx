import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="flex">
      <li className="mr-4">
        <Link
          to="/"
          className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
        >
          Home
        </Link>
      </li>
      <li className="mr-4">
        <Link
          to="/about"
          className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
        >
          About
        </Link>
      </li>
      <li className="mr-4">
        <Link
          to="/projets"
          className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
        >
          Projects
        </Link>
      </li>
      <li className="mr-4">
        <Link
          to={"/contact"}
          className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
