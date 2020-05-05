import React  from 'react';
import Container from '@material-ui/core/Container';

export default class Space extends React.Component {
  render() {
    return (
      <Container fixed style={{ backgroundColor: 'transparent'}}  height={400} >
        <br/><br /><br />
      </Container>
    );
  }
}