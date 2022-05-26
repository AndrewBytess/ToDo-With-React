import React from 'react';
import './TodoSearch.css';

function TodoSearch(searchValue,setSearchValue) {

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