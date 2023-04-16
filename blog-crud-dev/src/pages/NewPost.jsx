import { useContext, useState } from "react";
import DataContext from "../context/DataContext";
import api from "../api/posts";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const { posts, setPosts } = useContext(DataContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, datetime, body: postBody };
    try {
      const response = await api.post("/posts", newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle("");
      setPostBody("");
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <main className="w-screen mt-8">
      <h2 className="w-5/6 sm:w-3/4"></h2>
      <form
        className="flex flex-col w-5/6 sm:w-3/4 mx-auto gap-2 "
        onSubmit={handleSubmit}
      >
        <label htmlFor="postTitle">Title:</label>
        <input
          id="postTitle"
          type="text"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          className="ring-offset-0 ring-2 rounded-lg p-1"
          autoComplete="off"
        />
        <label htmlFor="postBody">Post:</label>
        <textarea
          id="postBody"
          required
          rows={13}
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
          className="ring-2 ring-offset-0 rounded-lg p-1"
          autoComplete="off"
        />
        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default NewPost;
