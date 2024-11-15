import Image from "next/image";
import localFont from "next/font/local";


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

export default function Home() {
  return (
    <div className=" bg-black flex justify-start items-center">
    <Image src="/pfp.webp" width={200} height={200} className="m-4"/>
    <p className="text-[50px]">jargal</p>
    </div>
  );
}
