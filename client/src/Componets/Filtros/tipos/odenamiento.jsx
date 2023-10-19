import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterAZ } from '../../../redux/actions/actions';
import "./ordenamiento.css"; // Agrega el archivo CSS

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
    <div className="ordenamiento-container"> 
      <select
        id="ordenSelect"
        name="tipos"
        onChange={selec}
        value={orden} 
        className="ordenamiento-select" 
      >
        <option value="az">A - Z</option>
        <option value="za">Z - A</option>
        <option value="X">X</option>
      </select>
      <button onClick={handleClick} className="ordenamiento-button">Ordenar</button> 
      <ul className="ordenamiento-list"> 
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