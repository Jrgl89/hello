import React, {useEffect, useState} from "react";

export default function setColorOnClick(){
    const [color, setColor]=useState("");
    const [data, setData] = useState();
    
    useEffect(()=>{
        const fetchData = async()=>{
            fetch('https://mongol-api-rest.vercel.app/clothes')
                    .then(res => res.json())
                    .then(json => console.log(json))
        }

        fetchData();
        console.log(fetchData);
    },[]);

    return(
        <div>
            
        </div>
    );  
};  