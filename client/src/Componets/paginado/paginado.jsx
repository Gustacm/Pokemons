const Paginado = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 0) {
    return null;
  }

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <ol className="flex justify-center gap-1 text-xs font-medium">
      {currentPage > 1 && (
        <li>
          <a
            href="#"
            className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
            onClick={() => onPageChange(currentPage - 1)}
          >
            <span className="sr-only">Prev Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>
      )}

      {pages.map((page) => (
        <li
          key={page}
          className={`block h-8 w-8 rounded ${
            currentPage === page
              ? 'border-blue-600 bg-blue-600 text-white'
              : 'border border-gray-100 bg-white text-center leading-8 text-gray-900'
          }`}
        >
          <a
            href="#"
            className="block h-full w-full flex items-center justify-center"
            onClick={() => onPageChange(page)}
          >
            {page}
          </a>
        </li>
      ))}

      {currentPage < totalPages && (
        <li>
          <a
            href="#"
            className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
            onClick={() => onPageChange(currentPage + 1)}
          >
            <span className="sr-only">Next Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>
      )}
    </ol>
  );
};

export default Paginado;
