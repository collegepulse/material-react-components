import Grid, {GridItem} from '../../../src/Grid';
import Page from '../Page';
import Paper from '../../../src/Paper';
import React from 'react';
import Typography from '../../../src/Typography';

class GridDocs extends React.Component {
  render() {
    return (
      <Page
        componentName="Grid"
        examples={
          <div>
            <Typography component="p">
              <Typography component="span" type="body2">Full-width </Typography>
              grids use fluid columns.
            </Typography>
            <Grid margin={40} gutter={8}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
                <GridItem xs={12} sm={6} md={4} lg={3} key={item}>
                  <Paper
                    elevation={5}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '100px'
                    }}
                  >
                    xs=12, sm=6, md=4, lg=3
                  </Paper>
                </GridItem>
              ))}
            </Grid>
            <Typography component="p">
              <Typography component="span" type="body2">Centered </Typography>
              grids use fixed columns.
            </Typography>
            <Grid margin={40} gutter={8} style={{marginTop: '10px'}}>
              {[1, 2, 3, 4, 5, 6, 7].map((item) => {
                let xs;
                if (item === 1) {
                  xs = 12;
                } else if (item === 2 || item === 3) {
                  xs = 6;
                } else {
                  xs = 3;
                }
                return (
                  <GridItem xs={xs} key={item}>
                    <Paper
                      elevation={5}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100px'
                      }}
                    >
                      {`xs=${xs}`}
                    </Paper>
                  </GridItem>
                );
              })}
            </Grid>
          </div>
        }
      />
    );
  }
}

export default GridDocs;
