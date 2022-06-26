import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert, ActivityIndicator} from 'react-native';
import CustomButton from '../Components/CustomButton';
import CustomInput from '../Components/CustomInput';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const ResetPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [showLoading, setShowLoading] = useState(false);
  const [showText, setShowText] = useState(false);
  const navigation = useNavigation();

  const resetpressed = async () => {
    setShowLoading(true);
    try {
      await auth().sendPasswordResetEmail(email);
      setShowLoading(false);
      setShowText(true);
    } catch (e) {
      setShowLoading(false);
      Alert.alert(e.message);
    }
  };
  return (
    <View style={styles.root}>
      <CustomInput placeholder="Email" value={email} setValue={setEmail} />
      <CustomButton text="Reset Password" onPress={resetpressed} />
      {showText && (
        <Text style={styles.description}>
          Check your email for the resetpassword link!
        </Text>
      )}
      {showLoading && (
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="#8A584C" />
        </View>
      )}
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <CustomButton
        text="Back to login"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </View>
  );
};
export default ResetPasswordScreen;
const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'justify',
    //justifyContent: 'center',
    padding: 40,
    backgroundColor: '#FCF6E2',
  },
  description: {
    fontFamily: 'Futura',
    fontStyle: 'italic',
  },
  activity: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
