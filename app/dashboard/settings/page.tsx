import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200 p-10">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-2xl p-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Settings</h1>
        <p className="text-gray-700 mb-6">
          Customize your account settings, profile, and notifications here.
          Choose an option from the sidebar to begin.
        </p>

        <div className="flex flex-col lg:flex-row lg:space-x-12">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 bg-white rounded-lg shadow-md p-6 mb-6 lg:mb-0">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quick Links</h2>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/dashboard/settings/account"
                  className="block text-lg text-gray-800 hover:text-indigo-600 transition-colors py-2 px-4 rounded-md hover:bg-indigo-50"
                >
                  Account
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/settings/notifications"
                  className="block text-lg text-gray-800 hover:text-yellow-600 transition-colors py-2 px-4 rounded-md hover:bg-yellow-50"
                >
                  Notifications
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/settings/profile"
                  className="block text-lg text-gray-800 hover:text-green-600 transition-colors py-2 px-4 rounded-md hover:bg-green-50"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </aside>

          {/* Content area */}
          <main className="flex-1 bg-white shadow-md rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Select a setting
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Choose an option from the sidebar to manage your account, notifications,
              or profile settings.
            </p>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Page;
