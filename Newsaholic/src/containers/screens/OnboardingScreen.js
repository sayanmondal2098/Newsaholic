import React from 'react';
import { Text, View, Button, Image, StyleSheet, SafeAreaView } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
// import { Safe } from "expo";


const Next = ({...props}) => (
    <Button
    title = 'Next'
    color = "#000000"
    {...props}
    />
)
const OnboardingScreen = ({ navigation }) => {
    return (
        
            <Onboarding
                // onSkip={() => navigation.navigation("Login")}
                // onDone={() => navigation.navigation("Login")}
                NextButtonComponent={Next}
                pages={[
                    {
                        backgroundColor: '#a6e4d0',
                        image: <Image source={require('../../../assects/images/Onboard1.png')} />,
                        title: 'Newsaholic',
                        subtitle: 'Done with React Native Onboarding Swiper 1',
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