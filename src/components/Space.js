import React  from 'react';
import {Box,Typography} from '@material-ui/core';

export default class Space extends React.Component {
  render() {
    return (
      <Box p={2} style={{ backgroundColor: 'transparent'}}>
        <Typography style={{ height: this.props.spaceSize }} />
      </Box>
    );
  }
}