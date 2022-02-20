import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { DOGS } from '../shared/dogs';
import { Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        dogs: state.dogs
    };
};

class Directory extends Component {

    static navigationOptions = {
        title: 'Dog Directory',
    }

    render() {
        <Icon
            name='search'
            type='font-awesome'
            size={24}
            color={tintColor}
        />
    }



    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({ item }) => {
            return (
                <Tile
                    title={item.name}
                    caption={item.description}
                    featured
                    onPress={() => navigate('DogSearch', { dogId: item.id })}
                    imageSrc={{ uri: baseUrl + item.image }}
                />
            );
        };

        return (
            <FlatList
                data={this.props.dogs.dogs}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default connect(mapStateToProps)(Directory);