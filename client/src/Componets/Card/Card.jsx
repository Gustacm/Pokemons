import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, name, img, types }) => {
  const detailRoute = `/detail/${id}`;

  return (
    <article className="flex bg-white shadow-lg transition transform hover:scale-105">
      <div className="hidden sm:block sm:w-56">
        <img
          alt={name}
          src={img}
          className="w-full h-40 object-cover rounded-tl-md rounded-bl-md"
        />
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <Link to={detailRoute} className="text-blue-700 hover:underline">
          <h3 className="font-bold text-gray-900 text-xl mb-2 capitalize">
            {name}
          </h3>
        </Link>

        <div>
          <h3 className="text-sm font-semibold text-gray-600 mb-1">Tipos:</h3>
          <ul className="flex space-x-2">
            {types.map((type, index) => (
              <li
                key={index}
                className="bg-gray-200 px-2 py-0.5 text-sm rounded-md text-gray-700"
              >
                {type}
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:flex sm:items-center sm:justify-between mt-2">
          <Link
            to={detailRoute}
            className="block bg-blue-500 px-4 py-2 text-center text-sm font-bold text-white rounded-md transition hover:bg-blue-700"
          >
            Ver Detalles
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Card;
