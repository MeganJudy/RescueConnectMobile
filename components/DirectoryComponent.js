import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { DOGS } from '../shared/dogs';

class Directory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dogs: DOGS
        };
    }

    static navigationOptions = {
        title: 'Directory'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({ item }) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('DogSearch', { dogId: item.id })}
                    leftAvatar={{ source: require('./images/headoutwindow2.jpg') }}
                />
            );
        };

        return (
            <FlatList
                data={this.state.dogs}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Directory;