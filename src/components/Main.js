import React  from 'react';
import { HashRouter, Route } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import Home from '../pages/Home'

export default class Main extends React.Component {
  render() {
    return (
      <Container fixed style={{ backgroundColor: 'transparent'}} >
        <HashRouter>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/second' component={Second} />
          <Route path='/third' component={Third} />
        </HashRouter>
      </Container>
    );
  }
}

const Second = () => (
  <div>
    <h2>Second</h2>
    <p>二番目のページです</p>
  </div>
)
const Third = () => (
  <div>
    <h2>Third</h2>
    <p>三番目のページです</p>
  </div>
)