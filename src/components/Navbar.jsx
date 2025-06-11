import { Link } from "react-router";
function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center bg-black text-amber-50 ">
      <span>JE LIBRARY.</span>

      <ul className="flex flex-row gap-x-[60px]">
      
  <li>

    <Link to="/">Home</Link>
  </li>
  <li>
    <Link to="/books">Books</Link>
  </li>
  <li>
    <Link to="/add-book">Form</Link>
  
  </li>
  <li>
    <Link to="/books-details">Details</Link>
  </li>
  <li>
    <Link to="/books-details">Contacts</Link>
  </li>
</ul>
    

      <button className="bg-red-700 text-amber-50 rounded-2xl  py-[10px] px-[10px]">SIGN UP</button>
      <div>

      </div>
      </nav>

      
  );
};

export default Navbar