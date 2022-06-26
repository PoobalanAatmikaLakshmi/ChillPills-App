import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

//This is the first screen that users will see when they first launch the app
//Function: Gives them an introduction to the app

const Dots = selected => {
  let backgroundColor;
  backgroundColor = selected ? 'rgba(0, 0 , 0, 0.8)' : 'rgba(0, 0, 0, 0.1)';

  return (
    <View
      style={{
        width: 5,
        height: 5,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};
const Skip = props => <Button title="Skip" color="#8A584C" {...props} />;
const Next = props => <Button title="Next" color="#8A584C" {...props} />;
const Done = props => (
  <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
    <Text style={{fontSize: 17}}>Done</Text>
  </TouchableOpacity>
);

const OnBoardingScreen = ({navigation}) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: '#FCF6E2',
          image: <Image source={require('../assets/onboard-img1.png')} />,
          title: 'Nice to Meet You!',
          subtitle: 'Welcome to ChillPills fellow user!',
        },
        {
          backgroundColor: '#FCF6E2',
          image: <Image source={require('../assets/onboard-img2.png')} />,
          title: 'Incoporate Breaks into Your Schedule',
          subtitle: 'Earn ChillCoins to Customise Your Pets!',
        },
        {
          backgroundColor: '#FCF6E2',
          image: <Image source={require('../assets/onboard-img3.png')} />,
          title: 'Get Started with Us!',
          subtitle: 'Login or Create a New Account',
        },
      ]}
    />
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
