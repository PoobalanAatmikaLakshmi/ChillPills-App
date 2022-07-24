import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  useWindowDimensions,
} from 'react-native';

import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import MainBackground from '../assets/MainBackground.png';

import Casper from '../assets/Casper.png'; //standard
import CasperBHome from '../assets/CasperBHome.png'; //basic
import CasperRHome from '../assets/CasperRHome.png'; //Rare
import CasperPHome from '../assets/CasperPHome.png'; //Prestige

import Camo from '../assets/Camo.png'; //standard
import CamoBHome from '../assets/CamoBHome.png'; //basic
import CamoRHome from '../assets/CamoRHome.png'; //rare
import CamoPHome from '../assets/CamoPHome.png'; //prestige

import Cuincy from '../assets/Cuincy.png'; //standard
import CuincyBHome from '../assets/CuincyBHome.png'; //basic
import CuincyRHome from '../assets/CuincyRHome.png'; //rare
import CuincyPHome from '../assets/CuincyPHome.png'; //prestige

import {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {height} = useWindowDimensions();
  const [source, setSource] = useState();
  const [coins, setCoins] = useState();
  let user = firebase.auth().currentUser;
  const onStartBreakPressed = () => {
    navigation.navigate('ChooseBreakActivity');
  };
  useEffect(() => {
    const fieldPath = new firebase.firestore.FieldPath('chillCoins');
    const using = firestore()
      .collection('users')
      .doc(user.uid)
      .onSnapshot(documentSnapshot => {
        console.log('User data: ', documentSnapshot.data());
        const count = documentSnapshot.get(fieldPath);
        console.log(count);
        setCoins(count);
      });

    // Stop listening for updates when no longer required
    return () => using();
  });

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

  return (
    <View style={styles.root}>
      <ImageBackground
        source={MainBackground}
        resizeMode="cover"
        style={{width: '100%', height: '100%'}}>
        <Text style={styles.title}>ChillCoins: {coins}</Text>
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
            resizeMode="center"
            alignItems="center"
          />
        )}
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>

        <View style={styles.bottom}>
          <Button
            title="Time for a Break!"
            onPress={onStartBreakPressed}
            iconContainerStyle={{marginRight: 10}}
            titleStyle={{fontWeight: '900'}}
            buttonStyle={{
              backgroundColor: 'rgba(169, 110, 108, 1)',
              borderColor: 'peach',
              borderWidth: 0,
              borderRadius: 30,
            }}
            containerStyle={{
              width: 240,
              marginHorizontal: 80,
              marginVertical: 5,
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
    marginHorizontal: 70,
  },
  description: {
    fontFamily: 'Futura',
    fontStyle: 'italic',
  },
  title: {
    fontSize: 22,
    fontFamily: 'Futura',
  },
});
