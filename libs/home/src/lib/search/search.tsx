import React, { useState, useEffect, useRef, useCallback } from 'react';

import { userdata } from './data';

import './search.module.scss';


export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchList, setSearchList] = useState([...userdata]);
  const elSearch = useRef(null);
  let listItems ;
  const handleSearch = useCallback((searchVal) => {
    console.log('handle search');
    setSearchTerm(searchVal);
  }, []);

  if(searchList.length > 0) {
    listItems = searchList.map((item) => (<li key={item.id}>{item.name}</li>));
  } else {
    listItems = <p>Search did not return any results</p>
  }


  useEffect(() => {

    const timer = setTimeout(() => {
      console.log('inside effects');
      if (searchTerm && searchTerm === elSearch.current.value) {
        const searchRecord = userdata.filter(
          (item) => item.name === searchTerm
        );
        setSearchList(searchRecord);
      } else {
        setSearchList([...userdata]);
      }
    }, 500);


    return () => clearTimeout(timer);
  }, [searchTerm]);

  return (
    <div>
      <h1>Welcome to search!</h1>
      <p>
        <input
          name="Search"
          ref={elSearch}
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </p>
      <h2>Search List</h2>
      <ul>
        {listItems};
      </ul>
    </div>
  );
};

export default Search;
