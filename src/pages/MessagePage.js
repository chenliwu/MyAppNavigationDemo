import React from 'react';
import {
    View,
    Text
} from 'react-native';

export default class MessagePage extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>消息页面</Text>
            </View>
        )
    }
}