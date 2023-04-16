import React from "react";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex gap-2 justify-center">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={`flex h-[1.6rem] w-[1.6rem] justify-center items-center border hover:bg-gray-400 ${
              page == currentPage ? "bg-gray-300" : ""
            }`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
