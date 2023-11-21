import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTypeAc } from '../../../redux/actions/actions';

const FilterType = () => {
  const dispatch = useDispatch();
  const typesP = useSelector((state) => state.typeState);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleTypeChange = (event) => {
    const selectedType = event.target.value;

    setSelectedTypes((prevSelected) => {
      if (prevSelected.includes("all")) {
        return [selectedType];
      } else {
        return prevSelected.includes(selectedType)
          ? prevSelected.filter(type => type !== selectedType)
          : [...prevSelected, selectedType];
      }
    });
  };

  const validation = () => {
    if (selectedTypes.includes("all")) {
      setSelectedTypes([]);
    }
  };

  const handleFilterClick = () => {
    validation();
    dispatch(filterTypeAc(selectedTypes));
  };

  return (
    <div className="mt-4">
      <label htmlFor="Tipos" className="block text-sm font-medium text-gray-900">
        Filtrar por tipo
      </label>

      <div className="flex items-center space-x-4 mt-1">
        <select
          id="Tipos"
          name="tipos"
          onChange={handleTypeChange}
          value={selectedTypes}
          multiple={true}
          className="w-full rounded-lg border border-gray-300 text-gray-700 sm:text-sm"
        >
          <option value="all">Todos</option>
          {typesP.map((tipo) => (
            <option key={tipo.id} value={tipo.name} >
              {tipo.name}
            </option>
          ))}
        </select>
        <button
          onClick={handleFilterClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Filtrar
        </button>
      </div>
    </div>
  );
};

export default FilterType;
