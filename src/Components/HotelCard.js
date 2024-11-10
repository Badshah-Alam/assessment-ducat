import React from 'react';

function HotelCard({ hotel, onSelectHotel }) {
  const hotelName = hotel.name?.content || hotel.name || "Hotel Name Unavailable";
  const hotelLocation = hotel.location?.content || hotel.location || "Location Unavailable";
  const hotelRating = typeof hotel.rating === 'number' ? hotel.rating : "Rating Unavailable";
  const hotelReviews = hotel.reviews || 0;
  const hotelPrice = hotel.price?.content || hotel.price || "Price Unavailable";
  const hotelImage = hotel.image || 'https://via.placeholder.com/150';

  return (
    <div className="border border-gray-300 rounded-lg shadow-md overflow-hidden">
      <img src={hotelImage} alt={hotelName} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
          Save up to £70
        </span>
        <h3 className="mt-2 font-semibold text-lg">{hotelName}</h3>
        <p className="text-sm text-gray-600">{hotelLocation}</p>
        <p className="text-sm text-gray-500">Rating: {hotelRating} / 10 ({hotelReviews} Reviews)</p>
        <p className="text-blue-600 font-bold mt-2">Total Price: {hotelPrice}</p>
        <div className="flex mt-4 space-x-2">
          <button
            className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
            onClick={() => onSelectHotel(hotel)}
          >
            Select
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Room Availability
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
