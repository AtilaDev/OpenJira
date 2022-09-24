import { Entry } from '../../interfaces';
import { EntriesState } from './EntriesProvider';

type EntriesActionType =
  | { type: '[Entry] Add-Entry'; payload: Entry }
  | { type: '[Entry] Entry-Updated'; payload: Entry }
  | { type: '[Entry] Refresh-Data'; payload: Entry[] }
  | { type: '[Entry] Delete-Data'; payload: Entry };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType
): EntriesState => {
  switch (action.type) {
    case '[Entry] Add-Entry':
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };
    case '[Entry] Entry-Updated':
      return {
        ...state,
        entries: state.entries.map((entry) => {
          if (entry._id === action.payload._id) {
            // return action.payload;
            entry.status = action.payload.status;
            entry.description = action.payload.description;
          }
          return entry;
        }),
      };
    case '[Entry] Refresh-Data':
      return {
        ...state,
        entries: [...action.payload],
      };
    case '[Entry] Delete-Data':
      return {
        ...state,
        entries: state.entries.filter(
          (item) => item._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
};
