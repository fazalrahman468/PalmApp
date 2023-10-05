import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Colors from '../assets/colors/Colors';

function EmailInput({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
      {icon}
      <TextInput
        placeholderTextColor="#2A2A2B"
        style={styles.email}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.strokeWhite,
    width: '90%',
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 12
  },
  email: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    marginLeft: 12,
    flex:1
    
  },
});
export default EmailInput;
