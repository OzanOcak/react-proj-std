import Feed from "./Feed";

const Home = ({ posts, fetchError, isLoading }) => {
  return (
    <main className="w-screen px-[4rem] my-4">
      {isLoading && <p className="statusMsg">Loading posts...</p>}
      {!isLoading && fetchError && (
        <p className="flex justify-center" style={{ color: "red" }}>
          {fetchError}
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        (posts.length ? (
          <Feed posts={posts} />
        ) : (
          <p style={{ marginTop: "2rem" }}>No posts to display.</p>
        ))}
    </main>
  );
};

export default Home;
