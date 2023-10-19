import React, {useState} from 'react';
import {View, Text, Button} from 'react-native'
import { style } from './Style';
import SectionHeader from '../../components/SectionHeader';
import BackArrow from '../../assets/images/BackArrow.svg';
import Cell from '../../assets/images/Cell.svg';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {useNavigation} from '@react-navigation/native';

export default function ConfirmCode() {
    const navigation = useNavigation();
    const [otp, setOtp] = useState(''); 
    const [error, setError] = useState(''); 
  
    
    const handleOtpChange = (text) => {
      setOtp(text);
      setError('');
    };
  
    const handleConfirmation = () => {
      if (otp.length !== 6) {
        setError('Please enter a valid 6-digit OTP code.');
      } else {
        navigation.navigate('CreatePassword');
      }
    };


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
                onCodeFilled={(code) => handleOtpChange(code)}
                keyboardAppearance='default'
                keyboardType='number-pad'
                />
            </View>
            {error ? <Text style={{color: 'red'}}>{error}</Text> : null}
            <View style={style.buttonView}>
            <Button title="Next" onPress={handleConfirmation} color="#26BA78" /> 
            </View>

        </View>
    </View>
  )
}
