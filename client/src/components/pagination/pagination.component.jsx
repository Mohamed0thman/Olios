import React from "react";
import { Link } from "react-router-dom";

import "./pagination.styles.scss";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="Pagination ">
        {pageNumbers.map((number) => (
          <li
            className="page-item"
            key={number}
            onClick={() => {
              paginate(number);
            }}
          >
            <Link className="number" to="#!">
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;
