import React from "react";
import PagesLayout from "../Layouts/PagesLayout";
import picture1Img from "../assets/reading.jpg"


const BookDetails = () => {
  return (
    <PagesLayout>
      <section id="book-details" className="grid grid-cols-[1fr 1fr]">
        <div className="image">
          <img src={picture1Img} alt="" />
        </div>
        <div className="details">
          <p>Book Name</p>
          <p>Author</p>
          <p>Genre</p>
          <p>Description</p>
        </div>
      </section>
    </PagesLayout>
  );
};

export default BookDetails;
