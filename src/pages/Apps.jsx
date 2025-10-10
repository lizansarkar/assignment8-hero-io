import React, { Suspense, useEffect, useMemo, useState } from "react";
import { useLoaderData } from "react-router";
import AppCard from "../components/AppCard";
import AppNotFound from "./error-page/AppNotFound";
const notify = () => toast("Here is your toast.");

const Apps = () => {
  const appsCardData = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // fitler ar function
  const filteredApps = useMemo(() => {
    if (!searchTerm) {
      return appsCardData;
    }
    return appsCardData.filter((app) => {
      return app.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [appsCardData, searchTerm]);

  // jokhon input e kichu likhbo tokhon item gulo filter hobe
  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;

    setIsLoading(true);

    setSearchTerm(newSearchTerm);
  };

  // loader spinner dekhano
  useEffect(() => {
    if (isLoading) {
      // show loader spinner
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [searchTerm, isLoading]);

  // tarport no apsa found componer dekhano
  // if(!isLoading && filteredApps.length === 0) {
  //     return <AppNotFound></AppNotFound>
  // }

  // if(isLoading) {
  //     return (
  //         <div>
  //             <span>App data is loading</span>
  //         </div>
  //     )
  // }

  return (
    <div className="bg-[#F9F9FF]">
      <div className="text-center py-20 gap-5 flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-4xl font-bold">Our All Applications</h1>
        <p className="text-[#6B7280] text-xl">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>

        <div>
          <button onClick={notify}>Make me a toast</button>
          <Toaster />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto flex justify-between items-center mb-10 px-5 py-10">
        <h1 className="font-bold ">
          (<span>{filteredApps.length}</span>) Apps Found
        </h1>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={searchTerm}
            onChange={handleSearchChange}
            type="search"
            required
            placeholder="Search Apps"
          />
        </label>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 pb-20">
        {isLoading ? (
          <div className="col-span-full text-center py-10">
            <span className="text-xl font-semibold text-purple-600">
              Searching for apps...
            </span>
          </div>
        ) : filteredApps.length === 0 ? (
          <div className="col-span-full">
            <AppNotFound />
          </div>
        ) : (
          filteredApps.map((appsData) => (
            <AppCard key={appsData.id} appsData={appsData} />
          ))
        )}
      </div>
    </div>
  );
};

export default Apps;
