import React from 'react'
import {View, Text} from 'react-native'
import { style } from './Style'
import SectionHeader from '../../components/SectionHeader'
import EmailInput from '../../components/EmailInput'
import Button from '../../components/Button'
import BackArrow from '../../assets/images/BackArrow.svg';
import Mail from '../../assets/images/Mail.svg';
import {useNavigation} from '@react-navigation/native';


export default function ResetPassword () {
    const navigation = useNavigation();
    return (
    <View style={style.container}>
        <SectionHeader icon={<BackArrow/>}/>
        <View style={style.resetView}>
        <Text style={style.reset}>Reset your password</Text>
        <Text style={style.email}>Enter the email address you used to create youy account</Text>
        </View>
        <View style={style.box}>
            <View style={style.confirm}>
           <EmailInput icon={<Mail/>} placeholder='Johndoe@gmail.com'/>
           </View>
           <View style={style.buttonView}>
                <Button title={'Continue'} screen={'ResetPassword1'} navigation={navigation}/>
            </View>
            
        </View>
    </View>
  )
}
