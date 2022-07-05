import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const CustomInput = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  keyboardType = null,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType ? keyboardType : 'default'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '7%',
    borderColor: '#8A584C',
    borderWidth: 1,
    borderRadius: 5,

    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  input: {},
});
export default CustomInput;
