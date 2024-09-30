
import React from 'react';
import { useParams } from 'react-router-dom';
import cardData from '../data'; // ייבוא הנתונים

const item = () => {
  const { id } = useParams(); // קבלת ה-ID מתוך ה-URL
  const item = cardData.find((item) => item.id === parseInt(id)); // חיפוש הפריט לפי ה-ID

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <div className="item-details">
      <h1>{item.title}</h1>
      <img src={item.image} alt={item.title} />
      <p>{item.details}</p> {/* הצגת הפרטים המלאים של הפריט */}
    </div>
  );
};

export default item;
