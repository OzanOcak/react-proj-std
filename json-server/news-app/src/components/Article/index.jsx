import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  clearArticleData,
  getArticleData,
  handleLikesArticle,
} from "../../store/actions";
import LikeCounter from "./Likes";

const Article = () => {
  let dispatch = useDispatch();
  const state = useSelector((state) => ({ ...state }));
  let { id } = useParams();
  console.log("id", id);
  console.log("state", state);

  useEffect(() => {
    dispatch(getArticleData(id));
    return () => dispatch(clearArticleData());
  }, []);

  const addLike = (action) => {
    const data = state.articles.articleData[0];
    console.log("data:", data);
    const likes = data.likes[0];
    const dislikes = data.likes[1];

    const newLikes =
      action === "ADD" ? [likes + 1, dislikes] : [likes, dislikes + 1];
    dispatch(handleLikesArticle(newLikes, id));
  };

  const renderOtherNews = ({ articleData, id }) => {
    console.log(articleData);
    return (
      <>
        {articleData ? (
          <div>
            <div className="tags">
              <span>
                <i className="fa fa-eye" />
                {articleData[0].views}
              </span>
              <span>
                <i className="fa fa-thumbs-up" />
                {articleData[0].likes[0]}
              </span>
              <span>
                <i className="fa fa-thumbs-down" />
                {articleData[0].likes[1]}
              </span>
            </div>
            <div className="top">
              <h2>{articleData[0].title}</h2>
              <span>
                Article by:<strong>{articleData[0].author}</strong>
              </span>
            </div>
            <img
              alt={articleData[0].title}
              src={`/images/articles/${articleData[0].img}`}
            />
            <div className="body_news">{articleData[0].body}</div>
            <div>
              <LikeCounter
                addLike={(args) => addLike(args)}
                likes={articleData[0].likes[0]}
                dislikes={articleData[0].likes[1]}
              />
            </div>
          </div>
        ) : null}
      </>
    );
  };

  return (
    <div className="news_container">{renderOtherNews(state.articles)}</div>
  );
};

export default Article;
