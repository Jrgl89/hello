import { useState } from "react";

const usersData = [
    { "id": 1, "name": "Ariunbayar", "email": "nest22261001@nhs.edu.mn"},
    { "id": 2, "name": "Badraa", "email": "nest22261002@nhs.edu.mn"},
    { "id": 3, "name": "Bilguuntugs", "email": "nest22261003@nhs.edu.mn"},
    { "id": 4, "name": "Undrakh", "email": "nest22261004@nhs.edu.mn"},
    { "id": 5, "name": "Munkhbaysgalan", "email": "nest22261005@nhs.edu.mn"},
    { "id": 6, "name": "Gunbilig", "email": "nest22261006@nhs.edu.mn"},
    { "id": 7, "name": "Temuugei", "email": "nest22261007@nhs.edu.mn"},
    { "id": 8, "name": "Jargal", "email": "nest22261008@nhs.edu.mn"},
    { "id": 9, "name": "Khangarid", "email": "nest22261009@nhs.edu.mn"},
    { "id": 10, "name": "Erdenebold", "email": "nest22261010@nhs.edu.mn"},
    { "id": 11, "name": "Erdenejargal", "email": "nest22261011@nhs.edu.mn"},
    { "id": 12, "name": "Munkhnaran", "email": "nest22261012@nhs.edu.mn"},
    { "id": 13, "name": "Nomindari", "email": "nest22261013@nhs.edu.mn"},
    { "id": 14, "name": "Siilen", "email": "nest22261014@nhs.edu.mn"},
    { "id": 15, "name": "Temuulen", "email": "nest22261015@nhs.edu.mn"},
    { "id": 16, "name": "Tuvshin", "email": "nest22261016@nhs.edu.mn"},
    { "id": 17, "name": "Delgermurun", "email": "nest22261017@nhs.edu.mn"},
    { "id": 18, "name": "Chinbiligt", "email": "nest22261018@nhs.edu.mn"},
    { "id": 19, "name": "Gan Erdene", "email": "nest22261019@nhs.edu.mn"},

];

export default function biydaalt(){
    var[grid , setGrid] = useState(false);
    const [search, setSearch] = useState(" ");

    const filteredData = usersData.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));
    console.log("Search", search);

    return (
        <div className="h-screen w-screen bg-white p-8 flex flex-col items-center overflow-y-scroll overflow-x-hidden">
            <div className="w-full h-1/6 flex justify-center items-center">
            <h1 className="text-4xl mx-5 w-1/5 text-black font-bold">Students list</h1>
            <div className="flex  items-start justify-center h-1/5 my-6  w-screen">
                <input type="search" placeholder="Search by name"onChange={(test) => setSearch(test.target.value)} className="bg-gray-300 transition ease-out delay-250 hover:shadow-md hover:shadow-gray-500 rounded-2xl px-3 py-2 w-1/2"></input>

            </div>
            <button className="bg-black flex justify-center items-center transition ease-out delay-250 hover:shadow-md hover:shadow-gray-500 text-white w-32 h-12  border rounded-xl" onClick={() => {setGrid(!grid)}}>
                {grid ? "Hide Grid" : "Show Grid"}
            </button></div>
            
            <div className=" mx-5 w-full h-5/6 flex flex-col items-center">
                <div className= {grid == true? " items-center  grid-cols-3 grid gap-6 w-full " : " w-full space-y-4"}>
                    {filteredData.length>0 ? ( filteredData.map((filteredData, index) => {return <div key={index} className="  bg-gray-100 w-full px-4 py-8 transition ease-out delay-250 hover:shadow-md hover:shadow-gray-500 flex flex-col  rounded-xl text-black h-1/7"> 
                        <h1 className="text-xl font-bold text-black ">{filteredData.name}</h1>
            
                        <p className="text-gray-700">Id: {filteredData.id}</p>
                        <p className="text-gray-700">Email: {filteredData.email}</p>
                    </div>
                })): (
                    <div className="text-gray-700 text-2xl">no result for : {search}</div>
                )}
                </div>
            </div>
        </div>
        
    );
}