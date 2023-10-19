import React, { useState, useEffect } from 'react';
import handleValidationName from './hanbler/handleValidationName';
import { useDispatch } from 'react-redux';
import { Clear, getName, resetPokemon } from '../../redux/actions/actions';
import { Link } from 'react-router-dom';
import FilterType from '../../Componets/Filtros/tipos/tipos.jsx';
import Ordenamiento from '../../Componets/Filtros/tipos/odenamiento';
import Origen from '../../Componets/Filtros/tipos/origin';
import './Navbar.css';

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
    <nav className="navbar">
      <div className="navbar-left">
        <ul className="menu">
          <li><button className="button"><Link to="/home"><span>Home</span></Link></button></li>
          <li><button className="button"><Link to="/create"><span>Crear</span></Link></button></li>
          <li><button className="button"><Link to="/landing"><span>Landing</span></Link></button></li>
        </ul>
      </div>
      <div className="navbar-middle">
        <img src='/logo.png' alt='imagen' className='imagen' />
      </div>
      <div className="navbar-right">
        {/* <button className="reset-button" onClick={() => dispatch(Clear())}>Limpiar</button> */}
        {/* <div className="FilterComponent">
          <FilterType />
        </div>
        <div className="FilterComponent">
          <Ordenamiento />
        </div>
        <div className="FilterComponent">
          <Origen />
        </div> */}
        <form onSubmit={handleSearch} className="search-form">
          <input
            onChange={handleName}
            type="text"
            name="search"
            placeholder="Buscar Pokemons"
            className="search-input"
            value={state.name}
          />
          <button
            type="submit"
            className="search-button"
            disabled={error.length > 0}
          >
            Buscar
          </button>
        </form>
        {error.length > 0 && (
          <div className="error-messages">
            {error.map((errorMsg, index) => (
              <div key={index} className="error-message">
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
