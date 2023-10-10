import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getType, postPokemons} from '../../redux/actions/actions';
import Delete from './handlers/handleDeleteType';
import Cambios from './handlers/handleCambios';


const CreatePokemon = () => {
  const dispatch = useDispatch();
  const typesP = useSelector((state) => state.typeState);

  useEffect(() => {
    dispatch(getType());
  }, [dispatch]);


 const handleTipoChange = (e) => {
  Cambios(e, pokemonData, setPokemonData, errors, setErrors, Img,SetImg);
};

  
  const [pokemonData, setPokemonData] = useState({
    nombre: '',
    imagen: 'https://w0.peakpx.com/wallpaper/740/298/HD-wallpaper-pokemon-game-poke-ball-red-simplistic.jpg',
    vida: '1',
    ataque: '1',
    defensa: '1',
    velocidad: '1',
    altura: '1',
    peso: '1',
    tipos: [],
  });
  const [errors, setErrors] = useState({
    nombre: '  ',
    imagen: '',
    tipos: '  ',
  });

  const [Img,SetImg] = useState([])

  const data = {
    name: pokemonData.nombre.toLowerCase(),
    Imagen: pokemonData.imagen,
    Vida: pokemonData.vida,
    Ataque: pokemonData.ataque,
    Defensa: pokemonData.defensa,
    Velocidad: pokemonData.velocidad,
    Altura: pokemonData.altura,
    Peso: pokemonData.peso,
    typeNames: [...pokemonData.tipos],
  };
  
  
  

  const isSubmitDisabled = Object.values(errors).some((error) => error !== '');
  const handleSubmit = async (e) => {
    e.preventDefault();
     dispatch(postPokemons(data)); 
  };
  

  return (
    <div>
      <h2>Crear Nuevo Pokémon</h2>
      <form onSubmit={handleSubmit}>
        <img src={pokemonData.imagen} alt="pokemon" width="200" height="200" />

        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={pokemonData.nombre}
            onChange={handleTipoChange}
          />
          {errors.nombre && <p className="error">{errors.nombre}</p>}
        </div>
        <div>
          <label htmlFor="imagen">Imagen:</label>
          <input
            type="text"
            id="imagen"
            name="imagen"
            onChange={handleTipoChange}
          />
          {Img && <p className="StateImg">{Img}</p>}
        </div>
        <div>
          <label htmlFor="vida">Vida:</label>
          <input
            type="range"
            id="vida"
            name="vida"
            min="1"
            max="5"
            step="1"
            value={pokemonData.vida}
            onChange={handleTipoChange}
          />
          {pokemonData.vida}
        </div>
<div>
  <label htmlFor="ataque">Ataque:</label>
  <input
    type="range"
    id="ataque"
    name="ataque"
    min="1"
    max="5"
    step="1"
    value={pokemonData.ataque}
  onChange={handleTipoChange}
  />
  {pokemonData.ataque}
</div>
<div>
  <label htmlFor="defensa">Defensa:</label>
  <input
    type="range"
    id="defensa"
    name="defensa"
    min="1"
    max="5"
    step="1"
    value={pokemonData.defensa}
    onChange={handleTipoChange}
  />
  {pokemonData.defensa}
</div>
<div>
  <label htmlFor="velocidad">Velocidad:</label>
  <input
    type="range"
    id="velocidad"
    name="velocidad"
    min="1"
    max="5"
    step="1"
    value={pokemonData.velocidad}
  onChange={handleTipoChange}
  />
  {pokemonData.velocidad}
</div>
<div>
  <label htmlFor="altura">Altura:</label>
  <input
    type="range"
    id="altura"
    name="altura"
    min="1"
    max="100"
    step="1"
    value={pokemonData.altura}
  onChange={handleTipoChange}
  />
  {pokemonData.altura}
</div>
<div>
  <label htmlFor="peso">Peso:</label>
  <input
    type="range"
    id="peso"
    name="peso"
    min="1"
    max="5"
    step="1"
    value={pokemonData.peso}
  onChange={handleTipoChange}
  />
  {pokemonData.peso}
</div>
<div>
          <label htmlFor="tipos">Tipos:</label>
          <select
            id="tipos"
            name="tipos"
            onChange={handleTipoChange}
            multiple
            value={pokemonData.tipos}
          >
            {typesP.map((tipo) => (
              <option key={tipo.id} value={tipo.name}>
                {tipo.name}
              </option>
            ))}
            <option value="new type">Crea Nuevo Tipo...</option>
          </select>
          <div>
            <p>Tipos seleccionados:</p>
            <ul>
              {pokemonData.tipos.map((tipo, index) => (
                <li key={index}>{tipo}</li>
              ))}
            </ul>
            <button type="button" onClick={() => Delete(pokemonData, setPokemonData, setErrors, errors)}>
              Quitar tipo
            </button>
            {errors.tipos.length > 0 && (
              <p className="error">{errors.tipos[0]}</p>
            )}
          </div>
        </div>
        <button type="submit" disabled={isSubmitDisabled}>
          Crear Pokémon
        </button>
      </form>
    </div>
  );
};

export default CreatePokemon;