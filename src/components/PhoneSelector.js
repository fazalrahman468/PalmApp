import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import Colors from '../assets/colors/Colors';

const PhoneNumberInput = ({onChangeText=()=>""}) => {
  const [countryCode, setCountryCode] = useState('PK');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');


  const onSelectCountry = country => {
    setCountryCode(country.cca2);
  };

  const validatePhoneNumber = () => {
    if (!phoneNumber) {
      setPhoneNumberError('Phone number is required');
    } else {
        setPhoneNumberError('');
      }

  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.strokeWhite,
        marginTop: 12,
        borderRadius: 12,
        paddingLeft: 12,
      }}>
      <CountryPicker
        countryCode={countryCode}
        withCallingCodeButton
        onSelect={onSelectCountry}
      />
      

      <TextInput
        style={{
          flex: 1,
          fontSize: 14,
          fontFamily: 'Inter-Medium',
          marginLeft: 6,
          color: Colors.black,
        }}
        placeholder="Phone Number"
        placeholderTextColor="#B3B5B5"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={text => {
          setPhoneNumber(text)
          onChangeText(text)
        }}
        onBlur={validatePhoneNumber}
      />
      
      {phoneNumber ? (<Text style={{color: 'red'}}>{phoneNumberError}</Text>) : null}
    </View>
    
  );
};

export default PhoneNumberInput;
