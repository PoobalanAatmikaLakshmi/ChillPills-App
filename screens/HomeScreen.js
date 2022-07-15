import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Input,
  ImageBackground,
  Image,
  useWindowDimensions,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useRoute} from '@react-navigation/native';
import CustomButton from '../Components/CustomButton';
import {Button} from 'react-native-elements';
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

import {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {set} from 'react-native-reanimated';
//import BackgroundTimer from 'react-native-background-timer';
const HomeScreen = () => {
  const navigation = useNavigation();
  const {height} = useWindowDimensions();
  const [source, setSource] = useState();
  const [coins, setCoins] = useState();
  let user = firebase.auth().currentUser;
  //const route = useRoute();
  //const {userID} = route.params;
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
    const fieldPath = new firebase.firestore.FieldPath('petimage');
    const subscriber = firestore()
      .collection('users')
      .doc(user.uid)
      .onSnapshot(documentSnapshot => {
        console.log('User data: ', documentSnapshot.data());
        const pet = documentSnapshot.get(fieldPath);
        console.log(pet);
        setSource(getPetURL(pet));
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  });



  //text="It is time for a break!"
  //onPress={onStartBreakPressed}
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
          <CustomButton text="chillcoins :" />
          <Button
            title="It's time to take a break!"
            onPress={onStartBreakPressed}
            //icon={{
            //  name: 'hourglass-start',
            //  type: 'font-awesome',
            //  size: 15,
            // color: 'white',
            // }}
            iconContainerStyle={{marginRight: 10}}
            titleStyle={{fontWeight: '900'}}
            buttonStyle={{
              backgroundColor: 'rgba(90, 154, 230, 1)',
              borderColor: 'peach',
              borderWidth: 0,
              borderRadius: 30,
            }}
            containerStyle={{
              width: 240,
              marginHorizontal: 80,
              marginVertical: 0,
            }}
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
