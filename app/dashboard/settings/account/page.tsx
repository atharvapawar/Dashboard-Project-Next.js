import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-300 via-blue-500 to-purple-300 p-10 flex items-center justify-center">
      <div className="max-w-5xl w-full bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-10 border border-white/30">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">
          ⚙️ Account Settings
        </h1>

        <form className="space-y-12">
          {/* Profile Information */}
          <section>
            <p className="text-gray-800 text-xl font-semibold mb-6 border-b pb-2">
              👤 Profile Information
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded-lg py-3 px-4 text-gray-700 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="johndoe@example.com"
                  className="w-full border border-gray-300 rounded-lg py-3 px-4 text-gray-700 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                />
              </div>
            </div>
          </section>

          {/* Security */}
          <section>
            <p className="text-gray-800 text-xl font-semibold mb-6 border-b pb-2">
              🔒 Security
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-700"
                >
                  New Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter new password"
                  className="w-full border border-gray-300 rounded-lg py-3 px-4 text-gray-700 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="Re-enter new password"
                  className="w-full border border-gray-300 rounded-lg py-3 px-4 text-gray-700 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                />
              </div>
            </div>
          </section>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 pt-8 border-t">
            <button
              type="button"
              className="px-6 py-2.5 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all shadow-sm"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2.5 text-white bg-gradient-to-br from-indigo-600 to-blue-500 rounded-lg hover:from-indigo-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all shadow-md hover:shadow-lg"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
