import React from 'react';
import SearchByName from './components/searchByName/SearchByName.component';
import withSubmitQuery from './components/submitQuery/withSubmitQuery.component';
import './App.css';
import MultiSelect from './components/multiSelect/MultiSelect.component';
const SearchByNameWithSubmitQuery = withSubmitQuery(SearchByName);
const MultiSelectSubmitQuery = withSubmitQuery(MultiSelect);

function App() {
  return (
    <div className="App">
      <SearchByNameWithSubmitQuery />
      <br />
      <MultiSelectSubmitQuery />
    </div>
  );
}

export default App;
