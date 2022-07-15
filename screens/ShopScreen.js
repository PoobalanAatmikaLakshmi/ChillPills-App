import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import CuincyB from '../assets/CuincyB.png';
import CuincyP from '../assets/CuincyP.png';
import CuincyR from '../assets/CuincyR.png';
import CasperB from '../assets/CasperB.png';
import CasperP from '../assets/CasperP.png';
import CasperR from '../assets/CasperR.png';
import CamoB from '../assets/CamoB.png';
import CamoP from '../assets/CamoP.png';
import CamoR from '../assets/CamoR.png';
import CustomButton from '../Components/CustomButton';
import {firebase} from '@react-native-firebase/auth';
import {Button} from 'react-native-elements';
const ShopScreen = () => {
  const navigation = useNavigation();
  const {height} = useWindowDimensions();
  let user = firebase.auth().currentUser;
  //const route = useRoute();
  //const {userID} = route.params;
  //const userid = route.initialParams.id;
  const [source1, setSource1] = useState();
  const [source2, setSource2] = useState();
  const [source3, setSource3] = useState();
  const getCuincyURL = () => {
    setSource1(CuincyB);
    setSource2(CuincyR);
    setSource3(CuincyP);
  };
  const getCasperURL = () => {
    setSource1(CasperB);
    setSource2(CasperR);
    setSource3(CasperP);
  };
  const getCamoURL = () => {
    setSource1(CamoB);
    setSource2(CamoR);
    setSource3(CamoP);
  };

  useEffect(() => {
    const func = async () => {
      const User = await firestore().collection('users').doc(user.uid).get();
      console.log(User);
      if (
        User._data.petimage === 'Cuincy' ||
        User._data.petimage === 'CuincyB' ||
        User._data.petimage === 'CuincyP' ||
        User._data.petimage === 'CuincyR'
      ) {
        getCuincyURL();
        //console.log(userID);
      } else if (
        User._data.petimage === 'Casper' ||
        User._data.petimage === 'CasperB' ||
        User._data.petimage === 'CasperP' ||
        User._data.petimage === 'CasperR'
      ) {
        getCasperURL();
        //console.log(user);
      } else if (
        User._data.petimage === 'Camo' ||
        User._data.petimage === 'CamoB' ||
        User._data.petimage === 'CamoP' ||
        User._data.petimage === 'CamoR'
      ) {
        getCamoURL();
        //console.log(source);
      }
    };
    func();
  });
  const updateSkinB = source => {
    if (source === CuincyB) {
      firestore()
        .collection('users')
        .doc(user.uid)
        .update({petimage: 'CuincyB'})
        .then(() => {
          console.log('New skin updated!');
          navigation.navigate('Home');
        });
    } else if (source === CasperB) {
      firestore()
        .collection('users')
        .doc(user.uid)
        .update({petimage: 'CasperB'})
        .then(() => {
          console.log('New skin updated!');
          navigation.navigate('Home');
        });
    } else if (source === CamoB) {
      firestore()
        .collection('users')
        .doc(user.uid)
        .update({petimage: 'CamoB'})
        .then(() => {
          console.log('New skin updated!');
          navigation.navigate('Home');
          //const user = firestore().collection('users').doc(userID).get();
          //console.log(user);
        });
    }
    console.log('B ran');
  };
  const updateSkinR = source => {
    if (source === CuincyR) {
      firestore()
        .collection('users')
        .doc(user.uid)
        .update({petimage: 'CuincyR'})
        .then(() => {
          console.log('New skin updated!');
        });
    } else if (source === CasperR) {
      firestore()
        .collection('users')
        .doc(user.uid)
        .update({petimage: 'CasperR'})
        .then(() => {
          console.log('New skin updated!');
          navigation.navigate('Home');
        });
    } else if (source === CamoR) {
      firestore()
        .collection('users')
        .doc(user.uid)
        .update({petimage: 'CamoR'})
        .then(() => {
          console.log('New skin updated!');
          //const user = firestore().collection('users').doc(userID).get();
          //console.log(user);
        });
    }
    console.log('R ran');
    console.log(user);
  };
  const updateSkinP = source => {
    if (source === CuincyP) {
      firestore()
        .collection('users')
        .doc(user.uid)
        .update({petimage: 'CuincyP'})
        .then(() => {
          console.log('New skin updated!');
        });
    } else if (source === CasperP) {
      firestore()
        .collection('users')
        .doc(user.uid)
        .update({petimage: 'CasperP'})
        .then(() => {
          console.log('New skin updated!');
        });
    } else if (source === CamoP) {
      firestore()
        .collection('users')
        .doc(user.uid)
        .update({petimage: 'CamoP'})
        .then(() => {
          console.log('New skin updated!');
          //const user = firestore().collection('users').doc(userID).get();
          //console.log(user);
        });
    }
    console.log('P ran');
  };
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View style={styles.root}>
        {source1 && (
          <Image
            source={source1}
            style={[styles.badge, {height: height}]}
            resizeMode="center"
          />
        )}
        <Text style = {styles.description}>🪙 Budget 🪙</Text>
        <CustomButton
          text="100 ChillCoins"
          onPress={() => updateSkinB(source1)}
        />
        {source2 && (
          <Image
            source={source2}
            style={[styles.badge, {height: height}]}
            resizeMode="center"
          />
        )}
        <Text style = {styles.description}>💵 Rare 💵</Text>
        <CustomButton
          text="500 ChillCoins"
          onPress={() => updateSkinR(source2)}
        />
        {source3 && (
          <Image
            source={source3}
            style={[styles.badge, {height: height}]}
            resizeMode="center"
          />
        )}
        <Text style = {styles.description}>💎 Prestige 💎</Text>
        <CustomButton
          text="1500 Chillcoins"
          onPress={() => updateSkinP(source3)}
        />
      </View>
    </ScrollView>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
    backgroundColor: '#FCF6E2',
  },
  badge: {
    width: '90%',
    maxWidth: 160,
    maxHeight: 170,
    alignItems: 'center',
    justifyContent: 'center',
  },

  description: {
    fontFamily: 'Futura',
    fontStyle: 'italic',
  },
});
