import React, {useEffect, useState} from 'react';
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
import CasperBHome from '../assets/CasperBHome.png';
import CasperRHome from '../assets/CasperRHome.png';
import CasperPHome from '../assets/CasperPHome.png';

import Camo from '../assets/Camo.png';
import CamoBHome from '../assets/CamoBHome.png';
import CamoRHome from '../assets/CamoRHome.png';
import CamoPHome from '../assets/CamoPHome.png';

import Cuincy from '../assets/Cuincy.png';
import CuincyBHome from '../assets/CuincyBHome.png';
import CuincyRHome from '../assets/CuincyRHome.png';
import CuincyPHome from '../assets/CuincyPHome.png';

import firestore from '@react-native-firebase/firestore';
//import BackgroundTimer from 'react-native-background-timer';
const HomeScreen = () => {
  const navigation = useNavigation();
  const {height} = useWindowDimensions();
  const [source, setSource] = useState();
  const route = useRoute();
  const {userID} = route.params;
  const onStartBreakPressed = () => {
    //console.warn("Register");
    navigation.navigate('ChooseBreakActivity');
    //BackgroundTimer.start();
  };
  const getPetURL = petName => {
    if (petName === 'uninitialised') {
      return null;
    } else if (petName === 'Casper') {
      return Casper;
    } else if (petName === 'Camo') {
      return Camo;
    } else if (petName === 'Cuincy') {
      return Cuincy;
    } else if (petName === 'CasperB') {
      return CasperBHome;
    } else if (petName === 'CasperR') {
      return CasperRHome;
    } else if (petName === 'CasperP') {
      return CasperPHome;
    } else if (petName === 'CamoB') {
      return CamoBHome;
    } else if (petName === 'CamoR') {
      return CamoRHome;
    } else if (petName === 'CamoP') {
      return CamoPHome;
    } else if (petName === 'CuincyB') {
      return CuincyBHome;
    } else if (petName === 'CuincyP') {
      return CuincyPHome;
    } else if (petName === 'CuincyR') {
      return CuincyRHome;
    }


    return;
  };

  useEffect(() => {
    const func = async () => {
      const user = await firestore().collection('users').doc(userID).get();
      setSource(getPetURL(user._data.petimage));
      console.log(user);
      console.log(source);
    };

    func();
  });

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
        {source && (
          <Image
            source={source}
            style={[styles.badge, {height: height}]}
            resizeMode="stretch"
          />
        )}
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
    width: '100%',
    maxWidth: 250,
    maxHeight: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
