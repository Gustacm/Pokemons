import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getId, resetPokemonDetail } from '../../redux/actions/actions';
import { withRouter } from 'react-router-dom';
import './DETAIL.css'; // Importa tu archivo CSS aquí
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Detail = ({ match, history }) => {
  const dispatch = useDispatch();
  const { id } = match.params;
  const pokemons = useSelector((state) => state.pokemonDetail);
  const [img, setImg] = useState(0);
  // const hasNumbersAndLetters = /[0-9]/.test(id) && /[a-zA-Z]/.test(id);

  const handleImg = () => {
    if (img === 1) {
      setImg(0);
    } else {
      setImg(1);
    }
  };

  // const handleDelete = () => {
  //   dispatch(deleteDB(id));
  //   history.push('/home');
  // };

  useEffect(() => {
    dispatch(getId(id));


    return () => {
      dispatch(resetPokemonDetail());
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
    <div className="pokemon-detail-container">
      <div className="pokemon-detail-card">
        {image && image[img] && <img src={image[img]} alt={name} />}
        <button  className="d-button" onClick={handleImg}>d</button> <button className='i-button' onClick={handleImg}>i</button>
        <Link to="/home">
          <button className="home-button">Ir a Home</button>
        </Link>
        <h2>{name}</h2>

        {/* {hasNumbersAndLetters && (
          // <button className="delete-button" onClick={handleDelete}>
          //   Eliminar
          // </button>
        )} */}
        <div className='texto'>
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
      </div>
    </div>
  );
};

export default withRouter(Detail);