import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    //we asign the LibraryReducer to the key called libraries.
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});