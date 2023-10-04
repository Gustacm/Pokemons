import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, name, img, types }) => {
  const detailRuter = `/detail/${id}`;

  return (
    <div className="pokemon-card">
      <Link to={detailRuter}>
        <img src={img} alt={name} />
        <h2>{name}</h2>
        <div className="pokemon-types">
          <h3>Tipos:</h3>
          <ul>
            {types.map((type, index) => (
              <li key={index}>{type}</li>
            ))}
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default Card;
