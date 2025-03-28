import React, {useState} from "react";

export default function SetColorOnClick(){
    const [color, setColor]=useState("");
    return(
        <div className={`flex space-x-4 w-full h-screen bg-${color}-800`}>
            <p>Change Color:</p>
            <button className="border bg-red-800 py-4 px-6"
            onClick={()=>{
                setColor("red");
            }}>
                Red
            </button>
            <button className="border bg-blue-800 py-4 px-6"
            onClick={()=>{
                setColor("blue");
            }}>
                Blue
            </button>
            <button className="border bg-green-800 py-4 px-6"
            onClick={()=>{
                setColor("green");
            }}>
                Green
            </button>
        </div>
    );  
};  