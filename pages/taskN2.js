import { useState, useEffect } from "react";

export default function taskN2(){
    const [data, setData] = useState("");
    useEffect(() => {
        const fetchData = async () =>{
            try {
                const response = await fetch (
                    "https://mongol-api-rest.vercel.app/touristAttractions"
                );
                const result = await response.json();
                setData(result);
            } 
            catch (error) {
                console.log(error);
            }
        };

        fetchData();

    }, []);
    
    console.log(data);
    return(
        <div className="gird grid-cols-4 gap-4 m-4 bg-white">
            {data?.touristAttractions?.map((item)=>(
                <div>
                    {item?.name}--------{item?.description}
                </div>

            ))}
        </div>
    );
}