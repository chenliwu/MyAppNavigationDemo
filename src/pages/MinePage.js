import React from 'react';
import {
    View,
    Text
} from 'react-native';

export default class MinePage extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>我的页面</Text>
            </View>
        )
    }
}