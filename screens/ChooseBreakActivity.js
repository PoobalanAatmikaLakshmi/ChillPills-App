import React from 'react';
import {ScrollView, StyleSheet, Image, View} from 'react-native';
import {Button, Card, Icon, Text} from 'react-native-elements';
import CustomButton from '../Components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import Meditation from '../assets/Meditation.png';
import exercise from '../assets/exercise.png';
import otheractivities from '../assets/otheractivities.png';
import sleep from '../assets/sleep.png';
const ChooseBreakActivity = () => {
  const navigation = useNavigation();
  const onChosen = () => {
    navigation.navigate('Break Timer');
    //console.warn("Go to Home Page");
  };
  //const urlImage =
  //'https://raw.githubusercontent.com/RushikeshVidhate/react-native-exercise-app/main/app/assets/images/Exercise3.png';
  //'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80';
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Some recommended activities for a</Text>
        <Text style={styles.title}>               POWER BREAK!</Text>
        <Card>
          <Card.Title style={styles.fonts} h3>Meditation</Card.Title>
          <Card.Divider />
          <Card.Image
            style={({padding: 5}, {width: 350}, {height: 300})}
            source={Meditation}
          />
          <Text style={styles.description}>
            Benefits of meditation are wide ranging. Research published 
            in Psychological Science found that a short meditative practice of 
            merely 15 minutes can help you make better decisions!
          </Text>
          <CustomButton text="Choose" onPress={onChosen} />
        </Card>
        <Card>
          <Card.Title style={styles.fonts} h3>
            Exercise
          </Card.Title>
          <Card.Divider />
          <Card.Image
            style={({padding: 5}, {width: 350}, {height: 310})}
            source={exercise}
          />
          <Text style={styles.description}>
            Exercise of any form boosts physical and mental health. You don't have to 
            go out for a jog, just stand up, stretch and jog on the spot! Moving in spot just for 
            10 minutes helps to improve posture, especially important when you are slouched over books and devices
            all the time.
          </Text>
          <CustomButton text="Choose" onPress={onChosen} />
        </Card>
        <Card>
          <Card.Title style={styles.fonts} h3>
            Take a nap
          </Card.Title>
          <Card.Divider />
          <Card.Image
            style={({padding: 5}, {width: 350}, {height: 310})}
            source={sleep}
          />
          <Text style={styles.description}>You can get incredible benefits from 15 to 20 minutes of napping. 
          You reset the system and get a burst of alertness and increased motor performance, 
          getting that well-needed an energy boost.</Text>
          <CustomButton text="Choose" onPress={onChosen} />
        </Card>
        <Card>
          <Card.Title style={styles.fonts} h3>
            Do Nothing. Head empty, no thoughts.
          </Card.Title>
          <Card.Divider />
          <Card.Image
            style={({padding: 5}, {width: 350}, {height: 310})}
            source={otheractivities}
          />
          <Text style={styles.description}>Or you could choose to daydream. 
          Stare into space and admire the scenery or busy road below to stave off that eye-strain! 
          Your eyes and imagination will thank you for it.</Text>
          <CustomButton text="Choose" onPress={onChosen} />
        </Card>
      </View>
    </ScrollView>
  );
};

export default ChooseBreakActivity;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontFamily: 'Futura',
   
    padding: 10,
    justifyContent: 'center',
  },
  fonts: {
    fontFamily: 'Futura',
    fontStyle: 'italic',
  },

  description: {
    fontFamily: 'Futura',
    justifyContent: 'center',
    fontSize: 15,
    marginBottom: 5,
  },

  root: {
    flex: 1,
    //justifyContent: 'center',
    //padding: 40,
    backgroundColor: '#FCF6E2',
  },
  badge: {
    width: '70%',
    maxWidth: 150,
    maxHeight: 150,
  },
});
