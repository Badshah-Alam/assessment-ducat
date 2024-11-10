import React, { useState, useEffect } from 'react';
import Filters from './Components/Filters';
import HotelList from './Components/HotelList';
import RoomAvailability from './Components/RoomAvailability';

function App() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [priceRange, setPriceRange] = useState('');
  const [starRating, setStarRating] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null); // New state for selected hotel

  useEffect(() => {
    fetch("https://hotel.api.clickbuff.in/Home", {
      method: "GET",
      headers: {
        "Accept": "/"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data); // Check the structure of the data
        setHotels(data.hotels || []);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const filteredHotels = Array.isArray(hotels) ? hotels.filter(hotel => {
    const withinPrice = !priceRange || parseFloat(hotel.price) <= parseFloat(priceRange);
    const matchesRating = starRating.length === 0 || starRating.includes(hotel.starRating);
    return withinPrice && matchesRating;
  }) : [];

  const handleSelectHotel = (hotel) => {
    setSelectedHotel(hotel);
  };

  return (
    <div className="flex">
      <Filters setPriceRange={setPriceRange} setStarRating={setStarRating} />
      {loading ? (
        <p className="text-center w-full">Loading...</p>
      ) : (
        <div className="flex w-full">
         
          <HotelList hotels={filteredHotels} onSelectHotel={handleSelectHotel} />
          <RoomAvailability hotel={selectedHotel} />
        </div>
      )}
    </div>
  );
}

export default App;
