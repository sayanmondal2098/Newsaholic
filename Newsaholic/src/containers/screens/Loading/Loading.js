import React from 'react';
import { View, Image, Text, StyleSheet, Animated } from 'react-native';
import Logo from '../../../../assects/images/logo.png'
import OnboardingScreen from "../OnboardingScreen";
import { NavigationActions } from "react-navigation";
import { createStackNavigator } from '@react-navigation/stack';
import { Actions } from "react-native-router-flux";

class Loading extends React.Component {
    state = {
        LogoAnime: new Animated.Value(2),
        LogoText: new Animated.Value(0),
        loadingSpinner: false
    }

    componentDidMount() {
        const { LogoAnime, LogoText } = this.state;

        this.timeoutHandle = setTimeout(() => Actions.OnboardingScreen(), 5000);
       
        Animated.parallel([
            Animated.spring(LogoAnime, {
                toValue: 1,
                tension: 10,
                friction: 2,
                duration: 1000,
                useNativeDriver: false
            }).start(),

            Animated.timing(LogoText, {
                toValue: 1,
                duration: 1200,
                useNativeDriver: true
            })
        ]).start(() => {
            this.setState({
                loadingSpinner: true
            })
        })
    }

    render() {
        const HomeStack = createStackNavigator();
        return (
            <View style={styles.container}>
                <Animated.View
                    style={{
                        opacity: this.state.LogoAnime,
                        top: this.state.LogoAnime.interpolate({
                            inputRange: [0, 1],
                            outputRange: [120, 0]
                        })
                    }}>
                    <Image style={styles.logo} source={Logo} />
                </Animated.View>
                <Animated.View style={{opacity: this.state.LogoText}}>
                    {/* <Text style={styles.logoText}>Newsaholic</Text> */}
                </Animated.View>
            </View >
        )
    }
}

export default Loading

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    logo: {
        width: 130,
        height: 130
    },

    logoText: {
        color: '#0981E4',
        fontSize: 27,
        marginTop: 10,
        fontWeight: '700'
    }
})