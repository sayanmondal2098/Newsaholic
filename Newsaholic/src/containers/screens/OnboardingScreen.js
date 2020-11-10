import React from 'react';
import { Text, View, Button, Image, StyleSheet, SafeAreaView } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { Safe } from "expo";


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
                        backgroundColor: '#fff',
                        image: <Image source={require('../../../assects/images/Onboard1.png')} />,
                        title: 'Onboarding 1',
                        subtitle: 'Done with React Native Onboarding Swiper 1',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image source={require('../../../assects/images/Onboard2.png')} />,
                        title: 'Onboarding 2',
                        subtitle: 'Done with React Native Onboarding Swiper 2',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image source={require('../../../assects/images/Onboard3.png')} />,
                        title: 'Onboarding 3',
                        subtitle: 'Done with React Native Onboarding Swiper 3',
                    },

                ]}
            />

    )
}

export default OnboardingScreen;