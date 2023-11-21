import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getId, resetPokemonDetail } from '../../redux/actions/actions';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Detail = ({ match, history }) => {
  const dispatch = useDispatch();
  const { id } = match.params;
  const pokemons = useSelector((state) => state.pokemonDetail);
  const [img, setImg] = useState(0);

  const handleImg = () => {
    setImg((prevImg) => (prevImg === 1 ? 0 : 1));
  };

  useEffect(() => {
    dispatch(getId(id));

    return () => {
      dispatch(resetPokemonDetail());
    };
  }, [dispatch, id]);

  if (!pokemons) {
    return <div className="flex items-center justify-center h-screen text-white">Cargando...</div>;
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

  const backgroundImageUrl =
    'https://png.pngtree.com/background/20230612/original/pngtree-group-of-pokemons-are-gathered-in-the-forest-picture-image_3181302.jpg';

  return (
    <div
      className="bg-cover bg-center bg-no-repeat flex items-center justify-center h-screen"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="bg-black bg-opacity-50 rounded-lg shadow p-8 max-w-4xl mx-auto text-white">
        <span
          className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
        ></span>

        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold mb-4">{name}</h2>
          {image && image[img] && (
            <img
              alt={name}
              src={image[img]}
              className="h-48 w-48 rounded-lg object-cover shadow-sm mb-4 mx-auto"
            />
          )}
        </div>

        <div className="text-base">
          <p>
            <span className="font-medium">Vida:</span> {Vida}
          </p>
          <p>
            <span className="font-medium">Ataque:</span> {Ataque}
          </p>
          <p>
            <span className="font-medium">Defensa:</span> {Defensa}
          </p>
          {Velocidad && <p><span className="font-medium">Velocidad:</span> {Velocidad}</p>}
          {Altura && <p><span className="font-medium">Altura:</span> {Altura}</p>}
          {Peso && <p><span className="font-medium">Peso:</span> {Peso}</p>}
        </div>

        <div className="mt-4 text-base">
          <h3 className="font-semibold">Tipo(s):</h3>
          <ul className="list-disc list-inside">
            {Type &&
              Type.map((type, index) => (
                <li key={index} className="mb-1">
                  {type}
                </li>
              ))}
          </ul>
        </div>

        <Link to="/home" className="text-blue-500 hover:underline block mt-8 text-lg">
          Ir a Home
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Detail);

