import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// UI
import Spinner from 'components/spinner';
import ErrorIndicator from 'components/error-indicator';
// Styles
import './index.sass';

const Table = ({ content, loading, data, error, retry, equal, bordered }) => {
  const columns = content.length;
  const classnames = classNames({
    'table': true,
    'table--bordered': bordered,
  });
  const equalWidth = equal && { width: `${100 / columns}%` };

  return (
    <div className={classnames}>
      <table className="table__table">
        <thead className="table__head">
          <tr>
            {content.map(({ title, styles }, idx) => (
              <th key={idx} style={{ ...equalWidth, ...styles }}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody className="table__body">
          {error &&
            <tr>
              <th colSpan={columns}>
                <ErrorIndicator retry={retry} />
              </th>
            </tr>
          }
          {loading &&
            <tr>
              <th colSpan={columns}>
                <Spinner boxed light />
              </th>
            </tr>
          }
          {data && data.map((item, idx) => (
            <tr key={idx}>
              {content.map(({ render, styles }, tdIdx) => (
                <td key={tdIdx} style={styles}>{render(item, idx)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  content: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  data: PropTypes.array,
  retry: PropTypes.func,
  equal: PropTypes.bool,
  bordered: PropTypes.bool,
};

export default Table;
