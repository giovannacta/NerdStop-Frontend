import React from "react";
import { NavLink } from "react-router-dom";
import gtaImage from "../assets/gta6new.jpg";

const Hero = () => {
  return (
    <section className="bg-primary w-full h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 mt-24">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Grand Theft Auto VI Only at NerdStop
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Secure your access to the most anticipated game of the decade!
            Pre-order GTA 6 now and get ready to explore a more immersive open
            world, packed with action and endless possibilities. Don’t miss your
            chance to be among the first to play!
          </p>

          <div className="flex gap-4 mt-6">
            <NavLink
              to=""
              className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300 hover:bg-opacity-80"
            >
              Pre-order Now!
            </NavLink>
            <a
              href="https://www.youtube.com/watch?v=QdBZY2fkU-0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300 hover:bg-gray-100"
            >
              Watch the Trailer
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={gtaImage}
            alt="GTA 6"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
