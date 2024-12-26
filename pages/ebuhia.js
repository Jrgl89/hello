import Image from "next/image";
export default function Buuhia(){
    return(
        <div className="bg-white h-[3000px] w-screen">
            <div className="h-20 w-screen items-center relative flex">
                <div className="h-[56px] w-[1274.05px] absolute left-[75px] flex items-center">
                    <div className="h-[56px] w-[167.47px] flex">
                        <div className="h-[56px] w-[49.57px] bg-white">
                            <Image src="/logo.svg" width={50} height={50}/>
                        </div>
                        <div className="h-[56px] w-[119.9px]  flex items-center">
                            <h1 className="pl-4 text-[18px] font-extrabold text-[#4334B4]">Буухиа элч</h1>
                        </div> 
                    </div>
                    <div className="h-[56px] w-[714.19px] flex items-center pl-14 space-x-6">
                        <p className="text-[#6A5ADF] font-semibold text-sm cursor-pointer">Нүүр</p>
                        <p className="text-[#6A5ADF] font-semibold text-sm cursor-pointer">Үйлчилгээ</p>
                        <p className="text-[#6A5ADF] font-semibold text-sm cursor-pointer">Бидний тухай</p>
                        <p className="text-[#6A5ADF] font-semibold text-sm cursor-pointer">Үйл ажиллагаа</p>
                        <p className="text-[#6A5ADF] font-semibold text-sm cursor-pointer">Аппликэйшн</p>
                        <p className="text-[#6A5ADF] font-semibold text-sm cursor-pointer">Бүсчлэл</p>
                        <p className="text-[#6A5ADF] font-semibold text-sm cursor-pointer">Коммик</p>
                    </div>
                    <div className="h-[44px] w-[216.39px] flex items-center ml-[176px]">
                        <div className="text-[#6A5ADF] text-sm font-semibold">Бүртгүүлэх</div>
                        <div className="text-white text-sm font-semibold rounded-full bg-[#6A5ADF] py-3 px-7 shadow-md ml-[24px]">Нэвтрэх</div>
                    </div>
                </div>
            </div>
            <Image src="/BGG.png" width={50} height={50}/>
        </div>
    );
}