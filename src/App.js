import React  from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Space from "./components/Space";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Space />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
