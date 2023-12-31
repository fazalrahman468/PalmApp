import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {style} from './Style';
import SectionHeader from '../../components/SectionHeader';
import BackArrow from '../../assets/images/BackArrow.svg';
import {useNavigation} from '@react-navigation/native';
import PhoneNumberInput from '../../components/PhoneSelector';
import axios from 'axios';
import PhoneInput from 'react-native-phone-number-input';
import Colors from '../../assets/colors/Colors';

export default function ResetPassword() {
  const navigation = useNavigation();
  const [phone, setPhone] = useState();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({
   phone: '',
  });


  const saveData = async () => {
    const newErrors = {};
    if (!phoneNumber) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    console.log(phone);

    try {
      let data = new FormData();
      data.append('type', 'send_otp');
      data.append('phone', phoneNumber);

      let config = {
        method: 'post',
        url: 'https://7tracking.com/palm/api.php',
        data: data,
      };

      axios.request(config).then(response => {
        if (response.status === 200) {
          const userId = response.data.user_id;
          if (userId) {
            navigation.navigate('ConfirmCode', {
              phone: phoneNumber,
            });
          } else {
            setErrors('User does not exist or invalid credentials.');
          }
        } else {
          setErrors('An error occurred during the login process.');
        }
      });

      // const response = await axios.post('https://7tracking.com/palm/api.php', {
      //   phone: phone,
      //   type: 'send_otp',
      // });
      // const receivedOtp = response.data.otp;
      // setOtp(receivedOtp);

      // navigation.navigate('ConfirmCode', {
      //   otp: receivedOtp,
      //   email: email,
      //   password: password,
      //   firstName: firstName,
      //   lastName: lastName,
      //   phone: phone,
      //   date: date,
      //   selectedGender: selectedGender,

      // });
    } catch (error) {
      console.error('Error sending OTP:', error);
      setIsLoading(false);
    }
  };

  return (
    <View style={style.container}>
      <SectionHeader icon={<BackArrow />} />
      <View style={style.resetView}>
        <Text style={style.reset}>Reset your password</Text>
        <Text style={style.email}>
          Enter the phone number you used to create youy account
        </Text>
      </View>
      <View style={style.box}>
      <PhoneInput 
          defaultCode='PK'
          defaultValue={phoneNumber}
          onChangeFormattedText={(text) => {setPhoneNumber(text)}}
          containerStyle={{backgroundColor: Colors.strokeWhite, 
            marginTop:12, 
            borderRadius: 12, 
            width: "100%", 
            height: 50
          }}
          textContainerStyle={{backgroundColor: Colors.strokeWhite, borderRadius: 12,}}
          textInputStyle={{height:48, }}
          withDarkTheme
          />
        {/* <PhoneNumberInput onChangeText={arg => setPhone(arg)} /> */}
        <View style={style.buttonView}>
          <Button title="Continue" onPress={saveData} color="#26BA78" />
        </View>
      </View>
    </View>
  );
}
