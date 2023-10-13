import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Eye from '../assets/images/Eye.svg'; // Replace with your actual Eye icon component
import Colors from '../assets/colors/Colors';
import Lock from '../assets/images/Lock.svg'

export default function Password() {
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={{
        backgroundColor: Colors.strokeWhite,
        width: '90%',
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 12
    }}>
      <Lock/>
      <TextInput
        style={{
            fontFamily: 'Inter-Medium',
            fontSize: 14,
            fontFamily: 'Inter-Medium',
            marginLeft: 12,
            flex:1, color: Colors.black
        }}
        placeholder="Password"
        placeholderTextColor='#000000'
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!isPasswordVisible} // Toggle secure text entry
      />
      <TouchableOpacity onPress={togglePasswordVisibility}>
        <Eye
          // Customize the icon's appearance, e.g., icon component and style
          width={24}
          height={24}
        //   fill="black"
        />
      </TouchableOpacity>
    </View>
  );
}
