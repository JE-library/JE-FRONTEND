import React from "react";
import PagesLayout from "../Layouts/PagesLayout";
import picture2Img from "../assets/books1.jpg";
import logo from "../assets/LOGO.png";

function BookForm() {
  return (
    <PagesLayout>
      <div id="message" class="message"></div>

      <section id="bookform">
        <div>
          <form id="myForm">
            <h3>Add A New Book</h3>

            <div class="form-group">
              <p>Book Title</p>
              <input type="text" placeholder=" Enter book title" required />
            </div>

            <div class="form-group">
              <p>Book Author</p>
              <input type="text" placeholder="Enter Author's name" required />
            </div>

            <div class="form-group">
              <p>Book Description</p>
              <input type="text" placeholder="Short Description" required />
            </div>

            <div class="form-group">
              <p>Genre</p>
              <input type="text" placeholder="Enter the Genre" required />
            </div>

            <button>Add Book</button>
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
