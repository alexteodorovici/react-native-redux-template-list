import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import LibraryList from './components/LibraryList';
import reducers from './reducers';

const App = () => {
    return (
        //the Provider is the glue between react and redux
        //the store prop holds the application state.
        //the reducers we pass in to create the store are pure functions that take the previous state, modify it and return a new state.
        <Provider store={createStore(reducers)}>
            {/* this is the GUI interface of the app */}
            <View >
                <Text> React Native Redux Template </Text>
                <LibraryList />
            </View>
        </Provider>
    );
};

export default App;