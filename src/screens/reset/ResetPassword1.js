import React from 'react'
import {View, Text} from 'react-native'
import { style } from './Style'
import SectionHeader from '../../components/SectionHeader'
import Button from '../../components/Button'
import BackArrow from '../../assets/images/BackArrow.svg';
import {useNavigation} from '@react-navigation/native';


export default function ResetPassword1 () {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
        <SectionHeader icon={<BackArrow/>}/>
        <View style={style.resetView}>
        <Text style={style.reset}>Reset your password</Text>
        <Text style={style.email}>Enter the email address you used to create youy account</Text>
        </View>
        <View style={style.box}>
            
          <View style={style.reco}>
            <Text style={style.recoText}> A reset password email has been sent to {}
            <Text style={style.recoMail}>jsmith.mobbin@gmail.com</Text>
            .If you didn't receive the email, please contact us for help.</Text>
          </View>
           
           <View style={style.buttonView}>
                <Button title={'Continue'} screen={'NewPassword'} navigation={navigation}/>
            </View>
            
        </View>
    </View>
  )
}
