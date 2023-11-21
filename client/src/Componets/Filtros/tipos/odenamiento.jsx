import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterAZ } from '../../../redux/actions/actions';

const Ordenamiento = () => {
  const dispatch = useDispatch();
  const [orden, setOrden] = useState("az");

  const selec = (event) => {
    const selected = event.target.value;
    setOrden(selected);
  };

  const handleClick = () => {
    console.log("click ordenamiento");
    dispatch(filterAZ(orden));
  };

  return (
    <div className="mt-4">
      <label htmlFor="OrdenSelect" className="block text-sm font-medium text-gray-900">
        Orden  alfabetico
      </label>

      <div className="flex items-center space-x-2 mt-0">
        <select
          id="OrdenSelect"
          name="tipos"
          onChange={selec}
          value={orden}
          className="w-full rounded-lg border border-gray-300 text-gray-700 sm:text-sm"
        >
          <option value="az">A - Z</option>
          <option value="za">Z - A</option>
          <option value="X">X</option>
        </select>
        <button
          onClick={handleClick}
          className="bg-blue-500 text-[#fff] px-2 py-1 rounded-md hover:bg-gray-300 "
        >
          Ordenar
        </button>
      </div>
    </div>
  );
};

export default Ordenamiento;



  //   return (
  //     <div>
  //         <select>
  
  //         </select>
  //       <p>Orden seleccionado: {orden}</p>
  //     </div>
  //   );
  // };