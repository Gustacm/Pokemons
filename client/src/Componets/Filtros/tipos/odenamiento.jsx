import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterAZ } from '../../../redux/actions/actions';

const Ordenamiento = () => {
  const dispatch = useDispatch();
  const [orden, setOrden] = useState("az"); 
 
  const selec = (event) => {
    const selected = event.target.value;
    setOrden(selected);
  }

  const handleClick = () => {
    console.log("click ordenamiento");
    dispatch(filterAZ(orden));
  };

  return (
    <div>
      <select
        id="ordenSelect" // Cambia el id a uno único, por ejemplo, "ordenSelect"
        name="tipos"
        onChange={selec}
        value={orden} 
      >
        <option value="az">A - Z</option>
        <option value="za">Z - A</option>
        <option value="X">X</option>
      </select>
      <button onClick={handleClick}>Ordenar</button>
      <ul>
      </ul>
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