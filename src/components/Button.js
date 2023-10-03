import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Colors from '../assets/colors/Colors';

function Button({title, screen, navigation}) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screen)}
      style={{
        backgroundColor: Colors.button1,
        borderRadius: 16,
        width: '100%',
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        // marginHorizontal: 16,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: Colors.white,
          fontFamily: 'Inter-Medium'
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;
