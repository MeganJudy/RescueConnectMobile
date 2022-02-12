import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import DisplayLogo from './LogoComponent';

function RenderItem({ item }) {
    if (item) {
        return (
            <Text>Welcome to RescuesConnect!</Text>
        );
    }
    return <View />;
}

export default Home;