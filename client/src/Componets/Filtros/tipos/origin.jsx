import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { originAC } from '../../../redux/actions/actions';

const Origen = () => {
  const dispatch = useDispatch();
  const [clave, setClave] = useState("Api");

  const selec = (event) => {
    const selected = event.target.value;
    setClave(selected);
  };

  const handleClick = () => {
    dispatch(originAC(clave));
  };

  return (
    <div className="mt-4">
      <label htmlFor="OrigenSelect" className="block text-sm font-medium text-gray-900">
        Ordenar por origen
      </label>

      <div className="flex items-center space-x-4 mt-1">
        <select
          id="OrigenSelect"
          name="tipos"
          onChange={selec}
          value={clave}
          className="w-full rounded-lg border border-gray-300 text-gray-700 sm:text-sm"
        >
          <option value="Api">Api</option>
          <option value="DB">Creados</option>
        </select>
        <button
          onClick={handleClick}
          className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-700"
        >
          Ordenar
        </button>
      </div>
      <ul className="ordenamiento-list"></ul>
    </div>
  );
};

export default Origen;
