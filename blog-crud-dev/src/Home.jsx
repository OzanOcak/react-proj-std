import Feed from "./Feed";

const Home = ({ posts }) => {
  return (
    <main className="w-screen px-[4rem] my-4">
      {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p style={{ marginTop: "2rem" }}>No posts to display.</p>
      )}
    </main>
  );
};

export default Home;
