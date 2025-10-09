import React, { Suspense } from "react";
// import { FaDownload, FaStar } from "react-icons/fa";
import AppDataCard from "./AppDataCard";
import { data, Link } from "react-router";

const TrendingApp = ({ data }) => {
  return (
    <Link to={`/cardDetails/${singleCardData.id}`}>
      <div className="trending-app text-center px-4 py-5 bg-[#f9fafb]">
        <div className="text-center py-10">
          <h1 className="font-bold text-[40px]">Trending Apps</h1>
          <p className="text-[18px] text-[#8c8c8c]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 mt-10">
          <Suspense fallback={<div>Loading...</div>}>
            {data.map((singleCardData) => (
              <AppDataCard
                key={singleCardData.id}
                singleCardData={singleCardData}
              ></AppDataCard>
            ))}
          </Suspense>
        </div>
        <div className="text-center my-10">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-3 text-white font-semibold text-lg 
        rounded-xl shadow-lg transition-all duration-300 ease-in-out bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 
        hover:scale-[1.03] active:scale-[0.98] active:shadow-sm"
          >
            Show All
          </a>
        </div>
      </div>
    </Link>
  );
};

export default TrendingApp;
