import React, { useState, useEffect } from "react";

import RecomendedItem from "../recomended-item/recomended-item.component";

import "./recomended.styles.scss";

const Recomended = ({ items }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const [result] = useState(items.length);
  useEffect(() => {
    const getItems = async () => {
      setLoading(true);
      const item = items.map((item) => item);
      setPosts(item);
      setLoading(false);
    };
    getItems();
  }, []);
  const indexOfLastPost = currentPage * postsPerPage;

  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const pages = Math.ceil(result / postsPerPage);

  if (loading) {
    return <h2>loading .......</h2>;
  }

  return (
    <div className="recomended">
      <span
        className={`arrow  ${
          currentPage === pages && pages > 1
            ? "icon-arrow-outline-left "
            : currentPage < pages && currentPage !== 1
            ? "icon-arrow-outline-left "
            : null
        }`}
        onClick={() => {
          setCurrentPage(currentPage - 1);
        }}
      ></span>
      <div className="list">
        {currentPosts.map((item) => (
          <RecomendedItem
            key={item.id}
            items={item}
            onClick={window.scrollTo(0, 0)}
          />
        ))}
      </div>
      <span
        className={` arrow ${
          (currentPage === 1 && pages > 1) || currentPage < pages
            ? "icon-arrow-outline-right"
            : null
        }`}
        onClick={() => {
          setCurrentPage(currentPage + 1);
        }}
      ></span>
    </div>
  );
};
export default Recomended;
