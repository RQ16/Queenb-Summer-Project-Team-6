import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cardData from './data'; // ייבוא הנתונים
import './data.css';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false); // הוספת מצב להצעות

  // סינון הנתונים לפי שאילתת החיפוש
  const filteredData = cardData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // פונקציה להתעדכנות שדה החיפוש
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    setShowSuggestions(true); // הצגת הצעות חיפוש
  };


  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="search"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange} // שינוי לפי הפונקציה החדשה
        />
        <button type="button" aria-label="Search">🔍</button> {/* כפתור החיפוש עם האייקון */}
      </div>

      {/* הצגת הצעות חיפוש */}
      {showSuggestions && searchQuery && (
        <div className="suggestions">
          <ul>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <li key={item.id}>
                  <Link to={`/item/${item.id}`} onClick={() => setShowSuggestions(false)}>
                    {item.title}
                  </Link>
                </li>
              ))
            ) : (
              <li>No results found</li>
            )}
          </ul>
        </div>
      )}

      {/* תוצאות החיפוש */}
      <div className="results-container">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div className="result-item" key={item.id}>
              <div className="result-icon">
                <img src={item.image} alt={item.title} width="100" height="80" />
              </div>
              <div className="result-info">
                <Link to={`/item/${item.id}`} className="item-link">
                  <strong>{item.title}</strong>
                </Link>
                <p>{item.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default Search;
