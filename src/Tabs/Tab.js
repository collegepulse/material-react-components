import Button from '../../src/Button';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './Tab.css';

class Tab extends React.Component {
  render() {
    const {label, ...other} = this.props;
    return (
      <Button {...other} className={Styles.tab}>
        {label}
      </Button>
    );
  }
}

Tab.defaultProps = {
  domRef: () => {},
  label: null
};

Tab.propTypes = {
  domRef: PropTypes.func,
  label: PropTypes.string
};

export default Tab;
