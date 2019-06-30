import { createMuiTheme } from '@material-ui/core/styles';
// import { cyan, grey } from '@material-ui/core/colors';

const theme = createMuiTheme({});

const arwes = {
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 2rem 0 2rem'
  },
  content: {
    padding: '2rem'
  },
  section: {
    padding: '2rem 0 0 0'
  },
  input: {
    background: 'rgba(255, 255, 255, 0)',
    color: 'rgb(162, 238, 253)',
    border: 0,
    fontSize: '1.5rem',
    width: '100%'
  },
  transferButton: {
    width: '100%',
    textAlign: 'center',
    fontSize: '2rem'
  },
  footer: {
    position: 'fixed',
    width: '100vw',
    bottom: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0 2rem 1rem 2rem'
  }
};

export default { theme, arwes };
