import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

//we have 2 reducers, we wire them together with the combineReducers helper function and we pass them to the store.
export default combineReducers({
    //we asign the LibraryReducer to the key called libraries.
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});