import React from 'react';
import PropTypes from 'prop-types';
// UI
import Button from 'components/button';
// Styles
import './styles.sass';

const UploadButton = ({ onChange, text }) => {
  return (
    <Button variant="primary" size="xs" className="upload-button">
      {text}
      <input type="file" accept="image/*" onChange={onChange} className="upload-button__input" />
    </Button>
  );
};

UploadButton.propTypes = {
  onChange: PropTypes.func,
  text: PropTypes.string,
};

export default UploadButton;
