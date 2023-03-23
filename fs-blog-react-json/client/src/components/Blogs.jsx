import React from "react";

import { Link } from "react-router-dom";

const Blogs = ({
  title,
  category,
  description,
  id,
  imageUrl,
  excerpt,
  handleDelete,
}) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center" style={{ maxWidth: "22rem" }}>
        <img
          src={imageUrl}
          alt={title}
          position="top"
          style={{ maxWidth: "100%", height: "180px" }}
        />
        <div>
          <div>{title}</div>
          <div>
            {excerpt(description)}
            <Link to={`/blog/${id}`}>Read More</Link>
          </div>
          <div>{category}</div>
          <span>
            <div
              className="mt-1"
              tag="a"
              color="none"
              onClick={() => handleDelete(id)}
            >
              <div fas icon="trash" style={{ color: "#dd4b39" }} size="lg" />
            </div>
            <Link to={`/editBlog/${id}`}>
              <div
                fas
                icon="edit"
                style={{ color: "#55acee", marginLeft: "10px" }}
                size="lg"
              />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
