import { useContext } from "react";
import Feed from "../components/Feed";
import DataContext from "../context/DataContext";

const Home = () => {
  const { searchResults, fetchError, isLoading } = useContext(DataContext);
  return (
    <main className="w-screen px-[1rem] sm:px-[4rem] my-4">
      {isLoading && <p className="statusMsg">Loading posts...</p>}
      {!isLoading && fetchError && (
        <p className="flex justify-center" style={{ color: "red" }}>
          {fetchError}
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        (searchResults?.length ? (
          <Feed searchResults={searchResults} />
        ) : (
          <p style={{ marginTop: "2rem" }}>No posts to display.</p>
        ))}
    </main>
  );
};

export default Home;
