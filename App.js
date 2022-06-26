import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import {Button} from 'react-native';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import OnBoardingScreen from './screens/OnBoardingScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import HomeScreen from './screens/HomeScreen';
import ChoosePetScreen from './screens/ChoosePetScreen';
import ChooseInterval from './screens/ChooseInterval';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BreakTimer from './screens/BreakTimer';
import { firebase } from '@react-native-firebase/auth';
import { Navigation } from 'react-native-navigation';

const Drawer = createDrawerNavigator();
const AppStack = createStackNavigator();
function MyDrawer(){


const navigation = useNavigation();

  const onlogoutpressed = () => {
    auth().signOut();
    navigation.navigate('Login');
  };
  return (
    //add shop screen later 
  <Drawer.Navigator
      //initialRouteName="Home"
      screenOptions = {{drawerPosition:"left"}}
      >
        <Drawer.Screen
        name = "Home"
        component={HomeScreen}
        options={{
          headerRight:() => (
            <Button
            onPress={onlogoutpressed}
                title="Logout"
                color='#8A584C'
              />
          ),
        }}
        />
  
        <Drawer.Screen
        name = "Change break frequency"
        component = {ChooseInterval}
        />
      
  </Drawer.Navigator>

  );
}
function AppScreens(){
  return (
      <AppStack.Navigator headerShown="false">
        <AppStack.Screen name="OnBoarding" component={OnBoardingScreen} />
        
        <AppStack.Screen name="Sign Up" component={SignUpScreen} />
        
        <AppStack.Screen
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
        />
        <AppStack.Screen name="Login" component={LoginScreen} />
        <AppStack.Screen name="Choose A Pet!" component={ChoosePetScreen} />
        <AppStack.Screen name="Break Timer" component={BreakTimer} />
        <AppStack.Screen name="Drawer" component={MyDrawer}
         options={{ headerShown: false }}/>
        
        </AppStack.Navigator>
      
        
    
  );
}

 

  // Handle user state changes
  

  
 

export default function App() {
  return (
    <NavigationContainer>
    <AppScreens/>
    </NavigationContainer>
  );
}
