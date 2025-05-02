import { useState } from "react";

const data = [
  { id: 1, name: "Iphone" },
  { id: 2, name: "Water bottle" },
  { id: 3, name: "Bag" },
  { id: 4, name: "Notebook" },
  { id: 5, name: "Macbook" },
  { id: 6, name: "Pen" },
  { id: 7, name: "Pencil" },
  { id: 8, name: "Wallet" },
  { id: 9, name: "Key" },
  { id: 10, name: "Book" },
];

export default function TaskT2() {
  const [search, setSearch] = useState("");

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="h-screen w-screen bg-gray-100 flex font-sans">
      {/* Sidebar */}
      <div className="w-[20%] bg-white shadow-md flex flex-col items-center pt-10">
        <img src="https://nhs.edu.mn/favicon.ico" className="h-28 w-28 rounded-full" alt="Logo" />
        <h1 className="text-blue-600 font-bold text-lg text-center pt-5">Nest Education IT School</h1>
        <h2 className="text-lg text-center pt-5 text-gray-600">Баяндалай Жаргал</h2>
        <h2 className="text-lg text-center text-gray-600">Анги: 11б</h2>

        {["Task 1", "Task 2", "Task 3", "Task 4"].map((task, idx) => (
          <div key={idx} className="w-[80%] h-12 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white text-lg mt-4 hover:bg-blue-600 transition">
            {task}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="w-[80%] flex flex-col items-center py-10">
        {/* Header */}
        <section className="w-[90%] flex items-center justify-between mb-6">
          <div className="text-2xl font-bold text-blue-700">Харилцагчид</div>
          <input
            className="h-12 w-1/2 rounded-xl pl-5 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="search"
            placeholder="Search by name"
            onChange={(e) => setSearch(e.target.value)}
          />
        </section>

        {/* Data List View */}
        <div className="w-[90%] bg-white rounded-xl shadow divide-y divide-gray-200">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div key={item.id} className="p-4 hover:bg-gray-50 transition flex items-center">
                <span className="text-lg font-medium text-gray-800">{item.name}</span>
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-gray-500 text-lg">No results found</div>
          )}
        </div>
      </div>
    </div>
  );
}
