import Image from "next/image";
import localFont from "next/font/local";
import {useState} from "react"; 
import { useRouter } from 'next/router'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export default function all() {
    const router = useRouter()
    return(
        <div className="bg-black h-screen w-screen">
            <div className="text-white text-3xl pl-10 pt-10">
                Home
            </div>
           <button /*CV*/ className="h-20 w-[1000px] border border-4 broder-white rounded-xl absolute left-[300px]
             text-white text-3xl font-bold flex justify-center items-center hover:bg-slate-500">
                CV
                onClick{()=>{router.push()}}
           </button>
        </div>
    )
}