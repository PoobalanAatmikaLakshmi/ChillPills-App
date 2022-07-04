import React from 'react';
import {ScrollView, StyleSheet, Image, View} from 'react-native';
import {Button, Card, Icon, Text} from 'react-native-elements';
import CustomButton from '../Components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import realmeditation from '../assets/realmeditation.png';
import exercise from '../assets/exercise.png';
import sleep from '../assets/sleep.png';
const ChooseBreakActivity = () => {
  const navigation = useNavigation();
  const onChosen = () => {
    navigation.navigate('Break Timer');
    //console.warn("Go to Home Page")ss;
  };
  //const urlImage =
  //'https://raw.githubusercontent.com/RushikeshVidhate/react-native-exercise-app/main/app/assets/images/Exercise3.png';
  //'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80';
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>
          Choose how you want to spend your break!
        </Text>
        <Card>
          <Card.Title>Meditation</Card.Title>
          <Card.Divider />
          <Card.Image
            style={({padding: 5}, {width: 350}, {height: 300})}
            source={realmeditation}
          />
          <Text style={{marginBottom: 5}}>
            Benefits of meditation are wide ranging
          </Text>
          <CustomButton text="Choose" onPress={onChosen} />
        </Card>
        <Card>
          <Card.Title>Exercise</Card.Title>
          <Card.Divider />
          <Card.Image
            style={({padding: 5}, {width: 350}, {height: 310})}
            source={exercise}
          />
          <Text style={{marginBottom: 10}}>
            Exercise of any form boost physical and mental health!
          </Text>
          <CustomButton text="Choose" onPress={onChosen} />
        </Card>
        <Card>
          <Card.Title>Take a nap </Card.Title>
          <Card.Divider />
          <Card.Image
            style={({padding: 5}, {width: 350}, {height: 310})}
            source={sleep}
          />
          <Text style={{marginBottom: 10}}>Sleeping is good for you</Text>
          <CustomButton text="Choose" onPress={onChosen} />
        </Card>
        <Card>
          <Card.Title>Others</Card.Title>
          <Card.Divider />
          <Card.Image style={{padding: 0}} source={realmeditation} />
          <Text style={{marginBottom: 10}}>Suggested Activities </Text>
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
  },
  description: {
    fontFamily: 'Futura',
    fontStyle: 'italic',
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
