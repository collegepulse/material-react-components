import Grid, {GridItem} from '../../src/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from './Page.css';
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
      <Typography
        component="p"
        type="display1"
      >
        {componentName}
      </Typography>

      {description}

      {buildYourOwn && (
        <Typography
          component="p"
          type="headline"
        >
          Build your own
        </Typography>
      )}
      {buildYourOwn && (
        <div className={Styles.buildYourOwn}>
          {buildYourOwn}
        </div>
      )}
      {buildYourOwnCode && (
        <div className={Styles.buildYourOwnCode}>
          {buildYourOwnCode}
        </div>
      )}
      {buildYourOwnControlPanel && (
        <div className={Styles.buildYourOwnControlPanel}>
          <Grid gutter={24} style={{alignItems: 'center'}}>
            {/* eslint-disable react/no-array-index-key */}
            {buildYourOwnControlPanel.map((item, index) => {
              const grid = {};
              if (buildYourOwnControlPanel.length >= 2) {
                grid.sm = 6;
              }
              if (buildYourOwnControlPanel.length >= 3) {
                grid.md = 4;
              }
              return (
                <GridItem
                  key={index}
                  xs={12}
                  {...grid}
                  style={{
                    justifyContent: 'center',
                    display: 'flex'
                  }}
                >
                  {item}
                </GridItem>
              );
            })}
            {/* eslint-enable react/no-array-index-key */}
          </Grid>
        </div>
      )}
      {examples && (
        <Typography
          component="p"
          type="headline"
        >
          Examples
        </Typography>
      )}
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
  buildYourOwnControlPanel: PropTypes.arrayOf(PropTypes.node),
  examples: PropTypes.node
};

export default DocPage;
