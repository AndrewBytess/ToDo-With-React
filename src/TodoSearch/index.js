import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../todoContext';

function TodoSearch() { 
  const {searchValue,setSearchValue} = React.useContext(TodoContext); 

  const onSearchValueChange = () => {
    setSearchValue(event.target.value);
  };

  return (
    <input
     className="TodoSearch" 
    placeholder="" 
    value = {searchValue}
    onChange={onSearchValueChange}
    />

    
  );
}
 
export { TodoSearch };