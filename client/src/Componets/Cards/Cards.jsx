import React from 'react';
import Card from '../Card/Card';
import './Cards.css';

const Cards = ({ info }) => {
  return (
    <div className='cards'>
      {info && info.map((p) => (
        <Card
          key={p.id}
          id={p.id}
          name={p.name}
          img={p.image[0]}
          types={p.Type}
        />
      ))}
    </div>
  );
};

export default Cards;


// key={p.id}
// name={p.name}
// img={p.image[0]} 
// vida={p.Vida}
// ataque={p.Ataque}
// defensa={p.Defensa}
// velocidad={p.Velocidad}
// altura={p.Altura}
// peso={p.Peso}
// types={p.Type}