import React, {useState, useEffect, useRoute} from 'react';
import {View, Text, Button, StyleSheet, Input} from 'react-native';
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {firebase} from '@react-native-firebase/auth';

//for first time users only

const SignUpScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const navigation = useNavigation();

  const onRegisterPressed = async () => {
    //console.warn("Register");
    //will work

    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        const uid = response.user.uid;
        const data = {
          id: uid,
          email,
          fullName,
          petimage: 'uninitialized',
          chillCoins: 0,
        };
        const usersRef = firestore().collection('users');
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            navigation.navigate('Login');
          })
          .catch(error => {
            alert(error);
          });
      })
      .catch(error => {
        alert(error);
      });
  };
  const onLoginPressed = () => {
    //console.warn("Redirecting to Login Page");
    navigation.navigate('Login');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Create An Account</Text>
      <CustomInput
        placeholder="Full Name"
        value={fullName}
        setValue={setFullName}
      />
      <CustomInput placeholder="Email" value={email} setValue={setEmail} />

      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />

      <CustomInput
        placeholder="Repeat Password"
        value={passwordRepeat}
        setValue={setPasswordRepeat}
        secureTextEntry={true}
      />

      <CustomButton text="Register" onPress={onRegisterPressed} />

      <CustomButton
        text="Already have an Account? Login!"
        onPress={onLoginPressed}
        type="TERTIARY"
      />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
    padding: 50,
    backgroundColor: '#FCF6E2',
  },
  logo: {
    width: '70%',
    maxWidth: 150,
    maxHeight: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8A584C',
    margin: 10,
  },
});
