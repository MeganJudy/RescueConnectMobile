import { Image } from "react-native-web";
import React, { Component } from "react";


class DisplayLogo extends Component {
    render() {
        return (
            <View style={StyleSheet.container}>
                <Image
                    style={styles.DisplayLogo}
                    source={require('/assets/images/RescuesConnectNoBackground.png')} />
            </View>
        )
    }
}

export default DisplayLogo;