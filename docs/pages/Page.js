import PropTypes from 'prop-types';
import React from 'react';
import Typography from '../../src/Typography';

function DocPage({
  componentName,
  description,
  buildYourOwn,
  buildYourOwnCode,
  buildYourOwnControlPanel,
  examples
}) {
  return (
    <div>
      <Typography component="p" type="display1">{componentName}</Typography>
      {description}
      {buildYourOwn && <Typography component="p" type="headline">Build your own</Typography>}
      {buildYourOwn && (
        <div style={{padding: '40px 100px 40px', backgroundColor: 'rgba(0, 0, 0, 0.025)'}}>
          {buildYourOwn}
        </div>
      )}
      {buildYourOwnCode && (
        <div style={{backgroundColor: 'rgba(0, 0, 0, 0.025)'}}>
          {buildYourOwnCode}
        </div>
      )}
      {buildYourOwnControlPanel && (
        <div style={{padding: '0 20px 20px', backgroundColor: 'rgba(0, 0, 0, 0.025)'}}>
          {buildYourOwnControlPanel}
        </div>
      )}
      {examples && <Typography component="p" type="headline">Examples</Typography>}
      {examples}
    </div>
  );
}

DocPage.defaultProps = {
  componentName: null,
  description: null,
  buildYourOwn: null,
  buildYourOwnCode: null,
  buildYourOwnControlPanel: null,
  examples: null
};

DocPage.propTypes = {
  componentName: PropTypes.node,
  description: PropTypes.node,
  buildYourOwn: PropTypes.node,
  buildYourOwnCode: PropTypes.node,
  buildYourOwnControlPanel: PropTypes.node,
  examples: PropTypes.node
};

export default DocPage;
