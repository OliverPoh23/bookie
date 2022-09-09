import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
// UI
import Typography from 'components/typography';
// Styles
import './styles.sass';

const FixedButton = ({ icon: Icon, text, zIndex, ...otherProps }) => {
  const [container] = React.useState(document.createElement('div'));
  React.useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  return (
    ReactDom.createPortal((
      <div className="fixed-button" {...otherProps} style={{ zIndex }}>
        {text.toString() && <Typography component="span" variant="p-sm" className="text-bold fixed-button__text">{text}</Typography>}
        <Icon className="fixed-button__icon" />
      </div>
    ), container)
  );
};

FixedButton.defaultProps = {
  zIndex: 100
};

FixedButton.propTypes = {
  icon: PropTypes.object,
  text: PropTypes.string,
  zIndex: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])
};

export default FixedButton;
