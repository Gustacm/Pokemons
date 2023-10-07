import React, { useState, useEffect } from 'react';
import handleValidationName from './hanbler/handleValidationName';
import { useDispatch } from 'react-redux';
import { getName, resetPokemon } from '../../redux/actions/actions';
import { Link } from 'react-router-dom'; 

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
  };

  return (
    <nav className="navbar">
      <div className="navbar-buttons">
        <Link to="/home">Home</Link>
        <Link to="/create">Create</Link>
      </div>
      <div className="navbar-brand">
        <span>Logo</span>
      </div>
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
    </nav>
  );
};

export default Navbar;


