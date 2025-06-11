import { Link } from "react-router";
import PagesLayout from "../Layouts/PagesLayout";

function Books() {
  const books = [
    { id: 1, title: "Ghanaian Foods", author: "chef Brace", genre:"culinary", year: "2021"},
    { id: 2, title: "Japenese Foods", author: "Chef Efua", genre: "culinary", year: "2021"},
    { id: 3, title: "Coffee Recipes", author: "Chef Jackie", genre:"beverages", year: "2021" },
    { id: 4, title: "Weight Loss Recipes", author: "Chef Josephine", genre:"health", year: "2021" },
    { id: 5, title: "Weight Loss Recipes", author: "Chef Josephine", genre:"health", year: "2021"},
    { id: 6, title: "Weight Loss Recipes", author: "Chef Josephine", genre:"health", year: "2021"},
    { id: 8, title: "Weight Loss Recipes", author: "Chef Josephine", genre:"health", year: "2021"},
    { id: 9, title: "Weight Loss Recipes", author: "Chef Josephine", genre:"health", year: "2021"},
   

  ];

  return (
    <PagesLayout>
<div className="p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Discover our books</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
         
          {books.map((book) => (
            <div key={book.id} className="w-50 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl border-white">
             
              <h2 className="text-xl font-bold text-gray-800">{book.title}</h2>
               
              <p className="text-red-500 mt-1">by {book.author}</p>
              {book.genre && (
                <p className="mt-2 text-sm text-black"> Genre: {book.genre}</p>
              )}
              <p className="mt-2 text-bold text-blue-800">Published: {book.year}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              
                <Link to="/books-details"> View Details</Link>
               
              </button>
            </div>
          ))}
        </div>
      </div>


      {/* <div style={{ padding: "1rem" }}>
        <h1>Dicsover All Our Recipe Books</h1>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {books.map((book) => (
            <li key={book.id} style={{ marginBottom: "1rem" }}>
              <div style={{ fontWeight: "bold" }}>{book.title}</div>
              <div style={{ color: "red" }}>by {book.author}</div>
            </li>
          ))}
        </ul>
      </div> */}


      
    </PagesLayout>
  );
}

export default Books;
