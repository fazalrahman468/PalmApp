import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Eye from '../assets/images/Eye.svg';
import Colors from '../assets/colors/Colors';
import Lock from '../assets/images/Lock.svg'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Password() {
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  useEffect(() => {
    async function getPassword() {
      const savedPassword = await AsyncStorage.getItem('password');
      if (savedPassword) {
        setPassword(savedPassword);
      }
    }
    getPassword();
  }, []);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  useEffect(() => {
    AsyncStorage.setItem('password', password);
  }, [password]);

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
        secureTextEntry={!isPasswordVisible} 
      />
      <TouchableOpacity onPress={togglePasswordVisibility}>
        <Eye
          width={24}
          height={24}
        />
      </TouchableOpacity>
    </View>
  );
}
