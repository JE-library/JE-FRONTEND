import React from "react";
import PagesLayout from "../Layouts/PagesLayout";

function Home() {
  return (
    <PagesLayout>
      <section id="hero" className="bg-center h-180 ">
        <img
          src="https://cdn.pixabay.com/photo/2018/03/14/20/04/panorama-3226254_1280.jpg"
          alt="heroimg"
          className="bg-cover bg-no-repeat h-screen bg-center"
        />
        <div>
          {/* <img src="https://cdn.pixabay.com/photo/2018/06/05/20/54/hands-3456365_640.jpg" alt="heroimg" /> */}
          {/* <h2 className='text-amber-300 font-semibold mt-1'>Discover delicious recipe books to inspire your next meal.</h2> */}
        </div>
      </section>
      <section className="grid grid-cols-2  p-2" id="about">
        <div className="about-left">
          <h3 className="font-italic text-5xl">JE Library</h3> <br />
          {/* <h2 className='font-black'>Welcome to JE Library <br/> a digital haven built by four passionate minds who love books just as much as the people who write them.</h2> */}
          <p>At JE Library, we don’t just store books — we celebrate them.</p>
          <br />
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2018/01/08/08/47/digitization-of-library-3068971_640.jpg "
          className="w-0"
          alt="aboutimg"
        />
      </section>

      <div className="text-center mt-1 mb-1">
        <a
          href="/books"
          className="bg-emerald-500 text-white px-6 py-2 rounded hover:bg-cyan-500 transition"
        >
          View Books
        </a>
      </div>
    </PagesLayout>
  );
}

export default Home;
