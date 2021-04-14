import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


import Aa from "./assets/Aa.png"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
}));

export default function AlgSet() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
    <ListItem>
      <ListItemAvatar>
        <Avatar style={{ height: '100px', width: '100px' }} alt="Aa" src={Aa} />
      </ListItemAvatar>
      <ListItemText primary={<Typography style={{ color: 'gray' }}>x L2 D2 L' U' L D2 L' U L'</Typography>}
                    secondary={<Typography style={{ color: 'gray' }}>Aa</Typography>}  />
    </ListItem>
    <ListItem>
      <ListItemAvatar>
        <Avatar alt="Aa" src="./Aa.png"/>
      </ListItemAvatar>
      <ListItemText primary="Work" secondary="Jan 7, 2014" />
    </ListItem>
    <ListItem>
      <ListItemAvatar>

      </ListItemAvatar>
      <ListItemText primary="Vacation" secondary="July 20, 2014" />
    </ListItem>
  </List>
  );
}
