import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button';
import Typography from '../Typography';
import Styles from './ListItem.css';

class ListItem extends React.Component {
  registerButton = c => {
    this.Button = c;
  }

  render() {
    const {
      action, buttonProps, avatar, className, primary, secondary, ...other
    } = this.props;
    return (
      <div {...other} className={makeClass(Styles.root, className)}>
        <Button
          {...buttonProps}
          ref={this.registerButton}
          className={Styles.button}
        >
          {avatar && (
            <div className={Styles.avatar}>
              {React.cloneElement(avatar, {focusable: 'false'})}
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
  buttonProps: {},
  className: null,
  primary: null,
  secondary: null
};

ListItem.propTypes = {
  action: PropTypes.node,
  avatar: PropTypes.node,
  buttonProps: PropTypes.object,
  className: PropTypes.string,
  primary: PropTypes.node,
  secondary: PropTypes.node
};

export default ListItem;
