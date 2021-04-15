import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import AlgListItem from './AlgListItem.js'

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
    <AlgListItem name='Aa'/>
    <AlgListItem name='Ab'/>
    <AlgListItem name='F'/>
    <AlgListItem name='Ga'/>
    <AlgListItem name='Gb'/>
    <AlgListItem name='Gc'/>
    <AlgListItem name='Gd'/>
    <AlgListItem name='Ja'/>
    <AlgListItem name='Jb'/>
    <AlgListItem name='Ra'/>
    <AlgListItem name='Rb'/>
    <AlgListItem name='T'/>
    <AlgListItem name='E'/>
    <AlgListItem name='Na'/>
    <AlgListItem name='Nb'/>
    <AlgListItem name='V'/>
    <AlgListItem name='Y'/>
    <AlgListItem name='H'/>
    <AlgListItem name='Ua'/>
    <AlgListItem name='Ub'/>
    <AlgListItem name='Z'/>
  </List>
  );
}
