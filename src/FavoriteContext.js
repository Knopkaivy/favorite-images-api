import React, { createContext, useContext, useReducer } from 'react';

const FavoriteContext = createContext(null);
const FavoriteDispatchContext = createContext(null);

export function FavoriteProvider({ children }) {
  const [favorite, dispatchFavorite] = useReducer(
    favoriteReducer,
    initialState
  );
  return (
    <FavoriteContext.Provider value={favorite}>
      <FavoriteDispatchContext.Provider value={dispatchFavorite}>
        {children}
      </FavoriteDispatchContext.Provider>
    </FavoriteContext.Provider>
  );
}

export function useFavorite() {
  return useContext(FavoriteContext);
}

export function useFavoriteDispatch() {
  return useContext(FavoriteDispatchContext);
}

// function createInitialState(a) {}

function favoriteReducer(favorite, action) {
  switch (action.type) {
    case 'added': {
      return [...favorite, action.image];
    }
    case 'removed': {
      return;
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}

const initialState = [];
