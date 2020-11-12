import React from 'react';
import { Text, View, Button, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
// import { NavigationAction,navigation } from "@react-navigation/native";

import Onboarding from 'react-native-onboarding-swiper';
// import { Safe } from "expo";
import Home from "../screens/Home";
import Login from './Login/Login';


const Next = ({ ...props }) => (
    <Button
        title='Next'
        color='#000000'
        {...props}
    />
)


const Skip = ({ ...props }) => (
    <Button
        title="Skip"
        color="#000000"
    />
)

const Done = ({ ...props }) => (
    <TouchableOpacity
    style={{marginHorizontal:8}}
    >
        <Text style={{fontSize:16}}>
            Done
        </Text>
    </TouchableOpacity>
)


const OnboardingScreen = props => {
    // props.navigation.navigate('Register');
    return (

        <Onboarding
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            // DoneButtonComponent={Done}
            onSkip={() => navigation.navigation('Login')}
            onDone={() => navigation.navigation('Login')}
            pages={[
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image source={require('../../../assects/images/logo.png')} />,
                    title: 'Newsaholic',
                    subtitle: 'News Beams With Quality',
                },
                {
                    backgroundColor: '#fdeb93',
                    image: <Image source={require('../../../assects/images/Onboard2.png')} />,
                    title: 'Stay Connected ',
                    subtitle: 'Stay informed about your outer world',
                },
                {
                    backgroundColor: '#e9bcbe',
                    image: <Image source={require('../../../assects/images/Onboard3.png')} />,
                    title: 'Stay Focused',
                    subtitle: 'Don\'t think about news paper and focus on your job',
                },

            ]}
            
        />

    )
}

export default OnboardingScreen;