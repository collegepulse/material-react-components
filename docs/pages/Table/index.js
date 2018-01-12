import Grid, {GridItem} from '../../../src/Grid';
import Page from '../Page';
import Paper from '../../../src/Paper';
import React from 'react';
import Table, {TableBody, TableCell, TableHead, TableRow} from '../../../src/Table';
import Typography from '../../../src/Typography';

class TabsDocs extends React.Component {
  render() {
    return (
      <Page
        componentName="Table"
        examples={
          <Grid gutter={16}>
            <GridItem xs={12}>
              <Typography component="p">
                Simple table.
              </Typography>
              <Paper elevation={3}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Age</TableCell>
                      <TableCell>Street Address</TableCell>
                      <TableCell>ZIP Code</TableCell>
                      <TableCell>State</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Johnathan Doe</TableCell>
                      <TableCell>25</TableCell>
                      <TableCell>700 1st Ave</TableCell>
                      <TableCell>90210</TableCell>
                      <TableCell>CA</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jane Doe</TableCell>
                      <TableCell>23</TableCell>
                      <TableCell>15 Spruce St</TableCell>
                      <TableCell>92101</TableCell>
                      <TableCell>CA</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Paper>
            </GridItem>
          </Grid>
        }
      />
    );
  }
}

export default TabsDocs;
