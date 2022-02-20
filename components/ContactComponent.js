import React, { Component } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, Card, Icon } from 'react-native-elements';
import { Image, StyleSheet } from 'react-native';


class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        return (
            <ScrollView>
                <Image
                    style={styles.image}
                    source={require("./images/RescuesConnect.jpg")}
                ></Image>
                <Icon>Check us out on Facebook!</Icon>
                <Card title="How to Reach Us" styles={styles.card} >
                    <Text>   RescuesConnect              </Text>
                    <Text>   Carlisle Twp, Ohio       </Text>
                    <Text>   U.S.A.                     </Text>

                    <Text>   Phone: 1-440-785-7276     </Text>
                    <Text>   Email: rescuesconnect@gmail.com </Text>

                </Card>
            </ScrollView>
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
        width: 150,
        height: 100,
        resizeMode: 'cover',
        margin: 20
    }
})

export default Contact;