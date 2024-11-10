import React from "react";

function RoomAvailability({ hotel }) {
  if (!hotel) {
    return (
      <div className="w-1/4 p-4 bg-gray-100 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Room Availability</h2>
        <p>Select a hotel to view availability</p>
      </div>
    );
  }

  return (
    <div className="w-1/4 p-4 bg-gray-100 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Room Availability</h2>
      <h3 className="font-semibold text-lg">
        {hotel.name?.content || hotel.name}
      </h3>
      <p className="text-gray-600">
        {hotel.location?.content || hotel.location}
      </p>
      <p className="text-blue-600 font-bold mt-2">
        Price: {hotel.price?.content || hotel.price}
      </p>
      <p className="text-gray-500">Rating: {hotel.rating}</p>
      <p className="text-gray-500">Reviews: {hotel.reviews || 0}</p>
      <p className="text-gray-500">
        Availability: {hotel.availability || "Data not available"}
      </p>

      <div className="flex mt-4 space-x-2">
        <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
          Select
        </button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Room Availability
        </button>
      </div>
    </div>
  );
}

export default RoomAvailability;
