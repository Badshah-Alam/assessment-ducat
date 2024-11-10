import React from 'react';

function Filters({ setPriceRange, setStarRating }) {
  const handlePriceChange = (e) => setPriceRange(e.target.value);
  const handleRatingChange = (e) => {
    const rating = parseInt(e.target.value);
    setStarRating((prev) => 
      prev.includes(rating) 
        ? prev.filter(r => r !== rating) 
        : [...prev, rating]
    );
  };

  return (
    <div className="w-1/4 p-4 bg-gray-100 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Search Filters</h2>
      <div className="mb-4">
        <label className="block font-medium mb-2">Price per Night</label>
        <select onChange={handlePriceChange} className="w-full p-2 border rounded">
          <option value="">All Prices</option>
          <option value="70">Less than £70</option>
          <option value="125">£70 to £125</option>
          <option value="200">£125 to £200</option>
          <option value="300">£200 and up</option>
        </select>
      </div>
      <div>
        <label className="block font-medium mb-2">Star Rating</label>
        <div className="space-y-2">
          {[5, 4, 3].map((rating) => (
            <label key={rating} className="flex items-center">
              <input type="checkbox" value={rating} onChange={handleRatingChange} className="mr-2" />
              {rating} <span className="text-yellow-400">★</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filters;
