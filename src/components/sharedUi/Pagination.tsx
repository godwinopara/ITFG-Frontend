import React from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const startEntry = (currentPage - 1) * 5 + 1;
  const endEntry = Math.min(currentPage * 5, totalPages * 5);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className=" flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between items-center my-6">
      <div>
        Showing {startEntry} to {endEntry} of {totalPages * 5} entries
      </div>

      <div className="flex">
        <button
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 mx-2 rounded-md ${
            currentPage === 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-meta-3 text-white"
          }`}
        >
          Previous
        </button>

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 mx-2 rounded-md ${
              currentPage === page ? "bg-meta-3 text-white" : "bg-gray-200"
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 mx-2 rounded-md ${
            currentPage === totalPages
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-meta-3 text-white"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};
