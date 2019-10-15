import React , { useState } from "react";



export default function SearchForm({ onSearch }) {
  const [search, setSearch] = useState({ name: '' });
  const handleInputChange = event => {
    setSearch({ ...search, name: event.target.value });
  };
 
  return (
    <div>
    <section className="search-form">
    <form onSubmit={() => onSearch(search.name)}>
        <input
        onChange={handleInputChange}
        placeholder='name'
        value={search.name}
        name='name'
        />

  
        <button className = "search-button">Search</button>
        </form>
      
    </section>
    </div>
  );
}