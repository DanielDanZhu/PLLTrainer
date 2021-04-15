import React, { Component }from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import TimesListItem from './TimesListItem.js'
import {TimesEx} from './TimesEx.js'

class TimesList extends React.Component {
  render() {
    return (
      <List>
        <ListItemText primary={<Typography>Aa</Typography>}
                    secondary={<Typography>hello</Typography>}  />
      </List>
    );
  }
}

export default TimesList
