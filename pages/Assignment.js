import { useState } from "react";
import { useRouter } from "next/router";
const data = [
  { id: 1, name: "Jargal", age:"Age:16", hobby:"Boxing", sex:"sex:Male"},
  { id: 2, name: "Temuugei", age:"Age:16", hobby:"basketball", sex:"sex:Male" },
  { id: 3, name: "Tuvshin", age:"Age:16", hobby:"basketball", sex:"sex:Male" },
  { id: 4, name: "Gunbilig", age:"Age:16", hobby:"basketball", sex:"sex:Male" },
  { id: 5, name: "Temuulen", age:"Age:16", hobby:"basketball", sex:"sex:Male" },
  { id: 6, name: "Nomindari", age:"Age:16", hobby:"basketball", sex:"sex:feMale" },
  { id: 7, name: "Siilen", age:"Age:16", hobby:"basketball", sex:"sex:feMale" },
  { id: 8, name: "Delgermurun", age:"Age:16", hobby:"basketball", sex:"sex:Male" },
  { id: 9, name: "ErdeneJargal", age:"Age:16", hobby:"basketball", sex:"sex:Male" },
  { id: 10, name: "Badraa", age:"Age:16", hobby:"basketball", sex:"sex:Male" },
  { id: 11, name: "Munkhnaran", age:"Age:16", hobby:"basketball", sex:"sex:feMale" },
  { id: 12, name: "Ganerdene", age:"Age:16", hobby:"basketball", sex:"sex:Male" },
  { id: 13, name: "Munkhbaysgalan", age:"Age:16", hobby:"basketball", sex:"sex:Male" },
  { id: 14, name: "Billguuntugs", age:"Age:16", hobby:"basketball", sex:"sex:Male" },
  { id: 15, name: "Chilbiligt", age:"Age:16", hobby:"basketball", sex:"sex:Male" },
  { id: 16, name: "Erdenebold", age:"Age:16", hobby:"basketball", sex:"sex:Male" },
  { id: 17, name: "Khangarid", age:"Age:16", hobby:"basketball", sex:"sex:Male" },
  { id: 18, name: "Undrakh", age:"Age:16", hobby:"basketball", sex:"sex:Male" },
  { id: 19, name: "Ariunbayar", age:"Age:16", hobby:"basketball", sex:"sex:Male" },
];
export default function Sfilter() {
    const [grid, setGrid]=useState(false);
    const router = useRouter();
    const [search, setSearch] = useState("");
    const filteredData = data.filter((items) =>
        items.name.toLowerCase().includes(search.toLowerCase()) ||
        items.age.toString().includes(search)
      );
  return (
    <div className="">
      <div className="bg-slate-700 h-20 w-screen flex items-center relative space-x-5">
        <p className="font-bold text-xl text-green-400 pl-10 text-2xl">Our class students</p>
      <div className="flex absolute right-10">
        <button onClick={() => setGrid (!grid)}
                    className="font-semibold px-10 py-2 bg-blue-500 text-white rounded bg-green-400 hover:bg-blue-500">
                    {grid ? "List" : "Grid"}
                </button>
                <input
          className="text-white hover:shadow-blue-400 flex pl-3 bg-green-400 w-[200px] rounded-lg shadow-lg absolute right-40 top-2"
          type="search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      </div>
         <div className="w-full min-h-screen bg-slate-900 px-80">
      <div>
        <div className={`flex flex-col  ${grid ? "grid grid-cols-4 gap-5 w-full" : "w-[1000px]"}`}>{filteredData.length > 0 ? (
            filteredData.map((data) => (
                <div className=" h-[100px] rounded-lg bg-green-500 hover:border-2 hover:drop-shadow-md hover:shadow-blue-600 mt-5 shadow-lg">
                  <p className="text-lg text-white font-bold text-opacity-80 pl-2">{data.name}</p>
                  <div className="flex">
                  <p className="mt-3 text-xl text-opacity-60 text-white pl-2">{data.age}</p>
                  <p className="mt-3 text-xl text-opacity-60 text-white pl-2">{data.hobby}</p>
                  <p className="mt-3 text-xl text-opacity-60 text-white pl-2">{data.sex}</p>
                  </div>
                </div>

              ))
        ): <div className="text-white text-lg">no result for : {search}</div>}
        </div>
      </div>
    </div>
    </div>
  );
}