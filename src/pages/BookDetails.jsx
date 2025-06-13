import { useParams } from "react-router";
import PagesLayout from "../Layouts/PagesLayout";
import { useState, useEffect } from "react";
import axios from "axios";

const BookDetails = () => {
  //extract the id from the router params
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
      {
        loading? <p>Loading...</p> :
        <section id="book-details">
        <div className="image">
          <img
            src={book.image}
            alt="book-image"
            className="h-40 w-full object-cover"
          />
        </div>
        <div className="details">
          <p>
            Book Title: <span className="font-medium">{book.title}</span>
          </p>
          <p>
            Author: <span className="font-medium">{book.author}</span>
          </p>
          <p>
            Genre: <span className="font-medium">{book.genre}</span>
          </p>
          <p>
            Description: <span className="font-medium">{book.description}</span>
          </p>
          <p>
            Published: <span className="font-medium">{book.year}</span>
          </p>
        </div>
      </section>
      }
    </PagesLayout>
  );
};
export default BookDetails;
