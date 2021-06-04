import './App.css';
import React, { useState } from 'react'; //components
import Header from './components/Header';
import Home from './components/Home';

function App() {
  const [searchBarInput, setSearchBarInput] = useState('');

  return (
    <div className='App'>
      <Header setSearchBarInput={setSearchBarInput} />
      <Home searchBarInput={searchBarInput} />
    </div>
  );
}
export default App;
