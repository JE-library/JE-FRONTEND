import React from "react";
import picture3Img from "../assets/reading.jpg";
import PagesLayout from "../layouts/PagesLayout";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

import logo from "../assets/LOGO.png";


const EditForm = () => {
  const navigate = useNavigate();

  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState({});
  const [formData, setFormData] = useState({});

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

  //   const fetchSingleBook = async () => {
  //     setLoading(true);

  //     try {
  //       const res = await axios.put(
  //         `https://je-library-backend.onrender.com/books/${params?.id}`,
  //         payload
  //       );

  //       console.log(res.data.data);
  //       setBook(res.data.data);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  const handleSubmit = async (e) => {
    // prevent from refreshing
    e.preventDefault();

    console.log(formData);

    const payload = {
      image: formData.image ?? book?.image,
      title: formData.title ?? book?.title,
      author: formData.author ?? book?.author,
      description: formData.description ?? book?.description,
      genre: formData.genre ?? book?.genre,
      year: formData.year ?? book?.year,
    };

    try {
      const res = await axios.put(
        `https://je-library-backend.onrender.com/books/${params?.id}`,
        payload
      );

      console.log(res.data.data);
      setBook(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleBook();
  }, []);

  return (
    <PagesLayout>
      <div id="message" className="message"></div>

      <section id="bookform">
        <div>
          <img src={picture3Img} alt="" />
        </div>

        <div>
          <form id="myForm" onSubmit={handleSubmit}>
            <h3>Edit Book Details</h3>

            <div className="form-group">
              <p className="block text-[20px] font-medium text-gray-700 mb-1">
                Book Image
              </p>
              <input
                type="text"
                placeholder=" Enter image url"
                name="image"
                className="w-[550px] border border-gray-300 p-[10px] rounded-[15px] focus:outline-none focus:ring focus:ring-gray-500"
                value={formData?.image ?? book?.image}
                onChange={(e) =>
                  setFormData((prev) => {
                    return { ...prev, image: e.target.value };
                  })
                }
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
                value={formData?.title ?? book?.title}
                onChange={(e) =>
                  setFormData((prev) => {
                    return { ...prev, title: e.target.value };
                  })
                }
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
                value={formData?.author ?? book?.author}
                onChange={(e) =>
                  setFormData((prev) => {
                    return { ...prev, author: e.target.value };
                  })
                }
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
                value={formData?.description ?? book?.description}
                onChange={(e) =>
                  setFormData((prev) => {
                    return { ...prev, description: e.target.value };
                  })
                }
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
                value={formData?.genre ?? book?.genre}
                onChange={(e) =>
                  setFormData((prev) => {
                    return { ...prev, genre: e.target.value };
                  })
                }
                required
              />
            </div>

            <div className="form-group">
              <p className="block text-[20px] font-medium text-gray-700 mb-1">
                Year Published
              </p>
              <input
                type="text"
                placeholder="Enter the Year"
                name="year"
                className="w-[550px] border border-gray-300 p-[10px] rounded-[15px] focus:outline-none focus:ring focus:ring-gray-500"
                value={formData?.year ?? book?.year}
                onChange={(e) =>
                  setFormData((prev) => {
                    return { ...prev, year: e.target.value };
                  })
                }
                required
              />
            </div>

            <button
              type="Submit"
              className="w-[150px] bg-gray-600 text-white mt-[30px] ml-[420px] p-[10px] justify-center rounded-[15px] hover:bg-emerald-500 transition duration-200"
            >
              Edit Book
            </button>
          </form>
        </div>
      </section>
    </PagesLayout>
  );
};

export default EditForm;
