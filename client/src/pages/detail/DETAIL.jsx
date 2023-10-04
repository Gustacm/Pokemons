import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getId, resetPokemonDetail } from '../../redux/actions/actions'; // Asumiendo que tienes una acción para resetear el detalle del Pokémon.
import { withRouter } from 'react-router-dom'; 

const Detail = ({ match, history }) => {
  const dispatch = useDispatch();
  const { id } = match.params;
  const pokemons = useSelector((state) => state.pokemonDetail);

  useEffect(() => {
    dispatch(getId(id));

    return () => {
      dispatch(resetPokemonDetail()); // Debes definir esta acción en tus acciones de Redux.
    };
  }, [dispatch, id]);

  if (!pokemons) {
    return <div>Cargando...</div>;
  }

  const {
    name,
    image,
    Vida,
    Ataque,
    Defensa,
    Velocidad,
    Altura,
    Peso,
    Type,
  } = pokemons;

  return (
    <div className="pokemon-detail">
      {image && image[0] && <img src={image[0]} alt={name} />}
      {image && image[1] && <img src={image[1]} alt={name} />}
      <h2>{name}</h2>

      <p>Vida: {Vida}</p>
      <p>Ataque: {Ataque}</p>
      <p>Defensa: {Defensa}</p>
      {Velocidad && <p>Velocidad: {Velocidad}</p>}
      {Altura && <p>Altura: {Altura}</p>}
      {Peso && <p>Peso: {Peso}</p>}
      <div className="pokemon-types">
        <h3>Tipo(s):</h3>
        <ul>
          {Type && Type.map((type, index) => (
            <li key={index}>{type}</li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default withRouter(Detail);

