import { useRouter } from "next/router";
 export default function taskT1() {
    return(
        <div className="h-[1000px] w-screen bg-white">


            <div className="h-[87px] w-screen bg-white flex items-center justify-center">
                <div className="h-[56px] w-[1260px] bg-blue-400 flex text-black space-x-10 items-center">
                <img src="https://www.toki.mn/wp-content/uploads/2022/08/Asset-1@3x.png " className="h-[54px]"/>
                
                <p>Үйлчилгээ</p>
                <p>Давуу тал</p>
                <p>Мэдээ</p>
                <p>Хамтран ажиллах</p>
                </div>
            </div>


            <div className="bg-[#fff2d7] h-[811px] w-screen flex justify-center relative ">
            <img src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-1-2.png" className="h-[811px] w-[1217px]"/>
            <p className="absolute left-[600px] top-[100px] text-black font-medium text-3xl">ХЭРЭГЦЭЭТ ҮЙЛЧИЛГЭЭГ НЭГ ДОРООС...</p>
            </div>














        </div>
    )
 };