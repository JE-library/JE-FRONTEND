import { useParams } from "react-router";
import PagesLayout from "../Layouts/PagesLayout";
import { useState, useEffect } from "react";
import axios from "axios";
import logo from "../assets/LOGO.png";

const BookDetails = () => {
  const params = useParams();
  console.log(params);

  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState({});

  const fetchSingleBook = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://je-library-backend.onrender.com/books/${params?.id}`
      );

      console.log(res.data.data);
      setBook(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleBook();
  }, []);

  return (
    <PagesLayout>
      {loading ? (
        <div className="min-h-[90vh] flex flex-col items-center">
          <img src={logo}></img>
          <p className="text-2xl font-semibold">Loading....</p>
        </div>
      ) : (
        <section
          id="book-details"
          class="min-h-[80vh] grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] px-24 py-8 bg-[rgb(243,243,243)]"
        >
          <div
            id="image"
            className="min-h-[40vh] max-h-[500px] bg-white p-6 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.233)] overflow-hidden transition-all duration-200 ease-in hover:p-[0.1rem] hover:shadow-[-7px_0_20px_white,inset_0_0_15px_rgba(0,0,0,0.233)]"
          >
            <img
              src={book.image}
              alt="book-image"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="p-4 md:p-8 flex flex-col justify-evenly">
            <p className="flex flex-col text-[1.5rem] font-medium text-[rgb(114,161,4)]">
              Book Title:{" "}
              <span className="text-[1.1rem] font-medium text-[rgb(59,59,65)]">
                {book.title}
              </span>
            </p>
            <p className="flex flex-col text-[1.5rem] font-medium text-[rgb(114,161,4)]">
              Author:{" "}
              <span className="text-[1.1rem] font-medium text-[rgb(59,59,65)]">
                {book.author}
              </span>
            </p>
            <p className="flex flex-col text-[1.5rem] font-medium text-[rgb(114,161,4)]">
              Genre:{" "}
              <span className="text-[1.1rem] font-medium text-[rgb(59,59,65)]">
                {book.genre}
              </span>
            </p>
            <p className="flex flex-col text-[1.5rem] font-medium text-[rgb(114,161,4)]">
              Description:{" "}
              <span className="text-[1.1rem] font-medium text-[rgb(59,59,65)]">
                {book.description}
              </span>
            </p>
            <p className="flex flex-col text-[1.5rem] font-medium text-[rgb(114,161,4)]">
              Published:{" "}
              <span className="text-[1.1rem] font-medium text-[rgb(59,59,65)]">
                {book.year}
              </span>
            </p>
          </div>
        </section>
      )}
    </PagesLayout>
  );
};
export default BookDetails;
