/* eslint-disable react/prop-types */
import React from 'react';

export const PaginationButtons = (props) => {
  const { totalNumberOfPages, currentPage, setCurrentPage } = props;

  let pageButtons = [];
  for (let i = 1; i <= totalNumberOfPages; i += 1) {
    let pageNumber = i === currentPage ? <b>{i}</b> : { i };
    pageButtons.push(
      <button onClick={setCurrentPage} value={pageNumber} key={i}>
        {pageNumber}
      </button>
    );
  }

  return <div>{pageButtons}</div>;
};
