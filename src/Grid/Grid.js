import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './Grid.css';

class Grid extends React.Component {
  render() {
    const {
      children, className, margin, gutter, ...other
    } = this.props;

    const rootClasses = makeClass(
      Styles.root,
      Styles[`margin-${margin}`],
      className
    );

    const gutterClasses = makeClass(
      Styles.gutter,
      Styles[`gutter-${gutter}`]
    );

    return (
      <div className={rootClasses}>
        <div className={gutterClasses} {...other}>
          {children}
        </div>
      </div>
    );
  }
}

Grid.defaultProps = {
  children: null,
  className: null,
  gutter: 0,
  margin: 0
};

Grid.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  gutter: PropTypes.oneOf([0, 8, 16, 24, 40]),
  margin: PropTypes.oneOf([0, 8, 16, 24, 40])
};

export default Grid;
