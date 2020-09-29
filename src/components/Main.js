import React  from 'react';
import { HashRouter, Route } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import Home from '../pages/Home'
import Problems from '../pages/Problems'
import Papers from '../pages/Papers'

export default class Main extends React.Component {
  render() {
    return (
      <Container fixed style={{ backgroundColor: 'transparent'}} >
        <HashRouter>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/problems' component={Problems} />
          <Route path='/papers' component={Papers} />
        </HashRouter>
      </Container>
    );
  }
}
