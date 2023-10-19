import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTypeAc } from '../../../redux/actions/actions';
import "./tipos.css"

const FilterType = () => {
  const dispatch = useDispatch();
  const typesP = useSelector((state) => state.typeState);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleTypeChange = (event) => {
    const selectedType = event.target.value;
    if (!selectedTypes.includes(selectedType)) {
      setSelectedTypes([ selectedType]);
    }
  }

  const validation = () => {
    if (selectedTypes.includes("all")) {
      setSelectedTypes([]);
    }
  }

  const handleFilterClick = () => {
    validation();
    dispatch(filterTypeAc(selectedTypes));
  };

  return (
    <div className="filter-type-container">
      <select
        id="tipos"
        name="tipos"
        onChange={handleTypeChange}
        value={selectedTypes} 
        multiple={true}
        className="filter-select" 
      >
        <option value="all">Todos</option>
        {typesP.map((tipo) => (
          <option key={tipo.id} value={tipo.name} className="filter-option">  
            {tipo.name}
          </option>
        ))}
      </select>
      <button onClick={handleFilterClick} className="filter-button">Filtrar</button>  
    </div>
  );
};

export default FilterType;



