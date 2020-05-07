import React  from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

export default class Space extends React.Component {
  render() {
    return (
      <Container fixed style={{ backgroundColor: 'transparent'}}>
        <Typography style={{ height: this.props.spaceSize }} />
      </Container>
    );
  }
}