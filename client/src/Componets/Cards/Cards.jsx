import React from 'react';
import Card from '../Card/Card';

const Cards = ({ info }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
      {info && info.map((pokemon) => (
        <Card
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          img={pokemon.image[0]}
          types={pokemon.Type}
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