import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import { style } from './Style'
import Button from '../../components/Button'

export default function GetStarted() {
  return (
    <View style={style.container}>
      <ImageBackground source={require('../../assets/images/Bg.png')}
      style={style.background}>
      <View style={style.image}>
      <Image source={require('../../assets/images/Logo.png')}/>
      </View>
      <Text style={style.palmText}>Find and create live community rooms for whatever you're into </Text>
      <View style={style.buttonView}>
      <Button title={'Get Started'}/>
      <Text style={style.already}>Already have an account?</Text>
      </View>
      </ImageBackground>
    </View>
  )
}