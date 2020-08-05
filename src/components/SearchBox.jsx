import React, { useState } from 'react';
import * as axios from 'axios';
import { ItemResult } from './ItemResult';
import { PaginationButtons } from './PaginationButtons';

const SearchBoxStyle = {
  padding: '0.1em',
  margin: '0.25em',
};

export const SearchBox = () => {
  const [result, setResult] = useState({});
  const [userinput, setUserInput] = useState('');
  const [totalResults, setTotalResults] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const onChangeHandler = (e) => {
    const input = e.target.value;
    const apiWithQuery = `https://www.googleapis.com/customsearch/v1?key=AIzaSyCdAyM0BPNci5bzTAuRzDVkYLSvCPLKECI&cx=018264299595958242005:dvs2adlrsca&q=${input}`;
    apiCall(apiWithQuery);
    setUserInput(input);
  };
  const perPageResults = 10;

  const ItemResultsList = [];
  if (currentItems) {
    currentItems.forEach((item) => {
      ItemResultsList.push(<ItemResult {...item} />);
    });
  }

  const setUserChosenPage = (e) => {
    const pageNumber = e.target.value;
    const startQueryParam = pageNumber * perPageResults + 1;
    const apiWithQuery = `https://www.googleapis.com/customsearch/v1?key=AIzaSyCdAyM0BPNci5bzTAuRzDVkYLSvCPLKECI&cx=018264299595958242005:dvs2adlrsca&q=${userinput}&start=${startQueryParam}`;
    apiCall(apiWithQuery);
    setCurrentPage(pageNumber);
  };

  const apiCall = (apiWithQuery) => {
    axios
      .get(apiWithQuery)
      .then((res) => {
        console.log(res);
        setResult(res.data);
        setTotalResults(res.data.queries.request[0].totalResults);
        setCurrentPage(1);
        setCurrentItems(res.data.items);
      })
      .catch((err) => {
        console.error({ err });
      });
  };

  return (
    <div style={SearchBoxStyle}>
      <input style={SearchBoxStyle} type="text" onChange={onChangeHandler} />
      {ItemResultsList}
      <PaginationButtons
        totalNumberOfPages={totalResults / perPageResults}
        currentPage={currentPage}
        setCurrentPage={setUserChosenPage}
      />
    </div>
  );
};
