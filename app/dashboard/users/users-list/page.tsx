import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

const Page: React.FC = () => {
  const users: User[] = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Editor",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
      role: "Viewer",
      status: "Active",
    },
    {
      id: 4,
      name: "Emily Brown",
      email: "emily.brown@example.com",
      role: "Editor",
      status: "Active",
    },
    {
      id: 5,
      name: "David Lee",
      email: "david.lee@example.com",
      role: "Admin",
      status: "Inactive",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-300 via-cyan-300 to-purple-300 p-10">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl p-10 transition-all duration-300">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
          Users List
        </h1>

        {/* Users Table */}
        <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-100">
          <table className="min-w-full text-sm border-collapse">
            <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white uppercase text-xs font-semibold">
              <tr>
                <th className="py-3 px-5 text-left">Name</th>
                <th className="py-3 px-5 text-left">Email</th>
                <th className="py-3 px-5 text-left">Role</th>
                <th className="py-3 px-5 text-left">Status</th>
                <th className="py-3 px-5 text-left">Actions</th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-100">
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-blue-50 transition-colors duration-200"
                >
                  <td className="py-4 px-5 text-gray-900 font-medium">
                    {user.name}
                  </td>
                  <td className="py-4 px-5 text-gray-600">{user.email}</td>
                  <td className="py-4 px-5 text-gray-600">{user.role}</td>
                  <td className="py-4 px-5">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 mr-2 rounded-full ${
                          user.status === "Active"
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      ></span>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 px-5">
                    <div className="flex items-center space-x-3">
                      <button
                        type="button"
                        aria-label={`Edit ${user.name}`}
                        className="px-4 py-1.5 rounded-md text-sm bg-blue-600 text-white hover:bg-blue-700 shadow-sm transition-all duration-200"
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        aria-label={`View ${user.name}`}
                        className="px-4 py-1.5 rounded-md text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-sm transition-all duration-200"
                      >
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
