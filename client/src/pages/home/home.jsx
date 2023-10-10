import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../../Componets/Cards/Cards';
import { getPokemons} from '../../redux/actions/actions.js';
import Paginado from '../../Componets/paginado/paginado';
import FilterType from '../../Componets/Filtros/tipos/tipos.jsx';
import Ordenamiento from '../../Componets/Filtros/tipos/odenamiento';
import Origen from '../../Componets/Filtros/tipos/origin';






const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.allPokemons);
  const itens_por_pagina = 12; 
  const [currentPage, setCurrentPage] = useState(0);


  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (!pokemons) {
    return <div>Cargando...</div>;
  }

  const startIndex = currentPage  * itens_por_pagina;
  const endIndex = startIndex + itens_por_pagina;
  const currentPageData = pokemons.slice(startIndex, endIndex);

console.log("estate",pokemons);
  return (
    <div className='Home'>
              <FilterType/>
              <Ordenamiento/>
              <Origen/>
      <Cards info={currentPageData} />
      
      <Paginado
  totalPages={Math.ceil(pokemons.length / itens_por_pagina)}
  currentPage={currentPage}
  onPageChange={handlePageChange}
/>

    </div>
  );
};

export default Home;

