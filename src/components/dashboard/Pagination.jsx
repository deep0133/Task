const Pagination = ({ totalPages, currentPage, onPageChange }) => (
  <div className='flex justify-center space-x-2'>
    {[...Array(totalPages).keys()].map((num) => (
      <button
        key={num}
        className={`px-3 py-1 border rounded ${
          currentPage === num + 1 ? "bg-blue-500 text-white" : ""
        }`}
        onClick={() => onPageChange(num + 1)}
      >
        {num + 1}
      </button>
    ))}
  </div>
);

export default Pagination;
