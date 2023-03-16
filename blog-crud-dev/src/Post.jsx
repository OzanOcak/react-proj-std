import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <article className="px-2 hover:bg-gray-200">
      <Link to={`/post/${post.id}`}>
        <div className="flex justify-between">
          <h2>{post.title}</h2>
          <p className="postDate">{post.datetime}</p>
        </div>
        <p className="">
          {post.body.length <= 25 ? post.body : `${post.body.slice(0, 25)}...`}
        </p>
      </Link>
      <hr />
    </article>
  );
};

export default Post;
