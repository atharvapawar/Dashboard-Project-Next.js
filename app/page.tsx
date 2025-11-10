import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-400/30 rounded-full blur-3xl top-10 left-10"></div>
        <div className="absolute w-md h-112 bg-indigo-500/40 rounded-full blur-3xl bottom-10 right-10"></div>
      </div>

      {/* Content */}
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 drop-shadow-lg">
          Welcome to the Dashboard App
        </h1>

        <p className="text-lg sm:text-xl text-indigo-100 mb-10 leading-relaxed">
          Manage your tasks, track analytics, and stay organized with our
          powerful dashboard.
        </p>

        <Link
          href="/dashboard"
          className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
        >
          Go To Dashboard →
        </Link>
      </div>
    </div>
  );
}
