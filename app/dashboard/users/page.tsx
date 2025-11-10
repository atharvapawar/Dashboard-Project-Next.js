import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-cyan-300 to-purple-100 p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-10 transition-all duration-300">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Users
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Manage your users here. You can view detailed information or browse a
          list of users.
        </p>

        {/* User-related Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* User Details Card */}
          <Link
            href="/dashboard/users/users-details"
            className="group bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-teal-100"
          >
            <h2 className="text-2xl font-semibold text-teal-800 mb-2 group-hover:text-teal-900 transition-colors duration-300">
              Users Details
            </h2>
            <p className="text-gray-600 group-hover:text-gray-700">
              View detailed information about each user in your system.
            </p>
          </Link>

          {/* User List Card */}
          <Link
            href="/dashboard/users/users-list"
            className="group bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-orange-100"
          >
            <h2 className="text-2xl font-semibold text-orange-800 mb-2 group-hover:text-orange-900 transition-colors duration-300">
              Users List
            </h2>
            <p className="text-gray-600 group-hover:text-gray-700">
              Browse and manage all users in the system.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
