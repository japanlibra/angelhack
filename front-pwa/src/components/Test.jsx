import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

// component
export class Test extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <article>
        <section>
          <Button
            color="primary"
            variant="contained"
            onClick={this.props.loadTest}
          >
            Hello
          </Button>
          <Button
            onClick={() => {
              console.log(this.props);
            }}
          >
            Hello
          </Button>
        </section>
      </article>
    );
  }
}

import * as action from '../modules/test';

// container
export default connect(
  state => state,
  dispatch => ({
    loadTest: () => {
      dispatch(action.loadTest());
    }
  })
)(Test);
