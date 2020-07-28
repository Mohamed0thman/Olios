import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import ShopItems from "../shop-item/shop-item.component";
import Pagination from "../pagination/pagination.component";

import "./all-categories.styles.scss";

const AllCategories = ({ collection, match }) => {
  // setTimeout(() => console.log(collection), 2000);

  const setNumber = parseInt(match.params.number);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, SetPostsPerPage] = useState(25);

  useEffect(() => {
    const getItems = async () => {
      setLoading(true);
      const item = collection.map((collections) => collections.items);
      console.log(item);
      setPosts(item[0]);
      setLoading(false);
    };
    getItems();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;

  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <h2>loading .......</h2>;
  }

  return (
    <div className="all-categories">
      <h2 className="title">PRODUCTS</h2>
      <div>
        <div className="items">
          {currentPosts.map((item, index) => (
            <ShopItems key={item.id} item={item} />
          ))}
        </div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          pageNeighbours={1}
          paginate={paginate}
          currentPage={currentPage}
          match={match}
        />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collection: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(AllCategories);
