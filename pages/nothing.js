
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const userdata = [

    { id: 1, name: "clothes" },
    { id: 2, name: "turist" },
    { id: 3, name:"historical" },
    { id: 4, name: "ethic"},
    { id: 5, name: "figures" },
    
   
  ];

export default function nothing() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState("");
  const router=useRouter();
    const [search, setSearch] = useState("");
    const filtereduliral5 = data.filter((data) =>
      data.name.toLowerCase().includes(search.toLowerCase())
    );
  useEffect(async () => {
    try {
      const response = await fetch(
        "https://mongol-api-rest.vercel.app/clothes"
      );
      const response1 = await fetch(
        "https://mongol-api-rest.vercel.app/TouristAttractions"
      );
      const response2 = await fetch(
        "https://mongol-api-rest.vercel.app/HistoricalTools"
      );
      const response3 = await fetch(
        "https://mongol-api-rest.vercel.app/EthnicGroups"
      );
      const response4 = await fetch(
        "https://mongol-api-rest.vercel.app/HistoricalFigures"
      );
      const result = await response.json();
      const result1 = await response1.json();
      const result2 = await response2.json();
      const result3 = await response3.json();
      const result4 = await response4.json();
      setData([...result.clothes, ...result1.touristAttractions, ...result2.historicalTools,...result3.ethnicGroups,...result4.historicalFigures]);
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(data);

  return (
    <div className="bg-white h-screen" >
      <div className="bg-white text-black text-4xl font-bold flex justify-center pt-5">
        <p>Mongolian culture</p>
      </div>

      <div  className="bg-white">

    
      <div className="pt-5 flex justify-center md:px-7 sm:px-7">
          <input
            type="search"
            onChange={(test) => setSearch(test.target.value)}
            placeholder="Search..."
            className="text-black p-2 mb-4 w-[1470px] bg-white border-2 border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-100 "
          />
        </div>
         



<div className="bg-white h-full w-full flex grid xl:grid-cols-4 px-24 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
  
{filtereduliral5.map((item) => (
          <div className="border-black border h-98 w-80 rounded-xl px-4 drop-shadow-2xl m-12">
            <div className="flex justify-center">
            <img src={item.images[0]} className="h-60 w-58  rounded-xl py-4  " />{" "}
            </div>
            
            <p className="text-black text-sm"> 
                <p className="text-black font-bold flex justify-center">{item.description && <p>{item.name}</p>}</p>
                {item?.description}</p>{" "}
          </div>
        ))}
</div>

       
      </div>

    </div>
  );
}