import React from 'react'
import {View, Text} from 'react-native'
import { style } from './Style'
import SectionHeader from '../../components/SectionHeader'
import BackArrow from '../../assets/images/BackArrow.svg'
import Button from '../../components/Button'
import {useNavigation} from '@react-navigation/native'
import EmailInput from '../../components/EmailInput'
import Lock from '../../assets/images/Lock.svg'
import Eye from '../../assets/images/Eye.svg'
import EmailInput1 from '../../components/EmailInput1'

export default function CreatePassword() {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <SectionHeader icon={<BackArrow/>} title='Create Password'/>
      <View style={style.box}>
            <Text style={style.code}>You'll need a password</Text>
            <Text style={style.enter}>Make sure it's 8 characters or more </Text>
           <View style={style.password}>
           <EmailInput icon={<Lock/>} placeholder='Password'/>
           <Eye/>
           </View>
           <View style={style.confirm}>
           <EmailInput1 icon={<Lock/>} placeholder='Confirm Password'/>
           </View>
           <View style={style.buttonView}>
                <Button title={'Next'} screen={'WelcomeBack'} navigation={navigation}/>
            </View>

        </View>
    </View>
  )
}
