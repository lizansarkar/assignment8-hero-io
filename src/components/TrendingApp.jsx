import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";

const TrendingApp = () => {
  return (
    <div className="trending-app text-center px-4 py-5">
      <div className="text-center py-10">
        <h1 className="font-bold text-[40px]">Trending Apps</h1>
        <p className="text-[18px] text-[#8c8c8c]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 mt-10 border border-green-500">

        <div
          className="bg-white rounded-xl 
        shadow-lg 
        p-4 
        border border-gray-100
        transform hover:scale-[1.02] transition-transform duration-300
      "
        >
          {/* ছবির স্থান (Image Placeholder) */}
          <div
            className="
          h-[316px] // ছবির উচ্চতা (height)
          bg-gray-200 
          rounded-xl 
          mb-4 // নিচে একটু ফাঁকা স্থান
        "
          >
            {/* এখানে ছবির `<img />` ট্যাগ বসাতে পারেন */}
          </div>

          {/* শিরোনাম (Title) */}
          <h2
            className="
          text-xl 
          font-semibold 
          text-gray-800 
          mb-4 // নিচে একটু ফাঁকা স্থান
        "
          >
            Forest: Focus For Productivity
          </h2>

          {/* ডাউনলোড ও রেটিং সেকশন */}
          <div className="flex justify-between items-center">
            {/* ডাউনলোড সংখ্যা */}
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
              <span>9M</span>
            </div>

            {/* রেটিং */}
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
              <span>5</span>
            </div>
          </div>
        </div>

        <div
          className="bg-white rounded-xl 
        shadow-lg 
        p-4 
        border border-gray-100
        transform hover:scale-[1.02] transition-transform duration-300
      "
        >
          {/* ছবির স্থান (Image Placeholder) */}
          <div
            className="
          h-[316px] // ছবির উচ্চতা (height)
          bg-gray-200 
          rounded-xl 
          mb-4 // নিচে একটু ফাঁকা স্থান
        "
          >
            {/* এখানে ছবির `<img />` ট্যাগ বসাতে পারেন */}
          </div>

          {/* শিরোনাম (Title) */}
          <h2
            className="
          text-xl 
          font-semibold 
          text-gray-800 
          mb-4 // নিচে একটু ফাঁকা স্থান
        "
          >
            Forest: Focus For Productivity
          </h2>

          {/* ডাউনলোড ও রেটিং সেকশন */}
          <div className="flex justify-between items-center">
            {/* ডাউনলোড সংখ্যা */}
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
              <span>9M</span>
            </div>

            {/* রেটিং */}
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
              <span>5</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TrendingApp;
