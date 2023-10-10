import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { originAC } from '../../../redux/actions/actions';

const Origen = () => {
  const dispatch = useDispatch();
  const [clave, setClave] = useState("Api");

  const selec = (event) => {
    const selected = event.target.value;
    setClave(selected);
  }

  const handleClick = () => {
    dispatch(originAC(clave)); 
  };

  return (
    <div>
      <select
        id="origenSelect" // Cambia el id a uno único, por ejemplo, "origenSelect"
        name="tipos"
        onChange={selec}
        value={clave} 
      >
        <option value="Api">Api</option>
        <option value="DB">Creados</option>
      </select>
      <button onClick={handleClick}>Ordenar</button>
      <ul>
      </ul>
    </div>
  );
};

export default Origen;
