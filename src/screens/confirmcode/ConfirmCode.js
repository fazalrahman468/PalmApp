import React from 'react';
import {View, Text} from 'react-native'
import { style } from './Style';
import SectionHeader from '../../components/SectionHeader';
import BackArrow from '../../assets/images/BackArrow.svg';
import Cell from '../../assets/images/Cell.svg';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

export default function ConfirmCode() {
    const navigation = useNavigation();
  return (
    <View style={style.container}>
        <SectionHeader icon={<BackArrow/>} title='Confirm Code'/>
        <View style={style.box}>
            <View style={style.cell}>
            <Cell/>
            </View>
            <Text style={style.code}>We sent you a code</Text>
            <Text style={style.enter}>Enter it below to verify {}
            <Text style={style.num}>+99624443524</Text> </Text>
            <View style={style.conView}>
                <OTPInputView pinCount={6}
                autoFocusOnLoad
                codeInputFieldStyle={style.underlineStyleBase}
                placeholderTextColor='#000000'
                />
            </View>
            <View style={style.buttonView}>
                <Button title={'Confirm'} screen={'CreatePassword'} navigation={navigation}/>
            </View>

        </View>
    </View>
  )
}
