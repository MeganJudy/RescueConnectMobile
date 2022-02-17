import { ScrollView, Text } from "react-native";
import React, { Component } from "react";
import { Card, ListItem } from "react-native-elements";
import { PARTNERS } from '../shared/partners';
import { FlatList } from "react-native-gesture-handler";

function Mission() {
    return (
        <Card title={"Our Mission"}>
            <Text style={{ margin: 10 }}>
                Let's be honest... we are here to save ALL THE DOGS!
                RescuesConnect was founded on the idea that every dog deserves a family to call their own, and we are here to make getting
                to that family a little easier.
            </Text>
        </Card>
    );
}

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partners: PARTNERS
        }
    }
    static navigationOptions = {
        title: "About Us",
    };

    render() {
        const renderPartner = ({ item }) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{ source: require('./images/Diamond-Naturals-Brand-Dog-OG.jpg') }}
                />
            )
        }

        return (<ScrollView>
            <Mission />
            <Card title={'Community Partners'}>
                <FlatList
                    data={this.state.partners}
                    renderItem={renderPartner}
                    keyExtractor={(item) => item.id.toString()}
                />
            </Card>
        </ScrollView>
        )
    }
}

export default About;