import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo">Foodato</div>
        <div className="location">
          <strong>Srishti</strong>
          <span> Behala, Kolkata</span>
        </div>
        <input
          className="search-bar"
          type="text"
          placeholder='Search "chicken"'
        />
        <div className="veg-toggle">VEG MODE</div>
      </header>

      {/* Banner */}
      <div className="banner">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjY3IiB2aWV3Qm94PSIwIDAgMjQgMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjUiIGZpbGw9IiNmZjYwMDAiLz48cmVjdCB5PSI1IiB3aWR0aD0iMjQiIGhlaWdodD0iNiIgZmlsbD0id2hpdGUiLz48cmVjdCB5PSIxMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjUiIGZpbGw9IiMwMDgwMDAiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjgiIHI9IjIiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIwLjUiIGZpbGw9Im5vbmUiLz48L2c+PC9zdmc+"
          alt="Indian Flag"
          className="flag"
        />
        <div className="banner-text">
          <p className="offer-week">THIS INDEPENDENCE WEEK</p>
          <h3>ENJOY FREE DELIVERY</h3>
          <p className="offer-details">
            above ₹409 <span className="strike">₹99</span>
          </p>
          <button className="gold-btn">Join GOLD at ₹1</button>
        </div>
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjY3IiB2aWV3Qm94PSIwIDAgMjQgMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjUiIGZpbGw9IiNmZjYwMDAiLz48cmVjdCB5PSI1IiB3aWR0aD0iMjQiIGhlaWdodD0iNiIgZmlsbD0id2hpdGUiLz48cmVjdCB5PSIxMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjUiIGZpbGw9IiMwMDgwMDAiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjgiIHI9IjIiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIwLjUiIGZpbGw9Im5vbmUiLz48L2c+PC9zdmc+"
          alt="Indian Flag"
          className="flag"
        />
      </div>
    </div>
  );
}

export default App;
