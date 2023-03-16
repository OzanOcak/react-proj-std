import { useParams, Link } from "react-router-dom";

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  return (
    <main className="w-screen flex flex-col items-center">
      <article className="w-5/6 sm:w-3/4 ">
        {post && (
          <>
            <h2 className="font-bold text-3xl">{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p
              className="my-4 first-line:tracking-widest
  first-letter:text-5xl first-letter:font-bold first-letter:text-black
  first-letter:mr-1 first-letter:float-left grow"
            >
              {post.body}
            </p>
            <Link to={`/edit/${post.id}`}>
              <button
                className="bg-green-500 text-white px-2 rounded-md hover:bg-green-600
               float-right mr-[2rem] p-1"
              >
                Edit Post
              </button>
            </Link>

            <button
              onClick={() => handleDelete(post.id)}
              className="bg-red-500 text-white px-2 rounded-md hover:bg-red-600
               float-right mr-[2rem] p-1"
            >
              Delete Post
            </button>
          </>
        )}
        {!post && (
          <>
            <h2>Post Not Found</h2>
            <p>Well, that's disappointing.</p>
            <p>
              <Link to="/">Visit Our Homepage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
