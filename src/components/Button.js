import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Colors from '../assets/colors/Colors';

function Button({title}) {
  return (
    <TouchableOpacity
      
      style={{
        backgroundColor: Colors.button1,
        borderRadius: 20,
        width: '90%',
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 16,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: Colors.white,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;
