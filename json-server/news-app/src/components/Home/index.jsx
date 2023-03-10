import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { latestNews, otherNews } from "../../store/actions";
import LatestNews from "./LatestNews";
import OtherNews from "./OtherNews";

function Home() {
  const state = useSelector((state) => ({ ...state }));
  console.log("state", state);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(latestNews());
    dispatch(otherNews());
  }, []);
  return (
    <div>
      <LatestNews latest={state.articles.latestNews} />
      <OtherNews otherNews={state.articles.otherNews} />
    </div>
  );
}

export default Home;
