import {useState} from "react"; 

export default function search(){
    const [search, setSearch]= useState("");

    console.log("search utga-->", search);

    return(
        <div className="flex items-center justify-center h-screen flex-col">
            <input 
            type="search"
            onChange={(test) => setSearch(test.target.value)}
            className="border-2 border-black rounded"
            />
            <p>search: {search}</p>
        </div>
    );
}