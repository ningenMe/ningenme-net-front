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
      <Space spaceSize='8vh'/>
      <Main />
      <Space spaceSize='2vh'/>
      <Footer />
    </div>
  );
}

export default App;
