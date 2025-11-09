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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Users List</h1>

        {/* Users Table */}
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="min-w-full table-auto w-full text-sm">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Role</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-100">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="py-4 px-4 text-gray-900 font-medium">
                    {user.name}
                  </td>
                  <td className="py-4 px-4 text-gray-600">{user.email}</td>
                  <td className="py-4 px-4 text-gray-600">{user.role}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : user.status === "Inactive"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td className="py-4 px-4">
                    <div className="flex items-center justify-start space-x-2">
                      <button
                        type="button"
                        aria-label={`Edit ${user.name}`}
                        className="px-3 py-1 rounded-md text-sm bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        aria-label={`View ${user.name}`}
                        className="px-3 py-1 rounded-md text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
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
