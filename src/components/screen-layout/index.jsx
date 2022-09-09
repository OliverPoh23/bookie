import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// UI
import Container from 'components/container';
// Styles
import './styles.sass';

const ScreenLayout = ({ children, className }) => {
  const classes = classNames({
    'screen-layout': true,
    [className]: className
  });

  return (
    <div className={classes}>
      <Container className="screen-layout__container">
        {children}
      </Container>
    </div>
  );
};

ScreenLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ScreenLayout;
