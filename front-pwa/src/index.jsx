import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
// import { ThemeProvider } from '@material-ui/styles';
import { ThemeProvider, createTheme } from 'arwes';

import ArwesTest from './components/ArwesTest.jsx';
import LibraTest from './components/LibraTest.jsx';
import Test from './components/Test.jsx';
import store from './modules/store';
import { Arwes } from 'arwes';
// import { theme } from './styles';
const theme = createTheme();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Arwes>
            <Router>
              <Switch>
                <Route path="/" component={ArwesTest} />
                <Route path="/libra-test" component={LibraTest} />
                <Route path="/test" component={Test} />
                <Redirect to="/test" />
              </Switch>
            </Router>
          </Arwes>
        </ThemeProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
