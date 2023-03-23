import React from "react";
import { Link } from "react-router-dom";

const LatestBlog = ({ imageUrl, title, id }) => {
  return (
    <div className="border rounded-2xl">
      <Link to={`/blog/${id}`}>
        <div className="hover:bg-gray-100 my-2">
          <div className="flex flex-col items-center">
            <div>
              <img
                src={imageUrl}
                alt={title}
                fluid
                className="rounded-circle"
                style={{ height: "80px" }}
              />
            </div>
            <div>
              <div>
                <p className="text-start latest-title">{title}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LatestBlog;
