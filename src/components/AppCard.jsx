import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const AppCard = ({ appsData }) => {
  return (
    <Link to={`/cardDetails/${appsData.id}`}>
      <div>
        <div
          className="bg-white rounded-xl 
            shadow-lg 
            p-4 
            border border-gray-100
            transform hover:scale-[1.02] transition-transform duration-300
          "
        >
          <div
            className="
              h-[316px]
              bg-gray-200 
              rounded-xl 
              mb-4
            "
          >
            <img
              className="h-full w-full object-cover rounded-xl"
              src={appsData.image}
              alt={appsData.title}
            />
          </div>
          <h2
            className="
              text-xl 
              font-semibold 
              text-gray-800 
              mb-4
            "
          >
            {appsData.title}
          </h2>

          <div className="flex justify-between items-center">
            <div
              className="
                flex items-center 
                bg-green-50 
                text-green-700 
                px-3 py-1 
                rounded-md 
                font-medium text-sm
              "
            >
              <FaDownload className="w-3 h-3 mr-2" />
              <span>{appsData.downloads}</span>
            </div>

            <div
              className="
                flex items-center 
                bg-orange-50 
                text-orange-600 
                px-3 py-1 
                rounded-md 
                font-medium text-sm
              "
            >
              <FaStar className="w-3 h-3 mr-2" />
              <span>
                {appsData.ratings.map((ratingItem, index) => (
                  <div key={index} className="flex items-center">
                    <span className="rating-name">{ratingItem.name}</span>
                    {/* <span className="rating-count">count {ratingItem.count}</span> */}
                  </div>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
