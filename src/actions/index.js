import { SELECT_LIBRARY } from './types';

//we call an action creator when we want to invoke a change. kinda like setState. 
//the action creator returns an action that is sent to all reducers wich in turn calculate the new app state. 
//the new app state is sent to all components that are re-rendered with the new changes.
//an action creator is a javascript function that returns actions.
//we pass in the libraryId of the library we want to select.
export const selectLibrary = (libraryId) => {

    //return an action. a plain javascript object with a TYPE property.
    //an action tells a reducer what data to produce.
    return {
        type: SELECT_LIBRARY,
        payload: libraryId //the library to select
    };
};