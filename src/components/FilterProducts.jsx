import React from "react";
import "../css/ProductPage.css";

export default function FilterProducts({ setPriceFilter, priceFilter }) {
  const handleFilterChange = (e) => {
    setPriceFilter(e.target.value);
  };

  return (
    <div className="filter-container">
      <h2>Sök efter priskategori:</h2>
      <select value={priceFilter} onChange={handleFilterChange}>
        <option value="">Alla priskategorier</option>
        <option value="0-100">0-100 kr</option>
        <option value="100-200">100-200 kr</option>
        <option value="200-500">200-500 kr</option>
      </select>
    </div>
  );
}
