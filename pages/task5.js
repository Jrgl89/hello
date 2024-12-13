import {useState} from "react"; 

const data = [
    {
        id:1,
        title: "Test1",
        description: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id:2,
        title:"Test2",
        description: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id:3,
        title:"Test3",
        description: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id:4,
        title:"Test4",
        description: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id:5,
        title:"Test5",
        description: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id:6,
        title:"Test6",
        description: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
]

export default function Data() {
    const [search, setSearch]= useState("false");
    return(
        <div className="absolute top-20 left-[330px]">
            <div className="font-bold text-3xl">
            Нийтлэлүүд
            </div>
            {data.map((items, index) => {
                return <div key={index} className="h-24 w-[1000px]  border border-black rounded-xl">
                    <div className="pt-3 pl-6">
                    <div key={index}className="font-bold">
                    {data.title} 
                    </div>
                <div>
                    {data.description}
                </div>
                    </div>
                </div>
            })}
        </div>
    )
}