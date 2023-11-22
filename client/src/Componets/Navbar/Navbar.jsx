import React, { useState, useEffect } from 'react';
import handleValidationName from './hanbler/handleValidationName';
import { useDispatch } from 'react-redux';
import { Clear, getName, resetPokemon } from '../../redux/actions/actions';
import { Link } from 'react-router-dom';
import FilterType from '../../Componets/Filtros/tipos/tipos.jsx';
import Ordenamiento from '../../Componets/Filtros/tipos/odenamiento';
import Origen from '../../Componets/Filtros/tipos/origin';

const Navbar = () => {
  const [state, setState] = useState({ name: "" });
  const [error, setError] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error.length > 0) {
      dispatch(resetPokemon());
    }
  }, [error, dispatch]);

  const handleName = (e) => {
    const inputValue = e.target.value;

    setState({ ...state, name: inputValue.toLowerCase() });
    handleValidationName(state, inputValue, setError);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(getName(state.name));
    console.log("envío", state.name);
  };

 return (
    <nav className="navbar bg-gray-800 text-white p2 flex justify-between items-center">
      <div className="navbar-left">
        <ul className="flex space-x-4">
          <li>
            <button className="button">
              <Link to="/home">
                <span>Home</span>
              </Link>
            </button>
          </li>
          <li>
            <button className="button">
              <Link to="/create">
                <span>Crear</span>
              </Link>
            </button>
          </li>
          <li>
            <button className="button">
              <Link to="/landing">
                <span>Landing</span>
              </Link>
            </button>
          </li>
        </ul>
      </div>
      <div className="navbar-middle">
  <img src="/logo.png" alt="imagen" className="imagen" style={{ width: '230px' }} />
</div>
      <div className="navbar-right flex space-x-4 items-center">
        <form onSubmit={handleSearch} className="search-form">
          <input
            onChange={handleName}
            type="text"
            name="search"
            placeholder="Buscar Pokemons"
            className="search-input border border-gray-300 p-2 rounded-md"
            value={state.name}
          />
          <button
            type="submit"
            className="search-button bg-blue-500 text-white px-4 py-2 rounded-md"
            disabled={error.length > 0}
          >
            Buscar
          </button>
        </form>
        {error.length > 0 && (
          <div className="error-messages">
            {error.map((errorMsg, index) => (
              <div key={index} className="error-message text-red-500">
                {errorMsg}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;