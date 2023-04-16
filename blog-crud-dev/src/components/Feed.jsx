import Post from "./Post";

const Feed = ({ searchResults }) => {
  return (
    <>
      {searchResults.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default Feed;
