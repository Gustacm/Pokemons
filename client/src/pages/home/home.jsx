import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../../Componets/Cards/Cards';
import { Clear, accionDeRegreso, getPokemons, getType } from '../../redux/actions/actions.js';
import Paginado from '../../Componets/paginado/paginado';
import FilterType from '../../Componets/Filtros/tipos/tipos';
import Ordenamiento from '../../Componets/Filtros/tipos/odenamiento';
import Origen from '../../Componets/Filtros/tipos/origin';
import Navbar from '../../Componets/Navbar/Navbar.jsx';

const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.allPokemons);
  const reinicios = useSelector((state) => state.reinicio);
  const itens_por_pagina = 12;
  const [currentPage, setCurrentPage] = useState(0);

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

  if (!pokemons) {
    return <div className="text-center mt-8">Cargando...</div>;
  }

  const startIndex = currentPage * itens_por_pagina;
  const endIndex = startIndex + itens_por_pagina;
  const currentPageData = pokemons.slice(startIndex, endIndex);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">

      <Navbar />


      <div className="flex flex-grow p-4">
        {/* Filtros */}
        <div className="flex-none w-1/7 p-4 mr-4">
          <FilterType />
          <Ordenamiento />
          <Origen />
        </div>


        <div className="flex-grow">
          <Cards info={currentPageData} />
          <div className="mt-4">
            <Paginado
              totalPages={Math.ceil(pokemons.length / itens_por_pagina)}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

