import { useState } from "react";
import { useRouter } from "next/router";
const data = [
  { id: 1, name: "Jargal", email: "jargalsparov@example.com" },
  { id: 2, name: "Temuugei", email: "Temuugei@example.com" },
  { id: 3, name: "Tuvshin", email: "tuvshu@example.com" },
  { id: 4, name: "Gunbilig", email: "gunbe@example.com" },
  { id: 5, name: "Ariunbayar", email: "ariuk@example.com" },
];

export default function Sfilter() {

      const [grid, setGrid]=useState(false);
    const router = useRouter();
    const [search, setSearch] = useState("");
    const filteredData = data.filter((items) =>
        items.name.toLowerCase().includes(search.toLowerCase())
      );
 
  return (
    <div className="w-full h-screen bg-white px-80">
         <p className=" absolute left-5 text-xl h-12 w-20 my-4 rounded-lg hover:bg-slate-700 hover:text-white bg-slate-400 flex items-center justify-center  " onClick={() => router.back()}>Back</p>
      <div className="w-full h-[100px] flex items-center flex-col gap-3 pt-3 ">
        <p className="font-bold text-xl text-black">Search</p>
        <input
          className="text-black border flex  border-black w-full shadow-lg"
          type="search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div >
        {filteredData.length > 0 ? (
            filteredData.map((data) => (
                <div className="w-full h-[120px] rounded-lg border border-black mt-2 shadow-lg">
                  <p className="text-lg text-black font-bold text-opacity-80 pl-2">{data.name}</p>
                  <p className="mt-4 text-sm text-opacity-40 text-black pl-2">{data.email}</p>
                </div>

              ))
        ): <div className="text-black text-lg">no result for : {search}</div>}
      </div>
    </div>
  );
}