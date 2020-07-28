import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Link from './Sub-components/Link-Cnb';
import Box from '@material-ui/core/Box';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(name) {
  const classes = useStyles();
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Ryan's Company
            </Typography>
             <div>
              <Box display="flex" alignItems="center">
                <Box mx={1}>
                  <Link name="Feature" />
                </Box>
                <Box mx={1}>
                  <Link name="Enterprise" />
                </Box>
                <Box mx={1}>
                  <Link name="Support" />
                </Box>
                  <Button variant="outlined" color="primary" href="#">Login</Button>
              </Box>
             </div>
          </Toolbar>
        </AppBar>
      </div>
    );
}