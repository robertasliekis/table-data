import React from "react";

function Pagination({ pageCount, activePage, onActivePageChange }) {
  return (
    <div className="pagination-container">
      <div className="btn btn-first-page" onClick={() => onActivePageChange(1)}>
        First
      </div>
      <div
        className="btn btn-previous-page"
        onClick={() => activePage > 1 && onActivePageChange(activePage - 1)}
      >
        Prev
      </div>
      <div className="current-page">{`${activePage}/${pageCount}`}</div>
      <div
        className="btn btn-next-page"
        onClick={() =>
          activePage < pageCount && onActivePageChange(activePage + 1)
        }
      >
        Next
      </div>
      <div
        className="btn btn-last-page"
        onClick={() => onActivePageChange(pageCount)}
      >
        Last
      </div>
    </div>
  );
}

export default Pagination;
