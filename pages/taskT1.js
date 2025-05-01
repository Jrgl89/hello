import { useRouter } from "next/router";
 export default function taskT1() {
    return(
        <div className="h-[2000px] w-screen bg-white">

            <div className="h-[87px] w-screen bg-white flex items-center">
                <div className="h-[56px] w-[1220px] flex text-black ml-[110px] relative">
                <img src="https://www.toki.mn/wp-content/uploads/2022/08/Asset-1@3x.png " className="h-[54px]"/>
                <div className="w-[427.48px] h-full space-x-8 items-center flex absolute right-0">
                <p>Үйлчилгээ</p>
                <p>Давуу тал</p>
                <p>Мэдээ</p>
                <p>Хамтран ажиллах</p>
                </div>
                </div>
            </div>


            <div className="bg-[#fff2d7] h-[830px] w-screen relative ">
            <img src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-1-2.png" className="h-[811px] w-[1217px] absolute left-28"/>
            <p className="absolute left-[420px] top-[80px] text-black font-medium text-3xl">ХЭРЭГЦЭЭТ ҮЙЛЧИЛГЭЭГ НЭГ ДОРООС...</p>
            <img src="https://www.toki.mn/wp-content/uploads/2021/01/apple.png" className="h-12 absolute left-[570px] bottom-[50px]"/>
            <img src="https://www.toki.mn/wp-content/uploads/2021/01/android.png" className="h-12 absolute left-[730px] bottom-[50px]"/>
            </div>

            <div className="h-screen w-screen bg-blue-400 ">
                <img src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-2.png" className="h-[700px]"/>
            </div>


        </div>
    )
 };