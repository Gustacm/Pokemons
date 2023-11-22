// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getType, postPokemons} from '../../redux/actions/actions';
// import Delete from './handlers/handleDeleteType';
// import Cambios from './handlers/handleCambios';




// const CreatePokemon = () => {
//   const dispatch = useDispatch();
//   const typesP = useSelector((state) => state.typeState);

//   useEffect(() => {
//     dispatch(getType());
//   }, [dispatch]);


//  const handleTipoChange = (e) => {
//   Cambios(e, pokemonData, setPokemonData, errors, setErrors, Img,SetImg);
// };

  
//   const [pokemonData, setPokemonData] = useState({
//     nombre: '',
//     imagen: 'https://www.apkonline.net/imagescropped/pokemonhdwallpaperlockscreenicon128.jpg.webp',
//     vida: '1',
//     ataque: '1',
//     defensa: '1',
//     velocidad: '1',
//     altura: '1',
//     peso: '1',
//     tipos: [],
//   });
//   const [errors, setErrors] = useState({
//     nombre: '  ',
//     imagen: '',
//     tipos: '  ',
//   });

//   const [Img,SetImg] = useState([])

//   const data = {
//     name: pokemonData.nombre.toLowerCase(),
//     Imagen: pokemonData.imagen,
//     Vida: pokemonData.vida,
//     Ataque: pokemonData.ataque,
//     Defensa: pokemonData.defensa,
//     Velocidad: pokemonData.velocidad,
//     Altura: pokemonData.altura,
//     Peso: pokemonData.peso,
//     typeNames: [...pokemonData.tipos],
//   };
  
  
  

//   const isSubmitDisabled = Object.values(errors).some((error) => error !== '');
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     dispatch(postPokemons(data));


//     alert("El Pokémon se ha creado con éxito.");

   
//     window.location.reload();
//   };
  

//   return (
//     <div>
//       <h2>Crear Nuevo Pokémon</h2>
//       <form onSubmit={handleSubmit}>
//         <img src={pokemonData.imagen} alt="pokemon" width="200" height="200" />
  
//         <div>
//           <label className="nombre">Nombre:</label>
//           <input
//             type="text"
//             id="nombre"
//             name="nombre"
//             value={pokemonData.nombre}
//             onChange={handleTipoChange}
//           />
//           {errors.nombre && <p className="error">{errors.nombre}</p>}
//         </div>
//         <div>
//           <label className="imagen">Imagen:</label>
//           <input
//             type="text"
//             id="imagen"
//             name="imagen"
//             onChange={handleTipoChange}
//           />
//           {Img && <p className="StateImg">{Img}</p>}
//         </div>
//         <div>
//           <label className="vida">Vida:</label>
//           <input
//             type="range"
//             id="vida"
//             name="vida"
//             min="1"
//             max="5"
//             step="1"
//             value={pokemonData.vida}
//             onChange={handleTipoChange}
//           />
//           {pokemonData.vida}
//         </div>
//         <div>
//           <label className="ataque">Ataque:</label>
//           <input
//             type="range"
//             id="ataque"
//             name="ataque"
//             min="1"
//             max="5"
//             step="1"
//             value={pokemonData.ataque}
//             onChange={handleTipoChange}
//           />
//           {pokemonData.ataque}
//         </div>
//         <div>
//           <label className="defensa">Defensa:</label>
//           <input
//             type="range"
//             id="defensa"
//             name="defensa"
//             min="1"
//             max="5"
//             step="1"
//             value={pokemonData.defensa}
//             onChange={handleTipoChange}
//           />
//           {pokemonData.defensa}
//         </div>
//         <div>
//           <label className="velocidad">Velocidad:</label>
//           <input
//             type="range"
//             id="velocidad"
//             name="velocidad"
//             min="1"
//             max="5"
//             step="1"
//             value={pokemonData.velocidad}
//             onChange={handleTipoChange}
//           />
//           {pokemonData.velocidad}
//         </div>
//         <div>
//           <label className="altura">Altura:</label>
//           <input
//             type="range"
//             id="altura"
//             name="altura"
//             min="1"
//             max="100"
//             step="1"
//             value={pokemonData.altura}
//             onChange={handleTipoChange}
//           />
//           {pokemonData.altura}
//         </div>
//         <div>
//           <label className="peso">Peso:</label>
//           <input
//             type="range"
//             id="peso"
//             name="peso"
//             min="1"
//             max="5"
//             step="1"
//             value={pokemonData.peso}
//             onChange={handleTipoChange}
//           />
//           {pokemonData.peso}
//         </div>
//         <div>
//           <label className="tipos">Tipos:</label>
//           <select
//             id="tipos"
//             name="tipos"
//             onChange={handleTipoChange}
//             multiple
//             value={pokemonData.tipos}
//           >
//             {typesP.map((tipo) => (
//               <option key={tipo.id} value={tipo.name}>
//                 {tipo.name}
//               </option>
//             ))}
//             <option value="new type">Crea Nuevo Tipo...</option>
//           </select>
//           <div>
//             <p>Tipos seleccionados:</p>
//             <ul>
//               {pokemonData.tipos.map((tipo, index) => (
//                 <li key={index}>{tipo}</li>
//               ))}
//             </ul>
//             <button
//               type="button"
//               onClick={() => Delete(pokemonData, setPokemonData, setErrors, errors)}
//             >
//               Quitar tipo
//             </button>
//             {errors.tipos.length > 0 && (
//               <p className="error">{errors.tipos[0]}</p>
//             )}
//           </div>
//         </div>
//         <button type="submit" disabled={isSubmitDisabled}>
//           Crear Pokémon
//         </button>
//       </form>
//     </div>
//   );
  
