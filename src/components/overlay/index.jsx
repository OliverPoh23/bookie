import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
// Styles
import './styles.sass';

const Overlay = ({ isActive, className, zIndex, inlined, ...otherProps }) => {
  const [container] = React.useState(document.createElement('div'));
  const overlayRef = React.createRef(null);

  React.useEffect(() => {
    if (!inlined && isActive) {
      document.body.appendChild(container);
    }
  }, [container, isActive]);

  const classes = classNames({
    'overlay': true,
    [className]: className
  });

  const overlay = (
    <CSSTransition nodeRef={overlayRef} in={isActive} timeout={300} onExited={() => !inlined && document.body.removeChild(container)} classNames="overlay-animation" unmountOnExit={inlined}>
      <div ref={overlayRef} className={classes} style={{ zIndex }}  {...otherProps} />
    </CSSTransition>
  );

  if (inlined) {
    return overlay;
  }

  return ReactDOM.createPortal(overlay, container);
};

Overlay.defaultProps = {
  zIndex: 100
};

Overlay.propTypes = {
  isActive: PropTypes.bool,
  inlined: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  zIndex: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])
};

export default Overlay;
