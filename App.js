import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useRoute} from '@react-navigation/native';
import {Alert, Button} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import OnBoardingScreen from './screens/OnBoardingScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import HomeScreen from './screens/HomeScreen';
import ChoosePetScreen from './screens/ChoosePetScreen';
import ChooseInterval from './screens/ChooseInterval';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BreakTimer from './screens/BreakTimer';
import {firebase} from '@react-native-firebase/auth';
import {Navigation} from 'react-native-navigation';
import ChooseBreakActivity from './screens/ChooseBreakActivity';
import ShopScreen from './screens/ShopScreen';
import notifee, {AuthorizationStatus} from '@notifee/react-native';
//This file will be executed

const Drawer = createDrawerNavigator();
const AppStack = createStackNavigator();
//let user = firebase.auth().currentUser;
function MyDrawer() {
  const navigation = useNavigation();
  const onlogoutpressed = () => {
    auth().signOut();
    navigation.navigate('Login');
  };
  const onchangepetpressed = () => {
    navigation.navigate('Choose A Pet!');
  };
  return (
    //add shop screen later
    <Drawer.Navigator
      //initialRouteName="Home"
      screenOptions={{drawerPosition: 'left'}}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        // initialParams={{userID: user.uid}}
        onPress
        options={{
          headerRight: () => (
            <Button onPress={onlogoutpressed} title="Logout" color="#8A584C" />
          ),
        }}
      />

      <Drawer.Screen name="Change break frequency" component={ChooseInterval} />
      <Drawer.Screen
        name="Shop"
        component={ShopScreen}
        // initialParams={{userID: user.uid}}
        options={{
          headerRight: () => (
            <Button
              onPress={onchangepetpressed}
              title="Change Pet"
              color="#0095AB"
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
function AppScreens() {
  return (
    <AppStack.Navigator headerShown="false">
      <AppStack.Screen name="OnBoarding" component={OnBoardingScreen} />

      <AppStack.Screen name="Sign Up" component={SignUpScreen} />

      <AppStack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
      />
      <AppStack.Screen name="Login" component={LoginScreen} />
      <AppStack.Screen
        name="Choose A Pet!"
        component={ChoosePetScreen}
        // initialParams={{userID: user.uid}}
      />
      <AppStack.Screen
        name="Break Timer"
        component={BreakTimer}
        // initialParams={{userID: user.uid}}
      />
      <AppStack.Screen
        name="ChooseBreakActivity"
        component={ChooseBreakActivity}
        // initialParams={{userID: user.uid}}
      />

      <AppStack.Screen
        name="Drawer"
        component={MyDrawer}
        options={{headerShown: false}}
      />
    </AppStack.Navigator>
  );
}

// Handle user state changes

export default function App() {
  useEffect(() => {
    requestUserPermission();
  }, []);

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  async function requestUserPermission() {
    const settings = await notifee.requestPermission();

    if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
      console.log('Permission settings:', settings);
    } else {
      console.log('User declined permissions');
      Alert.alert(
        'You have declined Notification Permissions 🥺',
        'Allow Permissions for all functionalities.',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      );

      await delay(20000);

      requestUserPermission();
    }
  }
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppScreens />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
