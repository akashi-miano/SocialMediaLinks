import React from "react";
import avatar from "../../public";

const Card = ({ avatar, name, location, job }) => {
  return (
    <div className="bg-[#333] text-white text-center md:min-w-[450px] rounded-lg p-8">
      <div className="img-wrapper mb-4">
        <img
          src={avatar}
          alt={`${name}'s avatar`}
          className="h-[150px] w-[150px] rounded-full object-cover mx-auto"
        />
      </div>
      <header>
        <h1 className="text-3xl">{name}</h1>
        <p className="text-md text-[#c5f82a]">{location}</p>
        <p className="text-md text-gray-300 my-4">{job}</p>
      </header>
      <ul>
        <li>
          <a
            href="https://akashi-portfolio.netlify.app/"
            className="bg-[#444] hover:bg-[#c5f82a] hover:text-black duration-200 rounded-lg w-full px-8 py-2"
            target="_blank"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="https://github.com/akashi-miano"
            className="bg-[#444] hover:bg-[#c5f82a] hover:text-black duration-200 rounded-lg w-full px-8 py-2"
            target="_blank"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.frontendmentor.io/profile/akashi-miano"
            className="bg-[#444] hover:bg-[#c5f82a] hover:text-black duration-200 rounded-lg w-full px-8 py-2"
            target="_blank"
          >
            Frontend Mentor
          </a>
        </li>
        <li>
          <a
            href="https://x.com/TrollerHD1"
            className="bg-[#444] hover:bg-[#c5f82a] hover:text-black duration-200 rounded-lg w-full px-8 py-2"
            target="_blank"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/gtg_x/"
            className="bg-[#444] hover:bg-[#c5f82a] hover:text-black duration-200 rounded-lg w-full px-8 py-2"
            target="_blank"
          >
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Card;
