import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getType } from '../../redux/actions/actions';




const CreatePokemon = () => {
  const dispatch = useDispatch();
  const typesP = useSelector((state) => state.typeState);

  useEffect(() => {
    dispatch(getType());
  }, [dispatch]);

  const [pokemonData, setPokemonData] = useState({
    nombre: '',
    imagen: '',
    vida: '1',
    ataque: '1',
    defensa: '1',
    velocidad: '1',
    altura: '1',
    peso: '1',
    tipos: [],
  });

  const [errors, setErrors] = useState({
    nombre: '',
    imagen: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPokemonData({
      ...pokemonData,
      [name]: value,
    });

    // Validaciones en tiempo real
    const newErrors = { ...errors };

    if (name === 'nombre' && !value.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
    } else {
      newErrors.nombre = '';
    }

    if (name === 'imagen' && !value.trim()) {
      newErrors.imagen = 'La imagen es obligatoria';
    } else {
      newErrors.imagen = '';
    }

    setErrors(newErrors);
  };

  const handleTipoChange = (e) => {
    const { options } = e.target;
    const selectedTypes = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    setPokemonData({
      ...pokemonData,
      tipos: selectedTypes,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos al servidor
    console.log('Datos del Pokémon:', pokemonData);
    // También puedes realizar validaciones aquí antes de enviar los datos al servidor
  };

  const isSubmitDisabled = Object.values(errors).some((error) => error !== '');

  return (
    <div>
      <h2>Crear Nuevo Pokémon</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={pokemonData.nombre}
            onChange={handleInputChange}
          />
          {errors.nombre && <p className="error">{errors.nombre}</p>}
        </div>
        <div>
          <label htmlFor="imagen">Imagen:</label>
          <input
            type="text"
            id="imagen"
            name="imagen"
            value={pokemonData.imagen}
            onChange={handleInputChange}
          />
          {errors.imagen && <p className="error">{errors.imagen}</p>}
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
    onChange={handleInputChange}
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
    onChange={handleInputChange}
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
    onChange={handleInputChange}
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
    onChange={handleInputChange}
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
    max="5"
    step="1"
    value={pokemonData.altura}
    onChange={handleInputChange}
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
    onChange={handleInputChange}
  />
  {pokemonData.peso}
</div>

<div>
          <label htmlFor="tipos">Tipo:</label>
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
          </select>
          <div>
            <p>Tipos seleccionados:</p>
            <ul>
              {pokemonData.tipos.map((tipo, index) => (
                <li key={index}>{tipo}</li>
              ))}
            </ul>
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