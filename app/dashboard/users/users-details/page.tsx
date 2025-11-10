const page = () => {
  const user = {
    name: "John Doe",
    email: "John.doe@gmail.com",
    role: "Admin",
    status: "Active",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsam accusamus qui harum incidunt nesciunt rem quod vero. Quasi, ipsum? Ipsum dolor sit amet consectetur adipisicing elit. Iste ipsam accusamus qui harum incidunt nesciunt.",
    profilePicture: "https://randomuser.me/api/portraits/men/22.jpg",
    activities: [
      { id: 1, description: "Updated password", timestamp: "2025-02-10" },
      { id: 2, description: "Changed email address", timestamp: "2025-02-25" },
      {
        id: 3,
        description: "Logged in from a new device",
        timestamp: "2025-01-15",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-blue-400 to-orange-300 p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-9 transition-all duration-300">
        {/* Profile Header */}
        <div className="flex items-center mb-9">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover mr-8 ring-4 ring-blue-100 shadow-md"
          />

          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">
              {user.name}
            </h1>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-500 font-medium">{user.role}</p>
            <p
              className={`text-sm mt-2 font-semibold ${
                user.status === "Active"
                  ? "text-green-600 bg-green-50 px-3 py-1 rounded-full inline-block"
                  : "text-red-600 bg-red-50 px-3 py-1 rounded-full inline-block"
              }`}
            >
              {user.status}
            </p>
          </div>
        </div>

        {/* Bio Section */}
        <section className="mb-9">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            About
          </h2>
          <p className="text-gray-600 leading-relaxed">{user.bio}</p>
        </section>

        {/* Activities Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-5">
            Recent Activities
          </h2>
          <ul className="space-y-5">
            {user.activities.map((activity) => (
              <li
                key={activity.id}
                className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-sm">
                  {activity.description.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-gray-800 font-medium">
                    {activity.description}
                  </p>
                  <p className="text-sm text-gray-500">{activity.timestamp}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3 mt-9">
            <button
              type="button"
              className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200"
            >
              Cancel
            </button>

            <button
              type="button"
              className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md transition-all duration-200"
            >
              Save Changes
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
