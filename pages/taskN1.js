  import { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
   
        const response = await fetch("https://mongol-api-rest.vercel.app/touristAttractions");
        const result = await response.json();
    
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 m-4">
      {data?.touristAttractions?.map((item, index) => (
        <div key={index} className="p-4 border border-gray-300 rounded-lg">
        
            <img
              src={item.image} 
              className="w-full h-48 object-cover rounded-lg mb-2"
            />
          <h3 className="font-bold">{item?.name}</h3>
          <p>{item?.description}</p>
        </div>
      ))}
    </div>
  );
}
