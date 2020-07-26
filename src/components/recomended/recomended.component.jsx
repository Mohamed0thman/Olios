import React, { useState, useEffect } from "react";

import RecomendedItem from "../recomended-item/recomended-item.component";

import "./recomended.styles.scss";

const Recomended = ({ items }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, SetPostsPerPage] = useState(3);
  const [result, setResult] = useState(items.length);
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


  //   const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <h2>loading .......</h2>;
  }

  const renderArrow = () => {
    let arrow;
    if (currentPage === 1 && pages > 1) {
      arrow = "<";
    } else if (currentPage < pages) {
      arrow = "<";
      arrow = ">";
    } else if (currentPage === pages && pages > 1) {
      arrow = ">";
    }
    return arrow;
  };

  return (
    <div className="recomended">
      <span
        className="arrow "
        onClick={() => {
          setCurrentPage(currentPage - 1);
        }}
      >
        {currentPage === pages && pages > 1
          ? "<"
          : currentPage < pages && currentPage !== 1
          ? "<"
          : null}

        {/* {currentPosts.length === 3 ? "<" : null}
        &larr; */}
      </span>
      <div className="list">
        {currentPosts.map((item) => (
          <RecomendedItem key={item.id} items={item} />
        ))}
      </div>
      <span
        className="arrow"
        onClick={() => {
          setCurrentPage(currentPage + 1);
        }}
      >
        {(currentPage === 1 && pages > 1) || currentPage < pages ? ">" : null}

        {/* {currentPosts.length < 3 ? ">" : null}
        &rarr; */}
      </span>
    </div>
  );
};
export default Recomended;
