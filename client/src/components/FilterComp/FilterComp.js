import React, { useState } from "react";

const FilterComponent = ({ setRating }) => {
  const handleRatingChange = (event) => {
    const selectedRating = parseInt(event.target.value);
    setRating(selectedRating);
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-gray-600">Filter by rating:</span>
      <select
        className="py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        onChange={handleRatingChange}
      >
        <option value="">All</option>
        <option value="1">1 star</option>
        <option value="2">2 stars</option>
        <option value="3">3 stars</option>
        <option value="4">4 stars</option>
        <option value="5">5 stars</option>
      </select>
    </div>
  );
};

export default FilterComponent;
