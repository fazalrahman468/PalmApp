import React from 'react'
import {View, Text} from 'react-native'
import { style } from './Style'
import SectionHeader from '../../components/SectionHeader'
import Button from '../../components/Button'
import BackArrow from '../../assets/images/BackArrow.svg';
import {useNavigation} from '@react-navigation/native';


export default function RecPassword () {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
        <SectionHeader icon={<BackArrow/>}/>
        <View style={style.box}>
            
          <View style={style.reco}>
            <Text style={style.recoText}> Your password has been reset successfully.{}
            You can now login your account using your new password.</Text>
          </View>
           
           <View style={style.buttonView}>
                <Button title={'Continue'}/>
            </View>
            
        </View>
    </View>
  )
}
