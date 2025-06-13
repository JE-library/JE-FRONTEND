import { Link } from "react-router";
import logo from "../assets/LOGO.png";
function Navbar() {
  return (
   <nav className="bg-[oklch(21%_0.034_264.665)] px-24 py-4 flex justify-between items-center">
      <span className="flex items-center gap-[0.3rem]">
        <img className="invert h-[50px] w-[50px]" src={logo} alt="" srcset="" />
        <h2 className="font-bold font-outfit text-white text-xl">
          JE LIBRARY.
        </h2>
      </span>

      <ul className="w-[20%] flex justify-between">
        <li className="font-medium text-[oklch(87.9%_0.169_91.605)] text-[1.1rem] hover:text-white">
          <Link to="/">Home</Link>
        </li>
        <li className="font-medium text-[oklch(87.9%_0.169_91.605)] text-[1.1rem] hover:text-white">
          <Link to="/books">Books</Link>
        </li>
        <li className="font-medium text-[oklch(87.9%_0.169_91.605)] text-[1.1rem] hover:text-white">
          <Link to="/add-book">Form</Link>
        </li>
      </ul>
    </nav>

      
  );
};

export default Navbar