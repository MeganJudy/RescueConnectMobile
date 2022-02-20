import React, { Component } from 'react';
import { ScrollView, Text, FlatList, Image, StyleSheet } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { View } from 'react-native-web';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        partners: state.partners
    };
};

function Mission() {
    return (
        <ScrollView>
            <Image
                source={require("./images/RescuesConnect.jpg")}
                style={styles.image}
            ></Image>

            <Card title={"Our Mission"}>
                <Text style={{ margin: 10 }}>
                    Let us be honest... we are here to save ALL THE DOGS!
                    RescuesConnect was founded in 2021 on the idea that every dog deserves a family to call their own, and we are here to make getting
                    to that family a little easier. RescuesConnect is not a rescue, a shelter or a foster organization. We are the network that gets all those groups connected in one place.
                    {'\n'}{'\n'}
                    We are 100% donation funded and volunteer run in conjunction with our Community Partners and our private donors. We don't charge for membership, because we understand that rescue is not only hard for the dogs, but financially difficult at times for those trying to help.
                </Text>
            </Card>
        </ScrollView>
    );
}

class About extends Component {

    static navigationOptions = {
        title: "About Us",
    };

    render() {
        const renderPartner = ({ item }) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{ source: { uri: baseUrl + item.image } }}
                />
            )
        }

        return (<ScrollView>
            <Mission />
            <Card title={'Community Partners'}>
                <FlatList
                    data={this.props.partners.partners}
                    renderItem={renderPartner}
                    keyExtractor={item => item.id.toString()}
                />
            </Card>
        </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        margin: 0
    },

    header: {
        flex: 1,
        overflow: 'visible',
        alignItems: "stretch",
        textAlign: "center",
        fontWeight: "bold",
        color: "#0c073d",
        backgroundColor: '#c2153e',
        fontSize: 15,
        position: 'relative',
        marginLeft: 0,
        marginRight: 0
    },

    card: {
        flex: 1,
        overflow: 'visible',
        alignItems: "stretch",
        textAlign: "center",
        fontWeight: "bold",
        color: "#c2153e",
        backgroundColor: '#0c073d',
        fontSize: 30,
        position: 'relative',
        marginLeft: 0,
        marginRight: 0,
        paddingTop: 10,
        paddingBottom: 10
    },

    item: {
        flex: 1,
        overflow: 'visible',
        alignItems: "stretch",
        textAlign: "center",
        backgroundColor: 'white',
        fontSize: 17,
        position: 'relative',
        marginLeft: 15,
        marginRight: 15,
        padding: 5

    },

    image: {
        flex: 1,
        alignItems: "center",
        width: null,
        height: 250,
        resizeMode: 'cover',
        margin: 20
    }
})

export default connect(mapStateToProps)(About);