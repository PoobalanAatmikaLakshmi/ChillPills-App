import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

//to make a resuable button
//bgColor is background color, fgColor is foreground color
const CustomButton = ({
  onPress,
  text,
  type = 'PRIMARY',
  bgColor,
  fgColor,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}>
        {' '}
        {text}{' '}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: '#0095AB',
  },
  container_TERTIARY: {},

  text: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  text_TERTIARY: {
    color: '#8A584C',
  },
});

export default CustomButton;