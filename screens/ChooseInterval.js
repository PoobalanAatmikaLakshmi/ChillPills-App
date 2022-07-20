import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import CustomButton from '../Components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useRoute} from '@react-navigation/native';
import {Navigation} from 'react-native-navigation';
import notifee, {
  IntervalTrigger,
  TriggerType,
  TimeUnit,
} from '@notifee/react-native';

const ChooseInterval = () => {
  let user = firebase.auth().currentUser;
  const [min, setMins] = useState();
  useEffect(() => {
    const path = new firebase.firestore.FieldPath('breakinterval');
    const getInterval = firestore()
      .collection('users')
      .doc(user.uid)
      .onSnapshot(documentSnapshot => {
        setMins(documentSnapshot.get(path));
      });
    return () => getInterval();
  });
  const interval = [25, 50, 90];
  const navigation = useNavigation();
  const onChosen = () => {
    navigation.navigate('Drawer', {screen: 'Home'});
  };
  //create notifications that go off based on selected interval
  async function onCreateTriggerNotification() {
    console.log('running');
    const trigger: IntervalTrigger = {
      type: TriggerType.INTERVAL,
      interval: min,
      timeUnit: TimeUnit.MINUTES,
    };
    await notifee.createTriggerNotification(
      {
        title: 'ChillPills',
        body: 'Time to take a break!',
      },
      trigger,
    );
  }
  return (
    <View style={styles.root}>
      <Text> </Text>
      <Text> </Text>
      <Text style={styles.title}>How often would you like to</Text>
      <Text style={styles.title}>take a break?</Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text style={styles.description}>
        I would like to take a break every...
      </Text>
      <Text> </Text>
      <Text> </Text>
      <SelectDropdown
        data={interval}
        onSelect={(selectedItem, index) => {
          firestore()
            .collection('users')
            .doc(user.uid)
            .update({breakinterval: selectedItem})
            .then(() => {
              console.log('Break Interval updated!');
              console.log(min);
            });
          console.log(selectedItem, index);
          onCreateTriggerNotification();
        }}
        defaultButtonText={'Select duration (MINUTES)'}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        buttonStyle={styles.dropdown1BtnStyle}
        buttonTextStyle={styles.dropdown1BtnTxtStyle}
        dropdownStyle={styles.dropdown1DropdownStyle}
        rowStyle={styles.dropdown1RowStyle}
        rowTextStyle={styles.dropdown1RowTxtStyle}
      />
      <Text> </Text>
      <Text> </Text>
      <Text style={styles.description}>minutes.</Text>
      <Text> </Text>
      <Text> </Text>
      <Text style={styles.description}>
        ⏳ Hot Tip: Set it to 25 minutes to create
      </Text>
      <Text style={styles.description}>a Pomodoro study timer!</Text>
      <Text> </Text>
      <Text> </Text>
      <CustomButton text="Next" onPress={onChosen} />
    </View>
  );
};
export default ChooseInterval;
const styles = StyleSheet.create({
  title: {
    fontSize: 23,
    fontFamily: 'Futura',
    justifyContent: 'center',
  },
  description: {
    fontSize: 15,
    fontFamily: 'Futura',
    fontStyle: 'italic',
    justifyContent: 'center',
  },
  dropdown1BtnStyle: {
    width: '90%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
  dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},

  root: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'justify',
    padding: 40,
    backgroundColor: '#FCF6E2',
  },
});

