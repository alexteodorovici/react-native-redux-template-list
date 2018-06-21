import React, { Component } from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {

    //this function will be called just before this component will be re-rendered.
    componentWillUpdate() {
        //this animatino function animates UI components as they appear, dissapear or are being re-rendered.
        LayoutAnimation.spring();
    }

    renderDescription() {
        //The 'library' prop is the json object representing a library (id, title and description) - the row itself from the ListView.
        //The 'expanded' prop is passed in from the 'mapStateToProps' function and it's true if the current list item ID is selected - matches the selected ID from the state (the selectedLibraryId reducer)
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <View>
                    <Text style={{ flex: 1 }}>
                        {library.description}
                    </Text>
                </View>
            );
        }
    }

    render() {

        //here we decompose the library PROP that we got from our parent 'LibraryList' passed in as 'library' prop.
        //The 'library' prop is the json object representing a library (id, title and description) - the row itself from the ListView.
        const { id, title } = this.props.library;

        console.log("sel lib: " + id);

        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    console.log("sel lib: " + id);
                    //on click we call the selectLibrary ACTION and we pass in the current ID.
                    this.props.selectLibrary(id)
                }}
            >
                <View>
                    <View>
                        <Text style={styles.titleStyle}>
                            {title}
                        </Text>
                    </View>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    descriptionStyle: {
        paddingLeft: 10,
        paddingRight: 10
    }
};

//this function takes the global app state object (first argument) and maps it as Props to our Component.
//the second argument (by convention called ownProps) represents the props of the ListItem component passed by its parent (currently contains the library prop - the list row obj)
const mapStateToProps = (state, ownProps) => {
    //the expanded const will be equal to the equality result between the selected library id from the state and the current library id of the row.
    const expanded = state.selectedLibraryId === ownProps.library.id;

    //return an object as props to our component.
    //the key is the same as the value (e.g. expanded: expanded)
    return { expanded };
};

//in this connect the first argument maps the redux STATE to this component PROPS. 
//We use the selectedLibraryId from the state to compare and determine if the curent list item is expanded or not. We map the response to the 'expanded' prop.
//the second argument of connect maps the actions to props. we can use an action via ex: this.props.selectLibrary(id) where 'selectLibrary' is an action creator that accepts as argument in ID.
export default connect(mapStateToProps, actions)(ListItem);

//this connect example does not map the state to props, so first argument is null.
//but it maps the actions to props. we can use an action via ex: this.props.selectLibrary(id) where 'selectLibrary' is an action creator that accepts as argument in ID.
//export default connect(null, actions)(ListItem);