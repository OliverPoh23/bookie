import React from 'react';
import PropTypes from 'prop-types';
// Styles
import './styles.sass';

const DataPreview = ({ content }) => {
  return (
    <div className="data-preview">
      <div className="data-preview__items">
        {content.map(({ header, body }, idx) => (
          <div className="data-preview__item" key={idx}>
            <div className="data-preview__header">{header()}</div>
            <div className="data-preview__body">{body()}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

DataPreview.propTypes = {
  content: PropTypes.arr,
};

export default DataPreview;
