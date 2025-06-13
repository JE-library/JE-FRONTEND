import { useNavigate } from "react-router";
import PagesLayout from "../Layouts/PagesLayout";
import axios from "axios";
import { useEffect, useState } from "react";
import logo from "../assets/LOGO.png";

function Books() {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [searchQ, setsearchQ] = useState("");
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `https://je-library-backend.onrender.com/books/${id}`
      );
      alert(res.data.message);
      fetchBooks();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://je-library-backend.onrender.com/books"
      );

      console.log(res.data.data);
      setBooks(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBooks();
  }, []);
  const SearchBooks = async (searchQ) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://je-library-backend.onrender.com/books/search?title=${searchQ}`
      );

      console.log(res.data.data);
      setBooks(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <PagesLayout>
      <div className="flex justify-center mb-6"></div>
      <div className="p-10 bg-gray">
        <h1 className="font-outfit text-[2.8rem] font-normal text-center">
          Discover our books
        </h1>
        <div className="w-full flex justify-center">
          {" "}
          <input
            type="text"
            placeholder="Search by title or author..."
            className="w-1/2 min-w-[250px] px-4 py-2 border border-[rgb(45,45,114)] rounded-[10px] placeholder:font-semibold"
            onChange={(e) => {
              setsearchQ(e.target.value);
              SearchBooks(searchQ);
            }}
          />
        </div>
        {loading ? (
          <div className="min-h-[90vh] flex flex-col items-center">
            <img src={logo}></img>
            <p className="text-2xl font-semibold">Loading....</p>
          </div>
        ) : !books ? (
          <div className="m-4 flex flex-col justify-center items-center text-center">
            <p className="text-[2rem] font-normal text-[rgb(170,1,35)]">Book Not Found!!</p>
            <img src={logo}></img>
          </div>
        ) : (
          <div className=" mt-8 px-16 py-4 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4 rounded-[10px]">
            {books.map((book) => (
              <div
                key={book.id}
                className="bg-white border border-gray-400 shadow-[0_0_15px_rgba(0,0,0,0.1)] p-4 h-[450px] rounded-[10px] flex flex-col justify-center gap-2 transition-all duration-150 ease-in hover:border-black hover:shadow-[0_0_15px_rgba(0,0,0,0.4)] hover:h-[430px]"
              >
                <div className="shadow-[inset_0_0_15px_rgba(0,0,0,0.1)] rounded-[10px] min-h-[240px] max-h-[240px] transition-all duration-150 ease-in hover:shadow-[inset_0_0_15px_rgba(0,0,0,0.267)]">
                  <img
                    src={book.image}
                    alt="book-image"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="h-full p-2 flex flex-col justify-between">
                  <h2 className=" text-[1.2rem] font-semibold text-[rgb(0,0,41)] line-clamp-2">
                    {book.title}
                  </h2>

                  <p className="author text-base font-medium text-[rgb(114,161,4)] line-clamp-1">
                    by {book.author}
                  </p>

                  <p className="genre text-sm font-medium text-[rgb(59,59,65)] line-clamp-1">
                    Genre: {book.genre}
                  </p>

                  <p className="text-sm font-medium text-[rgb(59,59,65)]">
                    Published: {book.year}
                  </p>
                  <div className="pt-2 flex justify-between">
                    <button
                      className="min-w-[70px] bg-[rgb(0,151,189)] px-2 py-[0.1rem] rounded text-[0.9rem] font-medium text-white hover:opacity-80 cursor-pointer"
                      onClick={() => navigate(`/book-details/${book.id}`)}
                    >
                      View 
                    </button>
                    <button
                      className="min-w-[70px] bg-[rgb(0,151,189)] px-2 py-[0.1rem] rounded text-[0.9rem] font-medium text-white hover:opacity-80 cursor-pointer"
                      onClick={() => navigate(`/edit-book/${book.id}`)}
                    >
                      Edit 
                    </button>
                    <button
                      className="min-w-[70px] border border-[crimson] bg-[rgb(255,235,229)] px-2 py-[0.1rem] rounded-[0.3rem] text-[0.9rem] font-medium text-[crimson] hover:bg-[crimson] hover:text-[rgb(255,235,229)] hover:opacity-80 cursor-pointer"
                      onClick={() => handleDelete(book.id)}
                    >
                      Delete 
                    </button>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </PagesLayout>
  );
}

export default Books;