// };

// export default CreatePokemon;




import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getType, postPokemons } from '../../redux/actions/actions';
import Delete from './handlers/handleDeleteType';
import Cambios from './handlers/handleCambios';
import './Create.css';

const CreatePokemon = () => {
  const dispatch = useDispatch();
  const typesP = useSelector((state) => state.typeState);

  useEffect(() => {
    dispatch(getType());
  }, [dispatch]);

  const handleTipoChange = (e) => {
    Cambios(e, pokemonData, setPokemonData, errors, setErrors, Img, SetImg);
  };

  const [pokemonData, setPokemonData] = useState({
    nombre: '',
    imagen: 'https://www.apkonline.net/imagescropped/pokemonhdwallpaperlockscreenicon128.jpg.webp',
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
    tipos: '',
  });

  const [Img, SetImg] = useState([]);

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

    alert('El Pokémon se ha creado con éxito.');

    window.location.reload();
  };

  return (
    <div className="bg-cover bg-center bg-no-repeat h-screen" style={{ backgroundImage: 'url("tu-imagen-de-fondo.jpg")' }}>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-[#000] mb-8">Crear Nuevo Pokémon</h2>
        <div className="grid grid-cols-1 gap-x-100 gap-y-80 lg:grid-cols-5">
        <div className="lg:col-span-2  relative">
  <div className="absolute top-0 left-0 right-0 bottom-0 bg-white bg-opacity-75 rounded-lg"></div>
  <img src="https://cdn.mos.cms.futurecdn.net/ePwfjynKC6eTGPmXN6mQZb-650-80.jpg.webp" alt="pokemon" className="rounded-lg w-full h-full object-fill" />
  <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
    <p className="max-w-xl text-lg text-[#000] text-center">
                Datos Curiosos Pokémon:
                <br />
                - Pikachu es un Pokémon de tipo Eléctrico.
                <br />
                - Bulbasaur es el único Pokémon que aprende Semilla Lejana naturalmente.
                <br />
                - La canción de Jigglypuff puede hacer que su audiencia se duerma.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-4">
    <div className="flex items-center justify-center mt-4">
      <img src={pokemonData.imagen} alt="pokemon" width="200" height="200" />
    </div>
            <div className="flex items-center justify-center">
      <input
        type="text"
        id="nombre"
        name="nombre"
        value={pokemonData.nombre}
        onChange={handleTipoChange}
        className="w-full max-w-md rounded-lg border border-[#6d6d6d] p-3 text-sm"
        placeholder="Nombre"
      />
    </div>
    <div className="flex items-center justify-center">
      <input
        type="text"
        id="imagen"
        name="imagen"
        onChange={handleTipoChange}
        className="w-full max-w-md rounded-lg border border-[#6d6d6d] p-3 text-sm"
        placeholder="Imagen"
      />


                {errors.imagen && <p className="error">{errors.imagen}</p>}
              </div>

         <div>
           <label className="vida">Vida:</label>
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
          <label className="ataque">Ataque:</label>
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
          <label className="defensa">Defensa:</label>
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
          <label className="velocidad">Velocidad:</label>
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
          <label className="altura">Altura:</label>
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
          <label className="peso">Peso:</label>
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
                <label className="tipos">Tipos:</label>
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
                  <button
                    type="button"
                    onClick={() => Delete(pokemonData, setPokemonData, setErrors, errors)}
                    className="bg-red-500 text-white p-2 rounded-lg mt-2"
                  >
                    Quitar tipo
                  </button>
                  {errors.tipos.length > 0 && (
                    <p className="error">{errors.tipos[0]}</p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitDisabled}
                className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
              >
                Crear Pokémon
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePokemon;
