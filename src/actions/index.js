//an action creator is a javascript function that returns actions.
//we pass in the libraryId of the library we want to select.
export const selectLibrary = (libraryId) => {

    //return an action. a plain javascript object with a TYPE property.
    //an action tells a reducer what data to produce.
    return {
        type: 'select_library',
        payload: libraryId //the library to select
    };
};