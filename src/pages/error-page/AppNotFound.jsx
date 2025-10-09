import React from "react";

const AppNotFound = () => {
  return (
    <div>
      <div className="bg-[#eeeeee] min-h-screen flex items-center justify-center">
        <div className="min-h-screenflex items-center justify-center p-4">
          <div className="flex flex-col items-center justify-center text-center max-w-lg mx-auto">
            <div className="mb-8">
              <img
                src="/public/img/App-Error.png"
                alt="404 Page Not Found"
                className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md mx-auto"
              />
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              OPPS!! APP NOT FOUND
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-md">
              The App you are requesting is not found on our system.  please try another apps
            </p>

            {/* Go Back Button */}
            <div className="text-center my-10">
              <a
                href=""
                rel="noopener noreferrer"
                className="px-10 py-3 text-white font-semibold text-lg 
        rounded-xl shadow-lg transition-all duration-300 ease-in-out bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 
        hover:scale-[1.03] active:scale-[0.98] active:shadow-sm"
              >
                Go Back
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppNotFound;
