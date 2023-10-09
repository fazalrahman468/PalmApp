import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { style } from './Style'
import Button from '../../components/Button'
import {useNavigation} from '@react-navigation/native';
import Logo from '../../assets/images/Logo.svg';

export default function GetStarted() {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <ImageBackground source={require('../../assets/images/Bg.png')}
      style={style.background}>
      <View style={style.image}>
      <Logo/>
      </View>
      <Text style={style.palmText}>Find and create live community rooms for whatever you're into </Text>
      <View style={style.buttonView}>
      <Button title={'Get Started'} screen={'Signup'} navigation={navigation}/>
      <TouchableOpacity onPress={() => navigation.navigate('WelcomeBack')}>
      <Text style={style.already}>Already have an account?</Text>
      </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  )
}