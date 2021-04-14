import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Stopwatch from './Stopwatch.js';
import AlgSet from './AlgSet.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        PLL trainer
      </header>
      <div className='body'>
          <Grid container spacing={6} justify='center'>
            <Grid item lg={3}>
              <AlgSet />
            </Grid>
            <Grid item lg={3} style={{minWidth:'250px'}}>
              <Stopwatch />
            </Grid>
            <Grid item lg={3}>
              <Paper className={classes.paper}>xs=12 sm=6</Paper>
            </Grid>
          </Grid>
      </div>
    </div>
  );
}
