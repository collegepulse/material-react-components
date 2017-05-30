import Button from '../Button';
import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './ListItem.css';
import Typography from '../Typography';

function ListItem({action, avatar, className, primary, secondary, ...other}) {
  return (
    <div className={Styles.root}>
      <Button {...other} className={makeClass(Styles.button, className)}>
        {avatar && (
          <div className={Styles.avatar}>
            {avatar}
          </div>
        )}
        <div
          className={makeClass(Styles.text, {
            [Styles.textWithAvatarOrAction]: avatar || action
          })}
        >
          <Typography type="subheading">{primary}</Typography>
          {secondary && (
            <Typography type="body1">{secondary}</Typography>
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
