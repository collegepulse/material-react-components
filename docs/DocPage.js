import PropTypes from 'prop-types';
import React from 'react';
import Typography from '../src/Typography';

function DocPage({
  componentName,
  buildYourOwn,
  buildYourOwnCode,
  buildYourOwnControlPanel,
  examples
}) {
  return (
    <div>
      <Typography component="p" type="display1">{componentName}</Typography>
      <Typography component="p" type="headline">Build your own</Typography>
      <div style={{padding: '40px 100px 40px', backgroundColor: 'rgba(0, 0, 0, 0.025)'}}>
        {buildYourOwn}
      </div>
      <div style={{backgroundColor: 'rgba(0, 0, 0, 0.025)'}}>
        {buildYourOwnCode}
      </div>
      <div style={{padding: '0 20px 20px', backgroundColor: 'rgba(0, 0, 0, 0.025)'}}>
        {buildYourOwnControlPanel}
      </div>
      {examples && <Typography component="p" type="headline">More Examples</Typography>}
      {examples}
    </div>
  );
}

DocPage.defaultProps = {
  componentName: null,
  buildYourOwn: null,
  buildYourOwnCode: null,
  buildYourOwnControlPanel: null,
  examples: null
};

DocPage.propTypes = {
  componentName: PropTypes.node,
  buildYourOwn: PropTypes.node,
  buildYourOwnCode: PropTypes.node,
  buildYourOwnControlPanel: PropTypes.node,
  examples: PropTypes.node
};

export default DocPage;
