"use client";
import React, { useState, ChangeEvent } from "react";

const Page: React.FC = () => {
  const [image, setImage] = useState<string>(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXmEcKM5U_dh_rHnbnc1UHQHu6gtJmxurdXg&s"
  );

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-blue-300 to-cyan-300 p-8 flex items-center">
      <div className="max-w-4xl mx-auto w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/30">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
          Profile Settings
        </h1>

        {/* Profile Picture Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Profile Picture
          </h2>

          <div className="flex items-center space-x-6">
            <div className="w-28 h-28 rounded-full bg-gray-200 overflow-hidden ring-4 ring-white/70 shadow-lg">
              <img
                src={image}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <label
                htmlFor="upload"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-lg shadow-md cursor-pointer hover:scale-105 transform transition-all duration-150 focus:outline-none focus:ring-4 focus:ring-indigo-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 16V4m0 0L3 8m4-4 4 4M17 8v12m0 0l4-4m-4 4-4-4"
                  />
                </svg>
                <span className="font-medium">Change Picture</span>
              </label>

              <input
                id="upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />

              <p className="text-sm text-gray-500">
                JPG, PNG — up to 5MB. The image will be used as your avatar.
              </p>
            </div>
          </div>
        </section>

        {/* Profile Information Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Profile Information
          </h2>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="fullname"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                defaultValue="John Doe"
                className="mt-1 block w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-800 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-300 outline-none transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                defaultValue="John_doe"
                className="mt-1 block w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-800 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-300 outline-none transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                defaultValue="John.doe@gmail.com"
                className="mt-1 block w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-800 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-300 outline-none transition-all"
              />
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 mt-6">
          <button
            type="button"
            className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors shadow-sm"
          >
            Cancel
          </button>

          <button
            type="button"
            className="px-6 py-2 text-white bg-gradient-to-r from-indigo-600 to-blue-500 rounded-lg hover:from-indigo-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors shadow-md"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
