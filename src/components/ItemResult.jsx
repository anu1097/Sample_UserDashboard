/* eslint-disable react/prop-types */
import React from 'react';

const outerDivStyle = {
  margin: '0.5em',
  padding: '0.25em',
};
export const ItemResult = (props) => {
  const { link, title, snippet, pagemap } = props;

  let cse_thumbnail;
  if (pagemap) {
    cse_thumbnail = pagemap.cse_thumbnail;
  }
  let thumbNailImg;
  if (cse_thumbnail && cse_thumbnail[0]) {
    thumbNailImg = cse_thumbnail[0].src;
  }

  return (
    <div style={outerDivStyle}>
      <div>
        <img src={thumbNailImg} />
      </div>
      <div>
        <h4>{link}</h4>
        <h3>{title}</h3>
        <p>{snippet}</p>
      </div>
    </div>
  );
};
