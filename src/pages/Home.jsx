import React from "react";
import PagesLayout from "../Layouts/PagesLayout";
import logo from "../assets/LOGO.png";

function Home() {
  return (
    <PagesLayout>
      <section className="relative h-screen w-full overflow-hidden" id="about">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="https://cdn.pixabay.com/video/2015/09/27/846-140823862_large.mp4"
        />

        {/* <div className="text-center mt-1 mb-1">
          <a
            href="/books"
            className="bg-emerald-500 text-white px-6 py-2 rounded hover:bg-cyan-500 transition"
          >
            View Books
          </a>
        </div> */}

        <div className="bg-black/80 relative h-full flex justify-center items-center">
          <h3 className="relative text-center text-[5rem] font-semibold text-blue-50">
            Welcome To <br /> JE Library
          </h3>
        </div>

        {/* <div className="absolute bottom-6 right-6 z-20 text-black max-w-md">
          <h2 className="italic text-5xl leading-tight ">
            A digital haven built by four passionate minds who love books.
          </h2>
        </div> */}
      </section>
    </PagesLayout>
  );
}

export default Home;
