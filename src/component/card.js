import React from 'react';

function Card({ title, image,price,ratingsandreviews }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{image}</p>
      <p>{price}</p>
      <p>{ratingsandreviews}</p>
    </div>
  );
}

export default Card;
