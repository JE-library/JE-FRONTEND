import React from 'react'
import picture3Img from "../assets/notebook.jpg";
import PagesLayout from "../Layouts/PagesLayout";
import logo from "../assets/LOGO.png";

const EditForm = () => {
  return (
    <PagesLayout>
      <div id="message" class="message"></div>

      <section id="bookform">
         <div>
          <img src={picture3Img} alt="" />
        </div>

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

       
      </section>
    </PagesLayout>
  )
}

export default EditForm