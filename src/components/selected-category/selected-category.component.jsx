import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import ShopItems from "../shop-item/shop-item.component";
import Pagination from "../pagination/pagination.component";

import "./selected-category.styles.scss";

const SelectedCategory = ({ match, collection }) => {
  // const setNumber = parseInt(match.params.number);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, SetPostsPerPage] = useState(8);

  // // const items = collection.map((collections) =>
  // //   collections.items.filter((item) => item.url === match.params.collectionType)
  // // );
  // console.log(items);

  useEffect(() => {
    const getItems = async () => {
      setLoading(true);
      const items = collection.map((collections) =>
        collections.items.filter(
          (item) => item.url === match.params.collectionType
        )
      );
      setPosts(items[0]);
      setLoading(false);
    };
    getItems();
  }, [match.params.collectionType]);

  const indexOfLastPost = currentPage * postsPerPage;

  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <h2>loading .......</h2>;
  }

  return (
    <div className="selected-category">
      <div className="header">
        <h2 className="title">PRODUCTS</h2>
        <div className="right">
          <span className="type">{match.params.collectionType}</span>
          <span className={`icon-${match.params.collectionType} icon`}></span>
        </div>
      </div>
      <div>
        <div className="items">
          {currentPosts.map((item) => (
            <ShopItems key={item.id} item={item} />
          ))}
        </div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
          link={match}
        />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collection: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(SelectedCategory);
