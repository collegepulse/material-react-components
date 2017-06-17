import Button from '../Button';
import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './ListItem.css';
import Typography from '../Typography';

class ListItem extends React.Component {
  render() {
    const {action, avatar, className, primary, secondary, ...other} = this.props;
    return (
      <div className={Styles.root}>
        <Button
          {...other}
          className={makeClass(Styles.button, className)}
          ref={c => (this.Button = c)}
        >
          {avatar && (
            <div className={Styles.avatar}>
              {React.cloneElement(avatar, {focusable: false})}
            </div>
          )}
          <div
            className={makeClass(Styles.text, {
              [Styles.textWithAvatarOrAction]: avatar || action
            })}
          >
            {primary && (
              <Typography
                className={makeClass(Styles.primary, Styles.primaryText)}
                type="subheading"
              >
                {primary}
              </Typography>
            )}
            {secondary && (
              <Typography
                className={makeClass(Styles.secondary, Styles.secondaryText)}
                type="body1"
              >
                {secondary}
              </Typography>
            )}
          </div>
        </Button>
        {action && (
          <div className={Styles.action}>
            {action}
          </div>
        )}
      </div>
    );
  }
}

ListItem.defaultProps = {
  action: null,
  avatar: null,
  className: null,
  primary: null,
  secondary: null
};

ListItem.propTypes = {
  action: PropTypes.node,
  avatar: PropTypes.node,
  className: PropTypes.string,
  primary: PropTypes.node,
  secondary: PropTypes.node
};

export default ListItem;
