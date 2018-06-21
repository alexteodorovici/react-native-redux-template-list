//reducers are called with the state object and an action.
//the first time this reducer runs, it will have the state as undefined.
//so we initialize the state with a null value.
export default (state = null, action) => {
    console.log(action);
    //this function contains a switch over the action.type where we decide what action to return.
    switch (action.type) {
        //this reducer watches for an action of TYPE select_library and when it sees that it returns the selected library ID.
        case 'select_library':
            return action.payload;
        //if a reducer returns 'undefined' then redux will throw an error.
        //we also cover the default case (when the action is not of type select_library) where we return the state.
        default:
            return state;
    }
};