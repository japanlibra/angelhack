import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export class LibraTest extends React.Component {
  render() {
    return (
      <article>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Jibra</Typography>
          </Toolbar>
        </AppBar>

        <section></section>
      </article>
    );
  }
}

export default LibraTest;
