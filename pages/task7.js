import { useRouter } from "next/router";
export default function Home(){
    const router = useRouter();
    return(
        <div className="w-full h-screen bg-slate-950 ">
             <p className="font-bold  text-center absolute top-10 left-[750px] text-3xl text-white py-8" >Home</p>
             <div className="flex justify-center absolute top-72 left-28">
             <div className="grid grid-cols-6 gap-16 flex">
             <p className="text-3xl font-bold w-48 h-16  justify-center items-center bg-white text-black flex rounded-lg hover:bg-gray-400" onClick={() =>router.push("task1") }>Week1</p>
             <p className="text-3xl font-bold w-48 h-16  justify-center items-center bg-white text-black flex rounded-lg hover:bg-gray-400" onClick={() =>router.push("task2") }>Week2</p>
             <p className="text-3xl font-bold w-48 h-16  justify-center items-center bg-white text-black flex rounded-lg hover:bg-gray-400" onClick={() =>router.push("task3") }>Week3</p>
             <p className="text-3xl font-bold w-48 h-16  justify-center items-center bg-white text-black flex rounded-lg hover:bg-gray-400" onClick={() =>router.push("task4") }>Week4</p>
             <p className="text-3xl font-bold w-48 h-16  justify-center items-center bg-white text-black flex rounded-lg hover:bg-gray-400" onClick={() =>router.push("task5") }>Week5</p>
             <p className="text-3xl font-bold w-48 h-16  justify-center items-center bg-white text-black flex rounded-lg hover:bg-gray-400" onClick={() =>router.push("task6") }>Week6</p>         
             </div>
             </div>
        </div>
    );
}