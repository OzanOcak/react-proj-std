import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <article className="px-2 hover:bg-gray-200">
      <Link to={`/list/${post.id}`}>
        <div className="flex gap-4 py-2">
          <p className="flex items-center text-xs text-gray-500 w-[6rem]">
            {post.datetime}
          </p>

          <h2 className="text-lg">{post.title}</h2>
        </div>
        {/*<p className="">
          {post.body?.length <= 25
            ? post.body
            : `${post.body?.slice(0, 25)}...`}
          </p>*/}
      </Link>
      <hr />
    </article>
  );
};

export default Post;
