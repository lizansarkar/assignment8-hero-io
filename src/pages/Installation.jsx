import React, { useEffect, useState } from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { getStoredCard } from "../components/addToLocalStore";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const storedIds = getStoredCard();
    fetch("/appsData.json")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((app) => storedIds.includes(app.id));
        setInstalledApps(filtered);
      });
  }, []);

  const handleUninstall = (id) => {
    const updated = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updated);
    localStorage.setItem("reedCard", JSON.stringify(updated.map((a) => a.id)));
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
            Explore all your favorite apps managed by you
          </p>
        </div>

        {/* Count */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
          <p className="text-lg font-semibold text-gray-700">
            {installedApps.length} Apps Found
          </p>
        </div>

        {/* Card list */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {installedApps.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-16 h-16 rounded-xl object-cover bg-gray-100"
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {app.title}
                  </h2>
                  
                  <p className="text-sm text-gray-500">
                    {app.companyName || "Unknown Developer"}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {app.description}
              </p>

              <div className="flex items-center justify-between text-sm mb-5">
                <span className="flex items-center gap-1 text-green-600 font-medium">
                  <FaDownload /> {Math.floor(app.downloads / 100000)}M
                </span>
                <span className="flex items-center gap-1 text-yellow-500 font-medium">
                  <FaStar /> {app.ratingAvg}
                </span>
                <span className="text-gray-500">{app.size} MB</span>
              </div>

              <button
                onClick={() => handleUninstall(app.id)}
                className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold transition-all duration-300"
              >
                Uninstall
              </button>
            </div>
          ))}

          {installedApps.length === 0 && (
            <p className="col-span-full text-center text-gray-500 mt-12 text-lg">
              No apps installed yet 😅
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Installation;
