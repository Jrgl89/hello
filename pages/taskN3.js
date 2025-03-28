import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function TaskN3() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [grid, setGrid] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tourist = await fetch(
          "https://mongol-api-rest.vercel.app/touristAttractions"
        );
        const clothes = await fetch(
          "https://mongol-api-rest.vercel.app/clothes"
        );
        const instruments = await fetch(
          "https://mongol-api-rest.vercel.app/instruments"
        );
        const historyTool = await fetch(
          "https://mongol-api-rest.vercel.app/historicalTools"
        );
        const ethics = await fetch(
          "https://mongol-api-rest.vercel.app/ethnicGroups"
        );
        const province = await fetch(
          "https://mongol-api-rest.vercel.app/provinces"
        );
        const historyFigure = await fetch(
          "https://mongol-api-rest.vercel.app/historicalFigures"
        );

        const result_tourist = await tourist.json();
        const result_clothes = await clothes.json();
        const result_instruments = await instruments.json();
        const result_historyTool = await historyTool.json();
        const result_ethics = await ethics.json();
        const result_province = await province.json();
        const result_historyFigure = await historyFigure.json();

        setData([
          ...result_tourist.touristAttractions,
          ...result_clothes.clothes,
          ...result_instruments.instruments,
          ...result_historyTool.historicalTools,
          ...result_ethics.ethnicGroups,
          ...result_province.provinces,
          ...result_historyFigure.historicalFigures,
        ]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const filteredData = data.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen bg-white ">
      <div className="w-full flex items-center flex-col gap-3 relative">
        <div className="flex justify-between mt-4 mx-8 fixed absolute top-1 right-1">
          <button
            className="lg:text-2xl sm:text-lg md:text-xl text-blue-500 underline font-bold border border-black sm:w-[50px] sm:h[25px] md:w-[80px] lg:w-[60px] lg:h-[50px] rounded-lg"
            onClick={() => setGrid(!grid)}
          >
            {grid == false ? "List" : "Grid"}
          </button>
        </div>
        <p className="font-bold text-xl text-blue-400 ">MONGOL DATA </p>
        <input
          className="text-black border border-blue-500 w-1/2 p-2 rounded shadow-lg"
          type="search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex justify-center">
        <div
          className={` mt-10 ${
            grid
              ? "flex flex-col w-full m-10 space-y-5"
              : "grid md:grid-cols-1 lg:grid-cols-3 w-[-1000px] "
          }`}
        >
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div
                key={item.name}
                className={`text-black border border-2 border-blue-400 shadow-lg rounded-md ${
                  grid == true ? "flex w-full" : ""
                } p-4`}
                onClick={() => router.push(`/hello/${item.id}`)}
              >
                <img
                  src={item.images}
                  alt={item.name}
                  className={`w-full h-56 object-cover rounded-lg mb-4 border border-red-400 ${
                    grid == true ? "h-52 w-52" : ""
                  }`}
                />
                <p className="text-xl font-bold text-center text-blue-400">
                  {item.name}
                </p>
                <p className="text-center">{item.description}</p>
                {item.address?.country && (
                  <p className="opacity-75 text-center text-red-400">
                    {item.address.country}
                  </p>
                )}
              </div>
            ))
          ) : (
            <div className="text-black text-lg col-span-4 text-center">
              No results found for: <b>{search}</b>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
