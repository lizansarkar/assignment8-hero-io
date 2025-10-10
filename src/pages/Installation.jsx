import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
// import { FaDownload, FaStar } from "react-icons/fa";
import { getStoredCard } from "../components/addToLocalStore";
import { FaDownload, FaStar } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useLoaderData } from "react-router";
// import { useState } from "react";

const Installation = () => {
  const loadedData = useLoaderData();
  const [installedApps, setInstalledApps] = useState(loadedData);
  const [sort, setSort] = useState("");

  useEffect(() => {
    const storedIds = getStoredCard(); // ✅ LocalStorage থেকে IDs নিচ্ছে
    if (storedIds.length > 0) {
      const filtered = loadedData.filter((app) => storedIds.includes(app.id));
      setInstalledApps(filtered);
    }
  }, [loadedData]);

  const handleUninstall = (id) => {
    const updated = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updated);
    localStorage.setItem("reedCard", JSON.stringify(updated.map((a) => a.id)));
    toast.error("App Uninstalled Successfully!");
  };

const handleSort = (type) => {
    setSort(type); 

    let sortedApps = [...installedApps];

    if (type === "downloads") {
        sortedApps.sort((a, b) => b.downloads - a.downloads);
    }
    
    if (type === "size") {
        sortedApps.sort((a, b) => b.size - a.size);
    }
  
    setInstalledApps(sortedApps);
};

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Your Installed Apps
          </h1>
          <p className="text-gray-500 text-sm md:text-base">
            Explore all your installed & favorite apps 💫
          </p>
        </div>

        {/* Count */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
          <p className="text-lg font-semibold text-gray-700">
            {installedApps.length} Apps Found
          </p>

          <div>
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="btn m-1">
                Sort By ⬇️: ({sort?sort:""})
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a onClick={() => handleSort("downloads")}>By Download</a>
                </li>
                <li>
                  <a onClick={() => handleSort("size")}>By Size</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card list */}
        <div className="space-y-4 p-4">
          {installedApps.map((app) => (
            <div
              key={app.id}
              className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm"
            >
              <div className="flex items-center gap-3">
                <img
                  src={app.image}
                  alt={app.name}
                  className="w-12 h-12 rounded-lg"
                />

                <div className="flex flex-col">
                  <h3 className="font-semibold">{app.title}</h3>
                  <div className="flex gap-3 items-center">
                    <span className="flex justify-center items-center gap-2">
                      <FaDownload color="54CF68"></FaDownload> {app.downloads}
                    </span>
                    <span className="flex justify-center items-center gap-2">
                      <FaStar color="ff8811"></FaStar> {app.ratingAvg}
                    </span>
                    <p className="font-bold text-[#8c8c8c]">{app.size} mb</p>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => handleUninstall(app.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded-md cursor-pointer"
                >
                  Uninstalled
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={1500} theme="colored" />
    </div>
  );
};

export default Installation;
