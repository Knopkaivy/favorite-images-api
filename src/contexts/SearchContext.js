import React, { createContext, useContext, useReducer } from 'react';
import { starterArr } from '../starters/starterSearch';

const SearchContext = createContext(null);
const SearchDispatchContext = createContext(null);

export function SearchProvider({ children }) {
  const [search, dispatch] = useReducer(
    searchReducer,
    starterArr,
    createInitialState
  );
  return (
    <SearchContext.Provider value={search[search.length - 1]}>
      <SearchDispatchContext.Provider value={dispatch}>
        {children}
      </SearchDispatchContext.Provider>
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}

export function useSearchDispatch() {
  return useContext(SearchDispatchContext);
}

function createInitialState(starterArr) {
  const result = [];
  const i = Math.floor(Math.random() * starterArr.length);
  result.push(starterArr[i]);
  return result;
}

function searchReducer(search, action) {
  switch (action.type) {
    case 'updated': {
      return [...search, action.text];
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}
