import Image from "next/image";
import {useState} from "react"; 



export default function Home() {
  const [search, setSearch]= useState("");

  console.log("search utga-->", search);
  return (
    <div className=" bg-black h-[1500px] w-screen relative">
      <div className="bg-slate-700 h-20 w-screen flex items-center relative space-x-5">
      <Image src="/fb.webp" width={50} height={50} className="rounded-xl ml-10" alt=""/>
      <p className="font-bold text-white text-2xl">Facebook</p>
      <div className="flex space-x-8 justify-end absolute right-10">
        <p className="text-white font-bold">Home</p>
        <p className="text-white font-bold">About</p>
        <p className="text-white font-bold">Contact</p>
        <input 
            type="search"
            onChange={(test) => setSearch(test.target.value)}
            className="border-2 border-black rounded"
            />
      </div>
      </div>
      <div className="flex">
        <Image src="/mark.png" width={700} height={600} className="rounded-xl absolute left-[150px] top-[250px]" alt=""/>
      <div className=" h-[400px] w-[600px]  absolute right-[170px] top-[270px]">
        <p className="text-white font-semibold font-mono italic text-4xl">Mark Elliot Zuckerberg (born White Plains, New York, 1984) is an American who created Facebook when he was still studying computer science.[3] The founding of Facebook made Zuckerberg a billionaire, one of the youngest and richest billionaires of all time according to Forbes.</p>
      </div>
      </div>
      <div className="bg-slate-900 h-64 w-screen absolute bottom-0 ">
        <div className="h-8 w-32 bg-white rounded-xl flex justify-center items-center text-lg">
          <p className="text-black font-bold italic">Learn more</p>
        </div>
      </div>
    </div>
  );
}
