import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
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
    const fieldPath = new firebase.firestore.FieldPath('petimage');
    const subscriber = firestore()
      .collection('users')
      .doc(user.uid)
      .onSnapshot(documentSnapshot => {
        console.log('User data: ', documentSnapshot.data());
        const pet = documentSnapshot.get(fieldPath);
        console.log(pet);

        if (
          pet === 'Cuincy' ||
          pet === 'CuincyB' ||
          pet === 'CuincyP' ||
          pet === 'CuincyR'
        ) {
          getCuincyURL();
          //console.log(userID);
        } else if (
          pet === 'Casper' ||
          pet === 'CasperB' ||
          pet === 'CasperP' ||
          pet === 'CasperR'
        ) {
          getCasperURL();
          //console.log(user);
        } else if (
          pet === 'Camo' ||
          pet === 'CamoB' ||
          pet === 'CamoP' ||
          pet === 'CamoR'
        ) {
          getCamoURL();
        }
      });
    return () => subscriber();
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
        <Text style={styles.description}>🪙 Budget 🪙</Text>
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
        <Text style={styles.description}>💵 Rare 💵</Text>
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
        <Text style={styles.description}>💎 Prestige 💎</Text>
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
  title: {
    fontSize: 22,
    fontFamily: 'Futura',
    padding: 50,
  },
  description: {
    fontFamily: 'Futura',
    fontStyle: 'italic',
  },
});
