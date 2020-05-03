import React  from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Header from "./js/components/Header";
import Footer from "./js/components/Footer";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
          <Route exact path='/' component={Index} />
          <Route path='/second' component={Second} />
          <Route path='/third' component={Third} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

const Index = () => (
  <div>
    <h2>Index</h2>
    <p>インデックスページ</p>
  </div>
)
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

export default App;
