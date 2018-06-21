import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ListView } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {

    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    renderRow(library) {
        //we return a ListItem component. We also pass in a prop 'library' to this component. 
        //The prop is the json object representing a library (id, title and description) - the row itself from the ListView.
        return <ListItem library={library} />;
    }

    render() {
        //console.log(this.props);
        return (
            <View>
                <Text> demo show title from state prop {this.props.libraries[0].title}</Text>

                <ListView
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />

            </View>
        );
    }
}

//this function takes the global app state object and maps it as Props to our Component.
const mapStateToProps = state => {
    console.log(state);
    //inside the mapStateToProps function we return an object as Prop.
    //the object prop name is libraries and the value is the json array from the store.
    return { libraries: state.libraries };
};


//the connect function gives access to our Component to the application redux state.
//the connect forges a connection between the react side and redux side of the application.
export default connect(mapStateToProps)(LibraryList);
