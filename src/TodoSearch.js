import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
  const onSearchValueChange = () => {

  };

  return (
    <input className="TodoSearch" 
    placeholder="Cebolla" 
    onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };