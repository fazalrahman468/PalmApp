import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import Colors from '../assets/colors/Colors';

const PhoneNumberInput = () => {
  const [countryCode, setCountryCode] = useState('US');
  const [phoneNumber, setPhoneNumber] = useState('');

  const onSelectCountry = (country) => {
    setCountryCode(country.cca2);
  };

  return (
    <View style={{flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: Colors.strokeWhite, 
    marginTop: 12,
    borderRadius: 12,
    paddingLeft: 12}}>
      <CountryPicker
        countryCode={countryCode}
        withCallingCodeButton
        onSelect={onSelectCountry}
      />
      <TextInput
        style={{flex: 1, fontSize: 14, fontFamily: "Inter-Medium", marginLeft: 6}}
        placeholder="Phone Number"
        placeholderTextColor= "#000000"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />
    </View>
  );
};

export default PhoneNumberInput;