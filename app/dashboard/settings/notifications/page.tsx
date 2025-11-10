import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-300 via-purple-300 to-blue-300 p-10 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-10 border border-white/30">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">
          🔔 Notifications
        </h1>

        {/* Notification Settings */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
            Notification Preferences
          </h2>

          <div className="space-y-6">
            {/* Email Notifications */}
            <div className="group">
              <label
                htmlFor="emailNotifications"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email Notifications
              </label>
              <select
                id="emailNotifications"
                defaultValue="enable"
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all hover:border-indigo-400"
                aria-label="Email notification preference"
              >
                <option value="enable">Enable</option>
                <option value="disable">Disable</option>
              </select>
            </div>

            {/* SMS Notifications */}
            <div className="group">
              <label
                htmlFor="smsNotifications"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                SMS Notifications
              </label>
              <select
                id="smsNotifications"
                defaultValue="disable"
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all hover:border-indigo-400"
                aria-label="SMS notification preference"
              >
                <option value="enable">Enable</option>
                <option value="disable">Disable</option>
              </select>
            </div>

            {/* Push Notifications */}
            <div className="group">
              <label
                htmlFor="pushNotifications"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Push Notifications
              </label>
              <select
                id="pushNotifications"
                defaultValue="enable"
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all hover:border-indigo-400"
                aria-label="Push notification preference"
              >
                <option value="enable">Enable</option>
                <option value="disable">Disable</option>
              </select>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 border-t pt-6">
          <button
            type="button"
            className="px-6 py-2.5 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all shadow-sm"
          >
            Cancel
          </button>

          <button
            type="button"
            className="px-6 py-2.5 text-white bg-gradient-to-r from-indigo-600 to-blue-500 rounded-lg hover:from-indigo-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all shadow-md hover:shadow-lg"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
