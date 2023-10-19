import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../../Componets/Cards/Cards';
import {   Clear, accionDeRegreso, getPokemons, getType} from '../../redux/actions/actions.js';
import Paginado from '../../Componets/paginado/paginado';
import './home.css'
import FilterType from '../../Componets/Filtros/tipos/tipos';
import Ordenamiento from '../../Componets/Filtros/tipos/odenamiento';
import Origen from '../../Componets/Filtros/tipos/origin';







const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.allPokemons);
  const reinicios= useSelector((state)=> state.reinicio)
  const itens_por_pagina = 12;
  const [currentPage, setCurrentPage] = useState(1);
  

  

  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  useEffect(() => {
    if (reinicios === 1) {
      setCurrentPage(1);
      dispatch(accionDeRegreso());
    }

  }, [reinicios]);
  
  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getType());
  }, [dispatch]);
  


    
    
    console.log("reinicio", reinicios);
    console.log("reinicio",reinicios);
    


  if (!pokemons) {
    return <div>Cargando...</div>;
  }

  const startIndex = currentPage * itens_por_pagina;
  const endIndex = startIndex + itens_por_pagina;
  const currentPageData = pokemons.slice(startIndex, endIndex);

  

  return (
    <div className="Home">
      <div className='filtros'>
              <div className="FilterContainer">
  <div className="FilterComponent">
    <FilterType />
  </div>
  <div className="FilterComponent">
    <Ordenamiento />
  </div>
  <div className="FilterComponent">
    <Origen />
  </div>       

  </div>
</div>

      <div className="Cards">
        <Cards info={currentPageData} />
      </div>
      <div className="Paginado">
        <Paginado
          totalPages={Math.ceil(pokemons.length / itens_por_pagina)}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Home;

