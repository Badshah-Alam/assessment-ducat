import React from 'react';
import HotelCard from './HotelCard';

function HotelList({ hotels, onSelectHotel }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6 w-full">
      {hotels.map((hotel, index) => (
        <HotelCard key={index} hotel={hotel} onSelectHotel={onSelectHotel} />
      ))}
    </div>
  );
}

export default HotelList;
