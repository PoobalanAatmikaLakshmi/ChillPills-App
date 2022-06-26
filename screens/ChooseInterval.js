import React from 'react';
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
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import CustomButton from '../Components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from 'react-native-navigation';
const ChooseInterval = () => {
  const {height} = useWindowDimensions();
  const interval = ['25 minutes', '50 minutes', '90 minutes'];
  const navigation = useNavigation();
  const onChosen = () => {
    navigation.navigate('Drawer', {screen: 'Home'});
    //console.warn("Go to Home Page");
  };
  return (
    <View style={styles.root}>
      <Text> </Text>
      <Text> </Text>
      <Text style={styles.title}>
        {' '}
        How often would you like to take a break?{' '}
      </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text style={styles.description}>
        I would like to take a break every...
      </Text>
      <Text> </Text>
      <SelectDropdown
        data={interval}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        defaultButtonText={' Please select desired interval'}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        buttonStyle={styles.dropdown1BtnStyle}
        buttonTextStyle={styles.dropdown1BtnTxtStyle}
        //renderDropdownIcon={isOpened => {
        //  return <FontAwesomeIcon name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={30} />;

        //dropdownIconPosition={'right'}
        dropdownStyle={styles.dropdown1DropdownStyle}
        rowStyle={styles.dropdown1RowStyle}
        rowTextStyle={styles.dropdown1RowTxtStyle}
      />
      <Text> </Text>
      <Text> </Text>
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
    //textAlign : 'justify'
  },
  description: {
    fontSize: 15,
    fontFamily: 'Futura',
    fontStyle: 'italic',
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
    //justifyContent: 'center',
    padding: 40,
    backgroundColor: '#FCF6E2',
  },
});
