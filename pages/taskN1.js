import React, {useState} from "react";
export default function TaskN1() {
    const [click, setClick] =useState(0)
    return(
        <div className="bg-gray-100 h-screen w-screen p-4">
            <div className="h-40 w-full  flex items-end">
            <div className=" w-full p-4 bg-blue-600 flex justify-center">
                <p className="text-3xl font-bold">Nest High school</p>
            </div>
            </div>
            <div className="w-full h-24 flex justify-center items-center">
                <p className="text-5xl font-bold text-black">Welcome to Nest school</p>
            </div>
            <div className="w-full h-20 flex justify-center">
                <div className="w-[900px]">
                <p className="text-slate-400 font-medium text-center text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                </div>
            </div>
            <div className="w-full h-12 bg-green-400 flex absolute">
                <button className="rounded-lg bg-blue-700 py-1 px-6 font-bold" onClick={()=> setClick(click +1)}> Click Me</button>
                <p>
                    Clicked {click} times
                </p>
            </div>
        </div>
    );
}

 {data?.touristAttractions?.map((item)=>(
                <div>
                    {item?.name}--------{item?.description}
                </div>

            ))}