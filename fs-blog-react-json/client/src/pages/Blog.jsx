import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Badge from "../components/Badge";
import { toast } from "react-toastify";

const Blog = () => {
  const [blog, setBlog] = useState();
  const [relatedPost, setRelatedPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleBlog();
    }
  }, [id]);

  const getSingleBlog = async () => {
    const response = await axios.get(`http://localhost:5000/blogs/${id}`);
    const relatedPostData = await axios.get(
      `http://localhost:5000/blogs?category=${response.data.category}&_start=0&_end=3`
    );
    if (response.status === 200 || relatedPostData.status === 200) {
      setBlog(response.data);
      setRelatedPost(relatedPostData.data);
    } else {
      toast.error("Something went wrong");
    }
  };

  const excerpt = (str) => {
    if (str.length > 60) {
      str = str.substring(0, 60) + " ... ";
    }
    return str;
  };

  const styleInfo = {
    display: "inline",
    marginLeft: "5px",
    float: "right",
    marginTop: "7px",
  };
  return (
    <div className="m-4">
      <Link to="/">
        <strong style={{ float: "left", color: "black" }} className="mt-3">
          Go Back
        </strong>
      </Link>
      <div
        tag="h2"
        className="text-gray-400 font-bold text-4xl my-2"
        style={{ display: "inline-block" }}
      >
        {blog && blog.title}
      </div>
      <img
        src={blog && blog.imageUrl}
        className="img-fluid rounded"
        alt={blog && blog.title}
        style={{ width: "100%", maxHeight: "600px" }}
      />
      <div style={{ marginTop: "20px" }}>
        <div style={{ height: "43px", background: "#f6f6f6" }}>
          <strong
            style={{ float: "left", marginTop: "12px", marginLeft: "2px" }}
          >
            {blog && blog.date}
          </strong>
          <Badge styleInfo={styleInfo}>{blog && blog.category}</Badge>
        </div>
        <div className="lead md-0">{blog && blog.description}</div>
      </div>
      {relatedPost && relatedPost.length > 0 && (
        <>
          {relatedPost.length > 1 && <h1>Related Post</h1>}
          <div className="grid grid-cols-3">
            {relatedPost
              .filter((item) => item.id != id)
              .map((item, index) => (
                <div className="border p-1 rounded-xl">
                  <div>
                    <Link to={`/blog/${item.id}`}>
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        position="top"
                        className="rounded-xl"
                      />
                    </Link>
                    <div>
                      <h2>{item.title}</h2>
                      <p>{excerpt(item.description)}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Blog;
