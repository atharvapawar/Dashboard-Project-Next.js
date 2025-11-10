import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-indigo-300 to-purple-300 p-10 flex items-start justify-center">
      <div className="max-w-7xl w-full mx-auto bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-10 border border-white/30">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
          ⚙️ Settings
        </h1>
        <p className="text-gray-700 mb-8 text-lg leading-relaxed">
          Manage your account, profile, and notifications all in one place.
          Choose a section below to get started.
        </p>

        <div className="flex flex-col lg:flex-row lg:space-x-12">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 bg-white rounded-xl shadow-md p-6 mb-8 lg:mb-0 border border-gray-100 transition-all hover:shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Quick Links
            </h2>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/dashboard/settings/account"
                  className="block text-lg font-medium text-gray-800 hover:text-indigo-600 transition-all py-2.5 px-4 rounded-lg hover:bg-indigo-50 hover:translate-x-1 duration-300"
                >
                  💼 Account
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/settings/notifications"
                  className="block text-lg font-medium text-gray-800 hover:text-yellow-600 transition-all py-2.5 px-4 rounded-lg hover:bg-yellow-50 hover:translate-x-1 duration-300"
                >
                  🔔 Notifications
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/settings/profile"
                  className="block text-lg font-medium text-gray-800 hover:text-green-600 transition-all py-2.5 px-4 rounded-lg hover:bg-green-50 hover:translate-x-1 duration-300"
                >
                  👤 Profile
                </Link>
              </li>
            </ul>
          </aside>

          {/* Content area */}
          <main className="flex-1 bg-white rounded-xl shadow-md p-10 border border-gray-100 hover:shadow-lg transition-all duration-300">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Select a Setting
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              Use the links on the left to view and edit your account details,
              manage your notification preferences, or customize your profile.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <span className="inline-block w-4 h-4 bg-indigo-500 rounded-full animate-pulse"></span>
              <p className="text-sm text-gray-500 italic">
                Tip: Your changes will be saved automatically.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Page;
