import { useState } from "react";
import Post from "./Post";
import Pagination from "./Pagination";

const Feed = ({ searchResults }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = searchResults.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="flex flex-col gap-4 h-[60vh]">
      <div className="flex-grow">
        {currentPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      <Pagination
        totalPosts={searchResults.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Feed;
