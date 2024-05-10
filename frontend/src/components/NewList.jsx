/* eslint-disable no-unused-vars */
// NewsList.jsx

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const NewsList = ({ items, filterCount }) => {
  const [filteredNews, setFilteredNews] = useState([]);

  useEffect(() => {
    // Update filtered news when filterCount changes
    setFilteredNews(items.slice(0, filterCount));
  }, [items, filterCount]);

  return (
    <div className="card-container">
      {/* Display filtered news articles in cards without text */}
      {filteredNews.map((article) => (
        <div key={article.url} className="card">
          {/* Customize the card content based on your design */}
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          {/* Add any other elements you want to include */}
        </div>
      ))}
    </div>
  );
};

NewsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      // Add any other required properties of the 'items' object
    })
  ).isRequired,
  filterCount: PropTypes.number.isRequired,
};

export default NewsList;
