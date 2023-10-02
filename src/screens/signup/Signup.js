import React from 'react';
import {View, Text, Image } from 'react-native';
import { style } from './Style';
import BackArrow from '../../assets/images/BackArrow.svg'
import SectionHeader from '../../components/SectionHeader';

export default function Signup() {
  return (
    <View style={style.container}>
    
    <SectionHeader title='Verify Your Humanity'/>
    </View>
  )
}
