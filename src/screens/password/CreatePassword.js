import React from 'react'
import {View, Text} from 'react-native'
import { style } from './Style'
import SectionHeader from '../../components/SectionHeader'
import BackArrow from '../../assets/images/BackArrow.svg'

export default function CreatePassword() {
  return (
    <View style={style.container}>
      <SectionHeader icon={<BackArrow/>} title='Create Password'/>
      <Text style={style.code}>We sent you a code</Text>
            <Text style={style.enter}>Enter it below to verify {}
            <Text style={style.num}>+99624443524</Text> </Text>
    </View>
  )
}
