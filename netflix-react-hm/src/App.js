import './App.css';
import React, { useState } from 'react'; //components
import Header from './components/Header';
import Home from './components/Home';

function App() {
  const [searchBarInput, setSearchBarInput] = useState('');
  const [SearchFunc, SetSearchFunc] = useState();
  console.log(SearchFunc);
  return (
    <div className='App'>
      <Header setSearchBarInput={setSearchBarInput} />
      <Home searchBarInput={searchBarInput} SearchFunc={SetSearchFunc} />
    </div>
  );
}
export default App;
