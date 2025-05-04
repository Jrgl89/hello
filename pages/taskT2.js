import { useState } from "react";

const data = [
  {
    id: 1,
    name: "iPhone 16",
    price: "$1199",
    image: "https://i.pinimg.com/736x/cc/c0/a0/ccc0a0ea18adff494e572f16bea48c9a.jpg"
  },
  {
    id: 2,
    name: "Water Bottle",
    price: "$15",
    image: "https://i.pinimg.com/736x/7e/a3/e0/7ea3e0fbee59f275a86300be0425bdbe.jpg"
  },
  {
    id: 3,
    name: "Bag",
    price: "$89",
    image: "https://i.pinimg.com/736x/06/bf/09/06bf093fcedcbf75feda0f1bc3c8402a.jpg"
  },
  {
    id: 4,
    name: "Notebook",
    price: "$6",
    image: "https://i.pinimg.com/736x/63/bb/ff/63bbff30997eec3fd21dd85cba1a9099.jpg"
  },
  {
    id: 5,
    name: "MacBook Pro",
    price: "$1999",
    image: "https://i.pinimg.com/736x/18/30/7d/18307dfde0f655618d822607bda8c931.jpg"
  },
  {
    id: 6,
    name: "Pen",
    price: "$2",
    image: "https://i.pinimg.com/736x/5e/58/8b/5e588b5ab7da4006e034f2189365b607.jpg"
  },
  {
    id: 7,
    name: "Pencil",
    price: "$1",
    image: "https://i.pinimg.com/736x/44/b6/7d/44b67d466dc59d923fae9b10ef3085a6.jpg"
  },
  {
    id: 8,
    name: "Wallet",
    price: "$35",
    image: "https://i.pinimg.com/736x/3b/c0/c7/3bc0c718f23c1d132dc3b99dff4614b4.jpg"
  }
];


export default function TaskT2() {
  const [search, setSearch] = useState("");

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen w-full font-sans bg-gray-100">
      {/* Sidebar */}
      <div className="w-[20%] bg-slate-900 text-white flex flex-col items-center py-10 space-y-4">
        <img src="https://nhs.edu.mn/favicon.ico" className="h-28 w-28" />
        <h1 className="text-xl font-bold text-blue-300 text-center">Nest Education IT School</h1>
        <p className="text-white text-center">Баяндалай Жаргал</p>
        <p className="text-white text-center">Анги: 11б</p>

        <div className="w-[80%] bg-blue-500 rounded-full py-2 text-center font-bold text-lg">Task 1</div>
        <div className="w-[80%] bg-blue-500 rounded-full py-2 text-center font-bold text-lg">Task 2</div>
        <div className="w-[80%] bg-blue-500 rounded-full py-2 text-center font-bold text-lg">Task 3</div>
        <div className="w-[80%] bg-blue-500 rounded-full py-2 text-center font-bold text-lg">Task 4</div>
      </div>

      {/* Main Content */}
      <div className="w-[80%] p-10">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">🛒 Product List</h1>
          <input
            type="search"
            placeholder="Search by name..."
            className="w-1/2 p-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="bg-white shadow-lg rounded-md overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-bold text-blue-800">ID</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-blue-800">Name</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-blue-800">Price</th>
                <th className="px-6 py-3 text-left text-sm font-bold text-blue-800">Image</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-gray-900">{item.id}</td>
                  <td className="px-6 py-4 text-gray-900">{item.name}</td>
                  <td className="px-6 py-4 text-gray-900">{item.price}</td>
                  <td className="px-6 py-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 object-cover rounded-md border"
                    />
                  </td>
                </tr>
              ))}
              {filteredData.length === 0 && (
                <tr>
                  <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                    No matching items found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
