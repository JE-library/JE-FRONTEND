import React from 'react'
import PagesLayout from '../Layouts/PagesLayout'

function BookForm() {

  
  return (
  <PagesLayout>
    
      <div id="message" class="message"></div>
   
  <form id="myForm">
    <div class="form-group">
      <label for="Title">Book Title</label>
      <input type="text" id="Title" name="Title" placeholder=" Enter book title" required />
    </div>
    

    <div class="form-group">
      <label for="Author">Book Author</label>
      <input type="text" id="Author" name="Author" placeholder="Enter Author's name" required />
    </div>

    <div class="form-group">
      <label for="Book description">Book Description</label>
      <input type="text" id="Book Description" name="Book Description" placeholder="Short Description" required />
    </div>

    <div class="form-group">
      <label for="Genre">Genre</label>
      <input type="text" id="Genre" name="Genre" placeholder="Enter the Genre" required />
    </div>

    <button type="submit">Add Book</button>
  </form>

  </PagesLayout>
    
  );
};

export default BookForm