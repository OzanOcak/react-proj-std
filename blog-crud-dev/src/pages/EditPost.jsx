import { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";
import { format } from "date-fns";
import api from "../api/posts";

const EditPost = () => {
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const { posts, setPosts } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  const navigate = useNavigate();

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  const handleEdit = async (id) => {
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = { id, title: editTitle, datetime, body: editBody };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      setEditTitle("");
      setEditBody("");
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <main className="w-screen  flex flex-col items-center mt-6">
      {editTitle && (
        <div className="w-5/6 sm:w-3/4">
          <h2 className="font-bold text-3xl">Edit Post</h2>
          <form
            className="flex flex-col gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="postTitle">Title:</label>
            <input
              id="postTitle"
              type="text"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="ring-offset-0 ring-2 rounded-lg p-1"
              autoComplete="off"
            />

            <label htmlFor="postBody">Post:</label>
            <textarea
              id="postBody"
              required
              value={editBody}
              rows={13}
              onChange={(e) => setEditBody(e.target.value)}
              className="ring-offset-0 ring-2 rounded-lg p-1"
              autoComplete="off"
            />
            <button
              type="submit"
              onClick={() => handleEdit(post.id)}
              className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600"
            >
              Submit
            </button>
          </form>
        </div>
      )}
      {!editTitle && (
        <>
          <h2>Post Not Found</h2>
          <p>Well, that's disappointing.</p>
          <p>
            <Link to="/">Visit Our Homepage</Link>
          </p>
        </>
      )}
    </main>
  );
};

export default EditPost;
