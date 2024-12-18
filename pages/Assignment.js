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

    <div className="w-full min-h-screen bg-slate-900 px-80">
              <button onClick={() => setGrid (!grid)}
                    className="absolute top-5 right-5 px-4 py-2 bg-blue-500 text-white rounded bg-teal-500 hover:bg-blue-500 transition">
                    {grid ? "Жагсаалт харах руу шилжих" : "Grid view рүү шилжих"}
                </button>
         <p className=" absolute left-5 text-xl h-12 w-20 bg-teal-500   my-4 rounded-lg hover:bg-gray-700 hover:text-white bg-gray-500 flex items-center justify-center  " onClick={() => router.back()}>Back</p>
      <div className="w-full h-[100px] flex items-center flex-col gap-3 pt-3 ">
        <p className="font-bold text-xl text-white">Student List</p>
        <input
          className="text-white pl-2 flex bg-teal-500 w-[200px] rounded-lg shadow-lg"
          type="search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div >
        <div className={`mt-8 flex flex-col gap-4 ${grid ? "grid grid-cols-2 gap-4 " : ""}`}>{filteredData.length > 0 ? (
            filteredData.map((data) => (
                <div className="w-full h-[120px] rounded-lg bg-blue-500 hover:-translate-y-6 duration-700 hover:border-2 hover:drop-shadow-md hover:shadow-white   mt-8 shadow-lg">
                  <p className="text-lg text-white font-bold text-opacity-80 pl-2">{data.name}</p>
                  <div className="flex">
                  <p className="mt-4 text-xl text-opacity-60 text-white pl-2">{data.age}</p>
                  <p className="mt-4 text-xl text-opacity-60 text-white pl-2">{data.hobby}</p>
                  <p className="mt-4 text-xl text-opacity-60 text-white pl-2">{data.sex}</p>
                  </div>
                 
                  
                </div>

              ))
        ): <div className="text-white text-lg">no result for : {search}</div>}</div>
        
      </div>
    </div>
  );
}
