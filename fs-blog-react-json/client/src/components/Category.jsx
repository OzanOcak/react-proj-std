import React from "react";

const Category = ({ handleCategory, options }) => {
  return (
    <div className="w-[18rem] mt-2 border rounded-2xl">
      <h4>Categories</h4>
      <div>
        {options.map((item, index) => (
          <div
            className="hover:bg-gray-200 hover:rounded-2xl"
            key={index}
            style={{ cursor: "pointer" }}
            onClick={() => handleCategory(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
