import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';
import CustomButton from '../Components/CustomButton';
import BackgroundTimer from 'react-native-background-timer';
import CustomInput from '../Components/CustomInput';
import {useRoute} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {firebase} from '@react-native-firebase/auth';
const BreakTimer = () => {
  const onselected = () => {
    console.warn('Go to Music Page');
  };
  const [secondsLeft, setSecondsLeft] = useState(3);
  const [secondsRemaining, setSecondsRemaining] = useState();
  const [timerOn, setTimerOn] = useState(false);
  //const route = useRoute();
  //const {userID} = route.params;
  let user = firebase.auth().currentUser;
  // Runs when timerOn value changes to start or stop timer
  useEffect(() => {
    if (timerOn) {
      startTimer();
      setSecondsRemaining(secondsLeft);
    } else {
      BackgroundTimer.stopBackgroundTimer();
    }
    return () => {
      BackgroundTimer.stopBackgroundTimer();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerOn]);

  useEffect(() => {
    if (secondsLeft === 0) {
      const coins = addChillCoins(secondsRemaining);
      console.log(coins);

      BackgroundTimer.stopBackgroundTimer();
      const updatecoins = async () => {
        await firestore()
          .collection('users')
          .doc(user.uid)
          .update({
            chillCoins: firebase.firestore.FieldValue.increment(coins),
          });
      };
      updatecoins();

      console.log('added coins');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondsLeft]);

  const startTimer = () => {
    BackgroundTimer.runBackgroundTimer(() => {
      setSecondsLeft(secs => {
        if (secs > 0) {
          return secs - 1;
        } else {
          return 0;
        }
      });
    }, 1000);
  };
  const clockify = () => {
    let mins = Math.floor(secondsLeft / 60);
    let seconds = Math.floor(secondsLeft % 60);
    let displayMins = mins < 10 ? `0${mins}` : mins;
    let displaySecs = seconds < 10 ? `0${seconds}` : seconds;
    return {
      displayMins,
      displaySecs,
    };
  };
  const handleInput = text => {
    const currValue = parseInt(text, 10);
    if (currValue < 600) {
      setSecondsLeft(3);
    } else if (currValue > 1800) {
      setSecondsLeft(1800);
    } else if (isNaN(currValue)) {
      setSecondsLeft(0);
    } else {
      setSecondsLeft(currValue);
    }
    console.log(secondsLeft);
  };

  const addChillCoins = value => {
    let coins;
    if (value <= 1020) {
      coins = Math.ceil(2 * (value / 60));
    } else if (value > 1020) {
      coins = Math.ceil(value / 60);
    }

    return coins;
  };

  return (
    <View style={styles.root}>
      <CustomInput
        placeholder="Key in your preferred time duration in sec"
        value={secondsLeft}
        setValue={text => handleInput(text)}
        keyboardType="numeric"
      />
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text style={styles.title}> It is time to unwind 🥳: </Text>
      <Text> </Text>
      <Text style={styles.timer}>
        {' '}
        {clockify().displayMins} Mins {clockify().displaySecs} Secs{' '}
      </Text>

      <CustomButton
        text="Start/Stop"
        onPress={() => setTimerOn(current => !current)}
      />
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text style={styles.description}> Listen to music in the meantime!</Text>
      <CustomButton text="To Spotify" onPress={() => {Linking.openURL('https://open.spotify.com/')}} />
    </View>
  );
};
export default BreakTimer;
const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'justify',
    //justifyContent: 'center',
    padding: 50,
    backgroundColor: '#FCF6E2',
  },
  title: {
    fontSize: 27,
    fontFamily: 'Futura',
    flexDirection: 'row',
    flexWrap: 'wrap',
    //textAlign : 'justify'
  },

  timer: {
    fontSize: 30,
    color: '#000',
    marginBottom: 30,
    textAlign: 'center',
  },
  description: {
    fontFamily: 'Futura',
    fontStyle: 'italic',
  },
});
