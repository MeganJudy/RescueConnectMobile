import React, { Component, useState } from 'react';
import { Text, View, ScrollView, FlatList, Modal, Button, StyleSheet } from 'react-native';
import { Card, Icon, Input } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { postFavorite, postComment } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        dogs: state.dogs,
        comments: state.comments,
        favorites: state.favorites
    };
};

const mapDispatchToProps = {
    postFavorite: dogId => (postFavorite(dogId)),
    postComment: (dogId, author, location, text) => (postComment(dogId, author, location, text))
};

function RenderDogSearch(props) {

    const { dog } = props;

    if (dog) {
        return (
            <Card
                featuredTitle={dog.name}
                image={{ uri: baseUrl + dog.image }}
            >
                <Text style={{ margin: 10 }}>
                    {dog.description}
                </Text>
                <View style={styles.cardRow}>
                    <Icon
                        name={props.favorite ? 'trophy' : 'heart-o'}
                        type='font-awesome'
                        color='#c2153e'
                        raised
                        reverse
                        onPress={() => props.favorite ?
                            console.log('Already set as a favorite') : props.markFavorite()}
                    />
                    <Icon
                        name='pencil'
                        type='font-awesome'
                        color='#0c073d'
                        raised
                        reverse
                        onPress={() => {
                            props.onShowModal()
                        }
                        }
                    />
                </View>
            </Card>
        );
    }
    return <View />;
}

function RenderComments({ comments }) {

    const renderCommentItem = ({ item }) => {
        return (
            <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 14 }}>{item.text}</Text>
                <Text style={{ fontSize: 12 }}>{`-- ${item.author}, ${item.location}`}</Text>
            </View>
        )
    }

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


class DogSearch extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            author: "",
            location: "",
            text: ""
        }
    }

    toggleModal() {
        this.setState({ showModal: !this.state.showModal });
    }

    handleComment(dogId) {
        this.props.postComment(dogId, this.state.author, this.state.location, this.state.text);
        this.toggleModal();
        console.log(JSON.stringify(this.state));
    }

    resetForm() {
        this.setState({
            showModal: false,
            author: "",
            location: "",
            text: ""
        });
    }

    static navigationOptions = {
        title: 'Dog Search'
    };

    markFavorite(dogId) {
        this.props.postFavorite(dogId);
    }

    render() {
        const dogId = this.props.navigation.getParam('dogId');
        const dog = this.props.dogs.dogs.filter(dog => dog.id === dogId)[0];
        const comments = this.props.comments.comments.filter(comment => comment.dogId === dogId);
        return (
            <ScrollView>
                <RenderDogSearch dog={dog}
                    favorite={this.props.favorites.includes(dogId)}
                    markFavorite={() => this.markFavorite(dogId)}
                    onShowModal={() => this.toggleModal()}
                />
                <RenderComments comments={comments} />

                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.showModal}
                    onRequestClose={() => this.toggleModal()}
                >
                    <View style={styles.modal}>

                        <Input
                            placeholder="Author"
                            leftIcon={{ type: 'font-awesome', name: 'user-circle-o' }}
                            leftIconContainerStyle={{ paddingRight: 20 }}
                            onChangeText={author => this.setState({ author: author })}


                        />

                        <Input
                            placeholder="Where are you from?"
                            leftIcon={{ type: 'font-awesome', name: 'map' }}
                            leftIconContainerStyle={{ paddingRight: 20 }}
                            style={styles}
                            onChangeText={location => this.setState({ location: location })}
                        />

                        <Input
                            placeholder="Post Your Comment Here"
                            leftIcon={{ type: 'font-awesome', name: 'wechat' }}
                            leftIconContainerStyle={{ paddingRight: 20 }}
                            style={styles}
                            onChangeText={text => this.setState({ text: text })}
                        />

                        <View style={{ margin: 10 }}>
                            <Button
                                onPress={() => {
                                    this.handleComment(dogId)
                                    this.resetForm()
                                }}
                                title='Submit'
                                color='#0c073d'
                            />
                        </View>

                        <View style={{ margin: 10 }}>
                            <Button
                                onPress={() => {
                                    this.setState({ toggleModal: !this.state.toggleModal })
                                    this.resetForm()
                                }}
                                title='Cancel'
                                color='#c2153e'
                            >
                            </Button>
                        </View>
                    </View>

                </Modal>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    cardRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    modal: {
        justifyContent: 'center',
        margin: 20
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(DogSearch);