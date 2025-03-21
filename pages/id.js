import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function DynamicPage() {
  const router = useRouter();
  const { id } = router.query;
  console.log("Current ID:", id);

  const [countryData, setCountryData] = useState(null);
  const [touristData, setTouristData] = useState(null);
  const [clothesData, setClothesData] = useState(null);
  const [instrumentsData, setInstrumentsData] = useState(null);
  const [historyToolData, setHistoryToolData] = useState(null);
  const [ethicsData, setEthicsData] = useState(null);
  const [provinceData, setProvinceData] = useState(null);
  const [historyFigureData, setHistoryFigureData] = useState(null);
  const [selectedType, setSelectedType] = useState('info');

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const countryResponse = await fetch(`https://mongol-api.vercel.app/api/v1/mongolia/${id}`);

          if (countryResponse.ok) {
            const countryJson = await countryResponse.json();
            setCountryData(countryJson.data);
            console.log("Country Data:", countryJson.data);
          } else {
            console.error('Country API Error:', countryResponse.status, countryResponse.statusText);
            setCountryData(null);
          }

          const tourist = await fetch("https://mongol-api-rest.vercel.app/touristAttractions");
          const clothes = await fetch("https://mongol-api-rest.vercel.app/clothes");
          const instruments = await fetch("https://mongol-api-rest.vercel.app/instruments");
          const historyTool = await fetch("https://mongol-api-rest.vercel.app/historicalTools");
          const ethics = await fetch("https://mongol-api-rest.vercel.app/ethnicGroups");
          const province = await fetch("https://mongol-api-rest.vercel.app/provinces");
          const historyFigure = await fetch("https://mongol-api-rest.vercel.app/historicalFigures");

          const touristJson = await tourist.json();
          const clothesJson = await clothes.json();
          const instrumentsJson = await instruments.json();
          const historyToolJson = await historyTool.json();
          const ethicsJson = await ethics.json();
          const provinceJson = await province.json();
          const historyFigureJson = await historyFigureJson();

          setTouristData(touristJson);
          setClothesData(clothesJson);
          setInstrumentsData(instrumentsJson);
          setHistoryToolData(historyToolJson);
          setEthicsData(ethicsJson);
          setProvinceData(provinceJson);
          setHistoryFigureData(historyFigureJson);

        } catch (error) {
          console.error('Fetch Error:', error);
          setCountryData(null);
          setTouristData(null);
          setClothesData(null);
          setInstrumentsData(null);
          setHistoryToolData(null);
          setEthicsData(null);
          setProvinceData(null);
          setHistoryFigureData(null);
        }
      };

      fetchData();
    }
  }, [id]);

  if (!countryData || !touristData || !clothesData || !instrumentsData || !historyToolData || !ethicsData || !provinceData || !historyFigureData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{countryData.name}</h1>
      <div>
        <button>...</button>
      </div>
      {selectedType === 'info' && (
        <div>
          <h2>Information</h2>
          <p>Capital: {countryData.capital}</p>
          <p>Population: {countryData.population}</p>
          <p>Currency: {countryData.currency}</p>
          <p>Language: {countryData.language}</p>
        </div>
      )}
      {/* ... other selectedType conditions */}
    </div>
  );
}