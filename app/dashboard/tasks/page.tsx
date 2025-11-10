import React from "react";

const Page = () => {
  const tasks = [
    {
      id: 1,
      title: "Finish project report",
      description:
        "Complete and submit the final report for the client project.",
      status: "In Progress",
      dueDate: "2025-11-15",
    },
    {
      id: 2,
      title: "Update dashboard UI",
      description: "Refine styles and improve layout responsiveness.",
      status: "Pending",
      dueDate: "2025-11-12",
    },
    {
      id: 3,
      title: "Code review for PR #42",
      description: "Review the pull request and suggest improvements.",
      status: "Completed",
      dueDate: "2025-11-09",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 p-8 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/30">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
          🗒️ Tasks
        </h1>

        {/* Tasks List Section */}
        <section className="space-y-6">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl p-6 border-l-4 transition-all duration-300 transform hover:-translate-y-1 ${
                task.status === "Completed"
                  ? "border-green-500"
                  : task.status === "In Progress"
                  ? "border-yellow-400"
                  : "border-red-500"
              }`}
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {task.title}
                </h2>
                <p className="text-gray-600 mt-2">{task.description}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Due Date:{" "}
                  <span className="font-medium text-gray-700">
                    {task.dueDate}
                  </span>
                </p>
              </div>

              {/* Buttons and Status */}
              <div className="flex flex-wrap gap-3 justify-end">
                <span
                  className={`px-4 py-2 text-sm rounded-full font-semibold shadow-sm ${
                    task.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : task.status === "In Progress"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {task.status}
                </span>

                <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
                  Edit
                </button>

                {task.status !== "Completed" && (
                  <button className="px-4 py-2 text-sm text-white bg-green-600 rounded-lg hover:bg-green-700 transition-all shadow-md hover:shadow-lg">
                    Mark as Completed
                  </button>
                )}

                <button className="px-4 py-2 text-sm text-white bg-red-600 rounded-lg hover:bg-red-700 transition-all shadow-md hover:shadow-lg">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Page;
