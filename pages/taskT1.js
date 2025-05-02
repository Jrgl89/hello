import { useRouter } from "next/router";
 export default function taskT1() {
    return(
        <div className="h-[4000px] w-screen bg-white">

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

            <div className="h-screen w-screen flex items-center justify-center relative ">
                <img src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-2.png" className="h-[700px]"/>
                <div className="h-[300px] w-[510px] absolute top-[330px] right-[200px]">
                <p className="text-[#ffc63e] text-3xl font-bold">Toki Service</p>
                <p className="text-black ">Та такси дуудах, кофе, хоол захиалах, нэгж дата авах, хэрэглээний </p>
                <p className="text-black ">төлбөрүүдээ төлөх, тоглоом тоглох, цэнэглэх гэх мэт өдөр бүрд </p>
                <p className="text-black ">хэрэгтэй үйлчилгээнүүдээ нэг дороос хялбар, хурдан авах </p>
                <p className="text-black ">боломжтой. </p>
                </div>
            </div>


             <div className="h-screen w-screen flex items-center justify-center relative bg-[#fff2d7] ">
                <img src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-3.png" className="h-[600px] absolute right-[130px]"/>
                <div className="h-[130px] w-[570px] absolute top-[330px] left-[150px]">
                <p className="text-[#ffc63e] text-3xl font-bold">Toki Pay</p>
                <p className="text-black ">Toki Pay нь таны бодит хэтэвчийг цахимжуулсан цоо шинэ дижитал хэтэвч</p>
                <p className="text-black ">юм. Бүх банкны картаа холбож төлбөрөө төлөөд, лояалти карт болон бичиг</p>
                <p className="text-black ">баримтуудаа нэг дор хадгалаарай. </p>
                </div>
            </div>

            <div className="h-screen w-screen flex items-center justify-center relative bg-green-400">
                <img src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-4.png" className="h-[700px]"/>
                <div className="h-[110px] w-[540px] absolute top-[330px] right-[130px] ">
                <p className="text-[#ffc63e] text-3xl font-bold">Toki Shop</p>
                <p className="text-black ">Та өөрийн хүссэн бараагаа албан ёсны дэлгүүрүүдээс сонголт хийж,</p>
                <p className="text-black ">нэг дороос шууд захиалах боломжтой.</p>
                </div>
            </div>

            <div className="h-[300px] w-screen bg-black">
                <p className="text-[#ffc63e]">Toki апп өдөр бүр танд тусална</p>
            </div>


        </div>
    )
 };