import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const buttons = [
    { name: "Timer", path: "/taskN2", color: "from-red-500 to-yellow-500" },
    { name: "Colors", path: "/task2", color: "from-green-500 to-blue-500" },
    { name: "Weather", path: "/task3", color: "from-purple-500 to-pink-500" },
    { name: "Mongol API", path: "/taskN3", color: "from-orange-500 to-red-600" },
    { name: "My Class", path: "/class", color: "from-teal-500 to-cyan-500" },
    { name: "Search", path: "/task6", color: "from-blue-600 to-indigo-600" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col">
      <header className="bg-gradient-to-r from-purple-700 to-indigo-700 p-8 text-center shadow-md">
        <h1
          className="text-4xl font-bold mb-2 cursor-pointer hover:text-purple-300 transition-colors"
          onClick={() => router.push("/cs")}
        >
          Project Dashboard
        </h1>
        <p className="text-gray-300">Explore my interactive web projects.</p>
      </header>

      <main className="flex-grow flex items-center justify-center p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full">
          {buttons.map(({ name, path, color }, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-lg transform transition-transform hover:scale-105"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-100 transition-opacity duration-300`}></div>
              <div className={`absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-80 transition-opacity duration-300`}></div>
              <button
                className="relative w-full h-full p-6 flex items-center justify-center text-xl font-semibold z-10"
                onClick={() => router.push(path)}
              >
                {name}
              </button>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 p-4 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} My Web Experiments</p>
      </footer>
    </div>
  );
}