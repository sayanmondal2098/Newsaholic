import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';

export default class Loading extends React.Component {
    render() {
        return (
            <View>
                <SafeAreaView>
                    <Text>
                        Loading
                    </Text>
                </SafeAreaView>
            </View >
        )
    }
}