import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTypeAc } from '../../../redux/actions/actions';

const FilterType = () => {
  const dispatch = useDispatch();
  const typesP = useSelector((state) => state.typeState);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleTypeChange = (event) => {
    const selectedType = event.target.value;
    if (!selectedTypes.includes(selectedType)) {
      setSelectedTypes([...selectedTypes, selectedType]);
        
      }
    }
     

    const validation = () => {
        if (selectedTypes.includes("all")) {
            setSelectedTypes([])
        }
    
    }
    
  const handleFilterClick = () => {
    validation()
     dispatch(filterTypeAc(selectedTypes));
  };

  return (
    <div>
      <select
        id="tipos"
        name="tipos"
        onChange={handleTypeChange}
        value={selectedTypes} 
        multiple={true} 
      >
        <option value="all">Todos</option>
        {typesP.map((tipo) => (
          <option key={tipo.id} value={tipo.name}>
            {tipo.name}
          </option>
        ))}
      </select>
      <button onClick={handleFilterClick}>Filtrar</button>
      <ul>
        {selectedTypes.map((tipo, index) => (
          <li key={index}>{tipo}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterType;
