import React from "react";

const Page = () => {
  const metrics = [
    {
      title: "Total Sales",
      value: "₹12,00,000",
      change: "+12%",
      isPositive: true,
    },
    {
      title: "Active Users",
      value: "1,200",
      change: "-8%",
      isPositive: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-blue-500 to-purple-600  p-8">
      <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-10 tracking-tight">
          Analytics Dashboard
        </h1>

        {/* Overview Metrics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`flex justify-between items-center rounded-xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-white to-gray-50 border-l-4 ${
                metric.isPositive ? "border-green-500" : "border-red-500"
              }`}
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {metric.title}
                </h3>
                <p className="text-2xl font-bold text-gray-700 mt-2">
                  {metric.value}
                </p>
              </div>
              <div className="text-right">
                <p
                  className={`text-sm font-semibold mt-2 ${
                    metric.isPositive ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {metric.change}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-5">
            Website Traffic
          </h2>
          <div
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl h-72 flex items-center justify-center text-gray-400 shadow-inner"
            role="img"
            aria-label="Website traffic chart placeholder"
          >
            📊 Charts Placeholder
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-5">
            Conversions
          </h2>
          <div
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl h-72 flex items-center justify-center text-gray-400 shadow-inner"
            role="img"
            aria-label="Conversions chart placeholder"
          >
            📈 Charts Placeholder
          </div>
        </div>

        {/* Recent Activities */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Recent Activities
          </h2>
          <ul className="space-y-4">
            {[
              {
                title: "User Registration",
                desc: "New user signed up on 2026-02-16",
                data: "+10 Users",
              },
              {
                title: "Sales Increase",
                desc: "Sales grew by 12% on 2025-02-12",
                data: "₹1,10,000",
              },
              {
                title: "Website Traffic Surge",
                desc: "Traffic increased by 8% on 2025-02-13",
                data: "+200 Visits",
              },
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center justify-between bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-5 border border-gray-100"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    {item.data}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
