import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
// Styles
import './styles.sass';

const Alert = ({ type, children, isActive, onClose, className }) => {
  const [container] = React.useState(document.createElement('div'));
  const alertRef = React.createRef(null);

  React.useEffect(() => {
    if (isActive) {
      document.body.appendChild(container);
      const timeout = setTimeout(onClose, 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isActive, container, onClose]);

  const classes = classNames({
    'alert': true,
    'alert--success': type === 'success',
    [className]: className,
  });

  return ReactDOM.createPortal((
    <CSSTransition nodeRef={alertRef} in={isActive} timeout={300} onExited={() => document.body.removeChild(container)} classNames="alert-animation" >
      <div className={classes} ref={alertRef}>
        {children}
      </div>
    </CSSTransition>
  ), container);
};

Alert.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  onClose: PropTypes.func
};

export default Alert;
