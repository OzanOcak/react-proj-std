const NewPost = ({
  handleSubmit,
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,
}) => {
  return (
    <main className="w-screen">
      <h2 className="m-[2rem]">New Post</h2>
      <form className="flex flex-col gap-2 px-[2rem]" onSubmit={handleSubmit}>
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
