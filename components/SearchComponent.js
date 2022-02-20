import React, { Component } from 'react';
import {
    Text, View, ScrollView, StyleSheet,
    Picker, Button, Image
} from 'react-native';

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            zone: 1,
            hero: " ",
            age: " "

        };
    }

    static navigationOptions = {
        title: 'Find a Dog'
    }

    handleSearch() {
        console.log(JSON.stringify(this.state));
        this.setState({
            zone: 1,
            hero: " ",
            age: " ",
        });
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.formRow}>
                    <Image
                        source={require("./images/usazones.jpg")}
                        style={styles.image}
                    ></Image>
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>What region are you looking for?</Text>
                    <Picker
                        style={styles.formItem}
                        selectedValue={this.state.zone}
                        onValueChange={itemValue => this.setState({ zone: itemValue })}
                    >
                        <Picker.Item label='1 - Pacific Northwest ' value='1' />
                        <Picker.Item label='2 - Rocky Mountains' value='2' />
                        <Picker.Item label='3 - California' value='3' />
                        <Picker.Item label='4 - Southwest' value='4' />
                        <Picker.Item label='6 - Midwest ' value='5' />
                        <Picker.Item label='7 - Texas' value='7' />
                        <Picker.Item label='8 - The South' value='8' />
                        <Picker.Item label='9 - Florida' value='9' />
                        <Picker.Item label='10 - Mid Atlantic' value='10' />
                        <Picker.Item label='11 - New England' value='11' />
                    </Picker>
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>How are you going to be a hero today?</Text>
                    <Picker
                        style={styles.formItem}
                        selectedValue={this.state.hero}
                        onValueChange={itemValue => this.setState({ hero: itemValue })}
                    >
                        <Picker.Item label='Transport ' />
                        <Picker.Item label='Rescue' />
                        <Picker.Item label='Foster' />
                    </Picker>
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Dog Age</Text>
                    <Picker
                        style={styles.formItem}
                        selectedValue={this.state.age}
                        onValueChange={itemValue => this.setState({ age: itemValue })}
                    >
                        <Picker.Item label='Puppy (0-11 months) ' value='puppy' />
                        <Picker.Item label='Young (1 yr-5 yrs)' value='young' />
                        <Picker.Item label='Older (6 yrs- 10 yrs)' value='older' />
                        <Picker.Item label='Senior (10 yrs+)' value='senior' />
                    </Picker>
                </View>
                <View style={styles.formRow}>
                    <Button
                        onPress={() => this.handleSearch()}
                        title='Search'
                        color='#c2153e'
                        accessibilityLabel='Tap me to search for available rescues, transports and fosters!'
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 10
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    },
    image: {
        flex: 1,
        alignItems: "center",
        width: null,
        height: 230,
        resizeMode: 'cover',
        margin: 10
    }
});

export default Search;