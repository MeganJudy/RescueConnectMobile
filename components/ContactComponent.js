import React, { Component } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, Card } from 'react-native-elements';


class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        return (
            <ScrollView>
                <Card title="Contact Information" wrapperStyle={{ margin: 20 }}>
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

export default Contact;