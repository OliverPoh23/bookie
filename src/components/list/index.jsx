import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// UI
import Typography from 'components/typography';
// Helpers
import { handleAccessibilityKeyPress } from 'utils/helpers';
// Styles
import './styles.sass';

const List = ({ header, items, handleSelect, alt, blocked, selected }) => {
  const classnames = classNames({
    'list': true,
    'list--alt': alt,
    'list--blocked': blocked,
  });

  const isActive = currentId => selected.some(({ id }) => id === currentId);
  const handleClick = id => e => {
    handleSelect(id);
    e.currentTarget.blur();
  };
  const handleKeyPress = id => e => handleAccessibilityKeyPress(e, handleSelect.bind(null, id));

  return (
    <div className={classnames}>
      <Typography component="h6" className="list__header">{header}</Typography>
      <div className="list__items">
        {items.map(({ id, game, price }) => (
          <div key={id} className={`list__item ${isActive(id) ? 'is-active' : ''}`} onClick={handleClick(id)} onKeyPress={handleKeyPress(id)} tabIndex="0">
            <Typography component="span" variant="p-sm" className="text-medium list__item-game">{game}</Typography>
            <Typography component="span" variant="h6">{price}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

List.propTypes = {
  header: PropTypes.string,
  items: PropTypes.array,
  handleSelect: PropTypes.func,
  alt: PropTypes.bool,
  blocked: PropTypes.bool,
  selected: PropTypes.array,
};

export default List;
