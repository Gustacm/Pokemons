import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { originAC } from '../../../redux/actions/actions';
import "./origen.css"; 

const Origen = () => {
  const dispatch = useDispatch();
  const [clave, setClave] = useState("Api");

  const selec = (event) => {
    const selected = event.target.value;
    setClave(selected);
  }

  const handleClick = () => {
    dispatch(originAC(clave))}
  return (
    <div className="origen-container"> 
      <select
        id="origenSelect"
        name="tipos"
        onChange={selec}
        value={clave} 
        className="origen-select" 
      >
        <option value="Api">Api</option>
        <option value="DB">Creados</option>
      </select>
      <button onClick={handleClick} className="origen-button">Ordenar</button> {/* Agrega una clase al botón */}
      <ul className="origen-list"> {/* Agrega una clase a la lista si es necesario */}
      </ul>
    </div>
  );
};

export default Origen;

