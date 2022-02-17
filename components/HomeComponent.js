import React, { Component } from 'react';
import { render } from 'react-dom';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { PARTNERS } from '../shared/partners';

function RenderItem({ item }) {
    if (item) {
        return (
            <Card
                image={require('./images/Diamond-Naturals-Brand-Dog-OG.jpg')}
                title={item.name}
            >
                <Text style={{ margin: 10 }}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

function RenderWelcome(props) {
    return (
        <View >
            <Text style={styles.header}> </Text>
            <Image
                source={require("./images/RescuesConnect.jpg")}
                style={styles.image}
            ></Image>
            <Text style={styles.header}>
            </Text>
            <Text style={styles.item}>
                Welcome to RescuesConnect!{'\n'}
                The place where connections make all the difference!
            </Text>
            <Image
                source={require("./images/freedomride6.jpg")}
                style={styles.image}
            ></Image>
            <Text style={styles.card}>
                Log-In                 Join
            </Text>

        </View>
    );
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            partners: PARTNERS
        };
    }
    static navigationOptions = {
        title: 'Home'
    }


    render() {
        return (
            <View>
                <ScrollView>
                    <RenderWelcome>

                    </RenderWelcome>
                    <RenderItem
                        item={this.state.partners.filter(partner => partner.featured)[0]}
                    />
                    <RenderItem
                        item={this.state.partners.filter(partner => partner.featured)[1]}
                    />
                    <RenderItem
                        item={this.state.partners.filter(partner => partner.featured)[2]}
                    />
                </ScrollView>
            </View>
        );
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

export default Home;