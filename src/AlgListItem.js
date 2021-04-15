import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { algData } from './algData.js';

const useStyles = makeStyles((theme) => ({
  primary: {
    fontSize: 30,
    color: '#e4609b',
    fontFamily: ['Montserrat'],
  },
  secondary: {
    fontSize: 17,
    fontFamily: ['Montserrat'],
  },
  avatar: {
    height: '100px',
    width: '100px',
  },
}));

export default function AlgListItem(props) {
  const classes = useStyles();

  return (
    <ListItem button>
      <ListItemAvatar>
        <Avatar className={classes.avatar} alt={props.name} src={algData[props.name].src} />
      </ListItemAvatar>
      <ListItemText primary={<Typography className={classes.primary}>{props.name}</Typography>}
                    secondary={<Typography className={classes.secondary}>{algData[props.name].alg}</Typography>}  />
    </ListItem>
  )
}
