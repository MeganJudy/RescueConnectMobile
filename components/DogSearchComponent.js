import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { COMMENTS } from '../shared/comments';
import { Card, Icon } from 'react-native-elements';
import { DOGS } from '../shared/dogs';

function RenderComments({ comments }) {

    const renderCommentItem = ({ item }) => {
        return (
            <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 14 }}>{item.text}</Text>
                <Text style={{ fontSize: 12 }}>{`-- ${item.author}, ${item.location}, ${item.date}`}</Text>
            </View>
        );
    };

    return (
        <Card title='Message Board'>
            <FlatList
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
}


function RenderDogSearch(props) {
    const { dog } = props

    if (dog) {
        return (
            <Card
                featuredTitle={dog.name}
                image={require('./images/headoutwindow2.jpg')}
            >
                <Text style={{ margin: 10 }}>
                    {dog.description}
                </Text>
                <Icon
                    name={props.favorite ? 'trophy' : 'heart-o'}
                    type='font-awesome'
                    color='#c2153e'
                    raised
                    reverse
                    onPress={() => props.favorite ?
                        console.log('Already set as a favorite') : props.markFavorite()}
                />
            </Card>
        );
    }
    return <View />;
}

class DogSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogs: DOGS,
            comments: COMMENTS,
            favorite: false
        };
    }

    markFavorite() {
        this.setState({ favorite: true });
    }

    static navigationOptions = {
        title: 'Dog Search'
    }
    render() {
        const dogId = this.props.navigation.getParam('dogId');
        const dog = this.state.dogs.filter(dog => dog.id === dogId)[0];
        const comments = this.state.comments.filter(comment => comment.dogId === dogId);
        return (
            <ScrollView>
                <RenderDogSearch dog={dog}
                    favorite={this.state.favorite}
                    markFavorite={() => this.markFavorite()} />
                <RenderComments comments={comments} />
            </ScrollView>
        );
    }
}

export default DogSearch;