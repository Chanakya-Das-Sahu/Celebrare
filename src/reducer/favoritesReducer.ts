import { Photo } from '../hooks/useFetchPhotos';

export type Action = { type: 'TOGGLE_FAVORITE'; payload: Photo };

export const initialState: Photo[] = typeof window !== 'undefined'
  ? JSON.parse(localStorage.getItem('celebrare_favs') || '[]')
  : [];

export const favoritesReducer = (state: Photo[], action: Action): Photo[] => {
  let newState;
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const exists = state.find(p => p.id === action.payload.id);
      newState = exists
        ? state.filter(p => p.id !== action.payload.id)
        : [...state, action.payload];
      break;
    default:
      return state;
  }
  localStorage.setItem('celebrare_favs', JSON.stringify(newState));
  return newState;
};