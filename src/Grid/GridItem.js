import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './GridItem.css';

class GridItem extends React.Component {
  render() {
    const {children, className, xs, sm, md, lg} = this.props;
    const classes = makeClass(
      Styles.root,
      Styles[`xs-${xs}`],
      Styles[`sm-${sm}`],
      Styles[`md-${md}`],
      Styles[`lg-${lg}`]
    );
    return (
      <div className={makeClass(className, classes)}>
        {children}
      </div>
    );
  }
}

GridItem.defaultProps = {
  children: null,
  className: null,
  xs: 0,
  sm: 0,
  md: 0,
  lg: 0
};

GridItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number
};

export default GridItem;
