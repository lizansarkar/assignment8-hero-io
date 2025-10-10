import React, { useState } from "react";
import { FaChevronDown, FaDownload, FaStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";
import { addToLocalStore } from "./addToLocalStore";
import RatingsChart from "./RatingsChart";
import { ToastContainer } from "react-toastify";

export const CardDetails = () => {
  const [installed, setInstalled] = useState(false);
  const { id } = useParams();

  const cardId = parseInt(id);

  const data = useLoaderData();

  const singleCardData = data.find((card) => card.id === cardId);

  const {
    image,
    title,
    companyName,
    description,
    reviews,
    ratingAvg,
    ratings,
    downloads,
    size,
  } = singleCardData;

const handleInstall = (id) => {
  addToLocalStore(id);
  setInstalled(true);
};

  return (
    <div className="bg-white max-w-[1400px] mx-auto p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center md:justify-start">
          <div className="w-full h-40 sm:h-48 md:h-56 rounded-xl overflow-hidden shadow-2xl border-4 border-gray-100">
            <div className="w-full h-full bg-cover bg-center">
              <img className="w-full" src={image} alt="" />
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-grow md:w-2/3 pt-0 md:pt-4">
          <div className="mb-4 border-b border-gray-100 pb-3">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1 leading-tight">
              {title}
            </h1>
            <p className="text-base text-gray-500 font-semibold">
              {companyName}
              <br></br>
              <span className="text-purple-700">{description}</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-start gap-x-6 gap-y-4 mb-6">
            <div className="flex flex-col items-start">
              <p className="text-xs text-gray-500 uppercase font-medium">
                Downloads
              </p>
              <div className="flex items-center space-x-2">
                <p className="text-xl font-bold text-gray-800">{downloads}</p>
                <FaDownload className="text-green-500 w-5 h-5" />
              </div>
            </div>

            <div className="flex flex-col items-start">
              <p className="text-xs text-gray-500 uppercase font-medium">
                Average Ratings
              </p>
              <div className="flex items-center space-x-2">
                <p className="text-xl font-bold text-gray-800">{ratingAvg}</p>
                <FaStar className="text-yellow-500 w-5 h-5" />
              </div>
            </div>

            <div className="flex flex-col items-start">
              <p className="text-xs text-gray-500 uppercase font-medium">
                Total Reviews
              </p>
              <div className="flex items-center space-x-2">
                <p className="text-xl font-bold text-gray-800">{reviews}</p>
                <FaChevronDown className="text-purple-600 w-5 h-5" />
              </div>
            </div>
          </div>

          <button
            onClick={() => handleInstall(id)}
            disabled={installed}
            className={`w-full md:w-[50%] px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold text-lg rounded-xl shadow-lg transition duration-300 ease-in-out mt-auto ${
              installed
                ? `bg-red-500 cursor-not-allowed`
                : `bg-green-800 hover:bg-green-500 text-white`
            }`}
          >
            {installed ? `Installed` : `Install Now (${size})`}
          </button>
        </div>
      </div>

      {/* rechart ar kaj kora hoyeche */}
      <div>
        <RatingsChart ratings={ratings}></RatingsChart>
      </div>
      <ToastContainer position="top-right" autoClose={2000} theme="colored" />
    </div>
  );
};
