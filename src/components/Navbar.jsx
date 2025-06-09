import { Link } from "react-router";
function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center bg-black text-blue-200">
      <span>RECIPE.</span>

      <ul className="flex flex-row gap-x-[60px]">
      
  <li>

    <Link to></Link><a href="/">Home</a>
  </li>
  <li>
    <a href="/books">Books</a>
  </li>
  <li>
    <a href="/add-book">Form</a>
  </li>
  <li>
    <a href="/books-details">Details</a>
  </li>
</ul>
    

      <button className="bg-red-700 text-amber-50 rounded-2xl py-[10px] px-[20px]">SIGN UP</button>
      <div>

      </div>
      </nav>

      
  );
};

export default Navbar