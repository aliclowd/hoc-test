import React from 'react';
import SearchByName from './components/searchByName/SearchByName.component';
import withSubmitQuery from './components/submitQuery/withSubmitQuery.component';
import './App.css';

const SearchByNameWithSubmitQuery = withSubmitQuery(SearchByName);

function App() {
  return (
    <div className="App">
      <SearchByNameWithSubmitQuery />
    </div>
  );
}

export default App;
