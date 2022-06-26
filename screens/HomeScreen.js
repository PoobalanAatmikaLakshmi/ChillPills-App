import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Input,
  ImageBackground,
  Image,
  useWindowDimensions,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useRoute} from '@react-navigation/native';
import CustomButton from '../Components/CustomButton';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import MainBackground from '../assets/MainBackground.png';
import ChooseInterval from './ChooseInterval';
import LoginScreen from './LoginScreen';
import Casper from '../assets/Casper.png';
//import BackgroundTimer from 'react-native-background-timer';
const HomeScreen = () => {
  const navigation = useNavigation();
  const {height} = useWindowDimensions();

  const onStartBreakPressed = () => {
    //console.warn("Register");
    navigation.navigate('Break Timer');
    //BackgroundTimer.start();
  };

  return (
    <View style={styles.root}>
      <ImageBackground
        source={MainBackground}
        resizeMode="cover"
        style={{width: '100%', height: '100%'}}>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Image
          source={Casper}
          style={[styles.badge, {height: height}]}
          resizeMode="stretch"
        />
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <View style={styles.bottom}>
          <CustomButton
            text="It is time for a break!"
            onPress={onStartBreakPressed}
          />
          <Text> </Text>
          <Text> </Text>
        </View>
        <Text> </Text>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //padding: 50,
    //backgroundColor: '#FCF6E2',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
  },
  badge: {
    width: '80%',
    maxWidth: 170,
    maxHeight: 170,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
