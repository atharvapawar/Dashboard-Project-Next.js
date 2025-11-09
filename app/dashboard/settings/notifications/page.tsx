import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Notifications</h1>

        {/* Notification Settings */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Notification Preferences
          </h2>

          <div className="space-y-4">
            {/* Email */}
            <div>
              <label
                htmlFor="emailNotifications"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Email Notifications
              </label>
              <select
                id="emailNotifications"
                defaultValue="enable"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Email notification preference"
              >
                <option value="enable">Enable</option>
                <option value="disable">Disable</option>
              </select>
            </div>

            {/* SMS */}
            <div>
              <label
                htmlFor="smsNotifications"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                SMS Notifications
              </label>
              <select
                id="smsNotifications"
                defaultValue="disable"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="SMS notification preference"
              >
                <option value="enable">Enable</option>
                <option value="disable">Disable</option>
              </select>
            </div>

            {/* Push */}
            <div>
              <label
                htmlFor="pushNotifications"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Push Notifications
              </label>
              <select
                id="pushNotifications"
                defaultValue="enable"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Push notification preference"
              >
                <option value="enable">Enable</option>
                <option value="disable">Disable</option>
              </select>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 mt-6">
          <button
            type="button"
            className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors"
          >
            Cancel
          </button>

          <button
            type="button"
            className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
