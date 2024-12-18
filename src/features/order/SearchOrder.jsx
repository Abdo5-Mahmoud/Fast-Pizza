import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const SearchOrder = () => {
  const [query, setQuery] = useState('');
  const [select, setSelect] = useState('pizza');
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSubmit(e) {
    e.preventDefault();
    searchParams.set('value', query);
    setSearchParams(searchParams);
    if (!query) return;
    setQuery('');
    if (select == 'id') navigate(`/order/${query}`);
  }

  function handleSelect(value) {
    setSelect(value);
    searchParams.set('sort', value);
    setSearchParams(searchParams);
  }
  return (
    <form onSubmit={handleSubmit} action="" className="flex items-center gap-2">
      <input
        placeholder={`Seacrch By ${select}#`}
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />
      <select
        name="category"
        defaultValue={'Pizza'}
        className="w-12 rounded-md border-yellow-500 bg-yellow-300 text-sm outline-none sm:w-28"
        onChange={(e) => handleSelect(e.target.value)}
      >
        <option className="border-none" value="id">
          Id
        </option>
        <option value="Pizza">Pizza</option>
        <option value="ingredients">Ingredients</option>
      </select>
    </form>
  );
};

export default SearchOrder;
