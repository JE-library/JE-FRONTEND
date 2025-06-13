import React from "react";
import PagesLayout from "../layouts/PagesLayout";
import picture2Img from "../assets/booksadd.png"
import axios from "axios";
import { useNavigate } from "react-router";
import logo from "../assets/LOGO.png";


function BookForm() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    // prevent from refreshing
    e.preventDefault();

    const formData = e.target;

    console.log(formData);

    const payload = {
      image: formData.image.value,
      title: formData.title.value,
      author: formData.author.value,
      description: formData.description.value,
      genre: formData.genre.value,
      year: formData.year.value,
    };

    try {
      const res = await axios.post(
        "https://je-library-backend.onrender.com/books",
        payload
      );
      alert(res.data.message);
      navigate("/books");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PagesLayout>
      <div id="message" className="message"></div>

      <section id="bookform">
        <div>
          <form id="myForm" onSubmit={handleSubmit}>
            <h3>Add A New Book</h3>

            <div className="form-group">
              <p className="block text-[20px] font-medium text-gray-700 mb-1">
                Book Image
              </p>
              <input
                type="text"
                placeholder=" Enter image url"
                name="image"
                className="w-[550px] border border-gray-300 p-[10px] rounded-[15px] focus:outline-none focus:ring focus:ring-gray-500"
                required
              />
            </div>

            <div className="form-group">
              <p className="block text-[20px] font-medium text-gray-700 mb-1">
                Book Title
              </p>
              <input
                type="text"
                placeholder=" Enter book title"
                name="title"
                className="w-[550px] border border-gray-300 p-[10px] rounded-[15px] focus:outline-none focus:ring focus:ring-gray-500"
                required
              />
            </div>

            <div className="form-group">
              <p className="block text-[20px] font-medium text-gray-700 mb-1">
                Book Author
              </p>
              <input
                type="text"
                placeholder="Enter Author's name"
                name="author"
                className="w-[550px] border border-gray-300 p-[10px] rounded-[15px] focus:outline-none focus:ring focus:ring-gray-500"
                required
              />
            </div>

            <div className="form-group">
              <p className="block text-[20px] font-medium text-gray-700 mb-1">
                Book Summary
              </p>
              <input
                type="text"
                placeholder="Short Summary"
                name="description"
                className="w-[550px] border border-gray-300 p-[10px] rounded-[15px] focus:outline-none focus:ring focus:ring-gray-500"
                required
              />
            </div>

            <div className="form-group">
              <p className="block text-[20px] font-medium text-gray-700 mb-1">
                Genre
              </p>
              <input
                type="text"
                placeholder="Enter the Genre"
                name="genre"
                className="w-[550px] border border-gray-300 p-[10px] rounded-[15px] focus:outline-none focus:ring focus:ring-gray-500"
                required
              />
            </div>

            <div className="form-group">
              <p className="block text-[20px] font-medium text-gray-700 mb-1">
                Year Published
              </p>
              <input
                type="text"
                placeholder=" Enter the Year"
                name="year"
                className="w-[550px] border border-gray-300 p-[10px] rounded-[15px] focus:outline-none focus:ring focus:ring-gray-500"
                required
              />
            </div>
            <button
              type="Submit"
              className="w-[150px] bg-gray-600 text-white mt-[30px] ml-[420px] p-[10px] justify-center rounded-[15px] hover:bg-emerald-500 transition duration-200"
              id="button"
            >
              Add Book
            </button>
          </form>
        </div>

        <div>
          <img src={picture2Img} alt="" />
        </div>
      </section>
    </PagesLayout>
  );
}

export default BookForm;
