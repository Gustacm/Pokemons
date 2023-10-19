import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ id, name, img, types }) => {
  const detailRoute = `/detail/${id}`;

  return (
    <div className="pokemon-card">
      <Link to={detailRoute}>
        <img src={img} alt={name} />
        <h2 className='name'>{name}</h2>
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
