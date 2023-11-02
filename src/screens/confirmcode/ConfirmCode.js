import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {style} from './Style';
import SectionHeader from '../../components/SectionHeader';
import BackArrow from '../../assets/images/BackArrow.svg';
import Cell from '../../assets/images/Cell.svg';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useRoute} from '@react-navigation/native';

export default function ConfirmCode() {
  const navigation = useNavigation();
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    date: '',
  });

  const route = useRoute();
  const firstName = route.params.firstName;
  const lastName = route.params.lastName;
  const email = route.params.email;
  const phone = route.params.phone;
  const password = route.params.password;
  const date = route.params.date;
  const selectedGender = route.params.selectedGender;

  const handleOtpChange = text => {
    setOtp(text);
    setError('');
  };

  const handleRegistration = async () => {
    if (otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP code.');
    }
   
    else {
      console.log(firstName);
      console.log(lastName);
      console.log(phone);
      console.log(email);
      console.log(password);
      console.log(date);
      console.log(selectedGender);

      try {
        setIsLoading(true);
        let data = new FormData();
        data.append('type', 'register');
        data.append('first_name', firstName);
        data.append('last_name', lastName);
        data.append('email', email);
        data.append('phone', phone);
        data.append('password', password);
        data.append('date', date);
        data.append('gender', selectedGender);

        let config = {
          method: 'post',
          url: 'https://7tracking.com/palm/api.php',
          data: data,
        };

        axios.request(config).then(response => {
          if (response.status === 200) {
            navigation.navigate('WelcomeBack', {
              email: email,
              password: password,
              first_name: firstName,
              last_name: lastName,
              phone: phone,
              date: date,
              gender: selectedGender,
            });
          } else {
            setErrors('An error occurred during the reg process.');
          }
        });

      } catch (error) {
        console.error('Error during registration:', error);
        setError('An error occurred during registration. Please try again.');
        setIsLoading(false);
      }
    }
  };

  return (
    <View style={style.container}>
      <SectionHeader icon={<BackArrow />} title="Confirm Code" />
      <View style={style.box}>
        <View style={style.cell}>
          <Cell />
        </View>
        <Text style={style.code}>We sent you a code</Text>
        <Text style={style.enter}>
          Enter it below to verify {}
          <Text style={style.num}>{phone}</Text>{' '}
        </Text>
        <View style={style.conView}>
          <OTPInputView
            pinCount={6}
            autoFocusOnLoad
            codeInputFieldStyle={style.underlineStyleBase}
            placeholderTextColor="#000000"
            onCodeFilled={code => handleOtpChange(code)}
            keyboardAppearance="default"
            keyboardType="number-pad"
            codeInputHighlightStyle={{color: '#000000'}}
          />
        </View>
        {error ? <Text style={{color: 'red'}}>{error}</Text> : null}
        <View style={style.buttonView}>
          <Button title="Next" onPress={handleRegistration} color="#26BA78" />
        </View>
      </View>
    </View>
  );
}
