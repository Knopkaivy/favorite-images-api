import React, {
  createContext,
  useContext,
  useCallback,
  useReducer,
} from 'react';
import { useLocalStorage } from 'react-use';

const FavoriteContext = createContext(null);
const FavoriteDispatchContext = createContext(null);

export function FavoriteProvider({ children }) {
  const [favorite, dispatchFavorite] = usePersistReducer();
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

function favoriteReducer(favorite, action) {
  switch (action.type) {
    case 'added': {
      return [...favorite, action.image];
    }
    case 'removed': {
      return favorite.filter((image) => image.id !== action.image.id);
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}

// useLocalStorage (not my logic)

const LOCAL_STORAGE_KEY = 'FAVORITES';
const INITIAL_STATE = [];

const usePersistReducer = () => {
  const [savedState, saveState] = useLocalStorage(
    LOCAL_STORAGE_KEY,
    INITIAL_STATE
  );

  const reducerLocalStorage = useCallback(
    (state, action) => {
      const newState = favoriteReducer(state, action);
      saveState(newState);
      return newState;
    },
    [saveState]
  );

  return useReducer(reducerLocalStorage, savedState);
};
