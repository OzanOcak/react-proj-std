import React from "react";
import { Link } from "react-router-dom";

const showLatest = ({ latest }) => {
  return (
    <>
      {latest
        ? latest.map((item) => (
            <Link to={`/article/${item.id}`} key={item.id} className="item">
              <div
                className="image_cover"
                style={{ background: `url(/images/articles/${item.img})` }}
              >
                <div className="description">
                  <span>{item.category}</span>
                  <span>{item.title}</span>
                </div>
              </div>
            </Link>
          ))
        : null}
    </>
  );
};
const LatestNews = (props) => {
  return <div className="home-latest">{showLatest(props)}</div>;
};

export default LatestNews;
