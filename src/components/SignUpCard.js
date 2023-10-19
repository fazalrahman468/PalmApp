import React, { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator } from 'react-native';
import Colors from '../assets/colors/Colors';
import {useNavigation} from '@react-navigation/native';

function SignUpCard() {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [otpCode, setOtpCode] = useState('');

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
  });

  const handleSignUp = async () => {
    // Reset errors
    setErrors({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      dateOfBirth: '',
    });

    // Validation
    if (!firstName) {
      setErrors({ ...errors, firstName: 'First name is required' });
      return;
    }
    if (!lastName) {
      setErrors({ ...errors, lastName: 'Last name is required' });
      return;
    }
    if (!email) {
      setErrors({ ...errors, email: 'Email is required' });
      return;
    }
    if (!phoneNumber) {
      setErrors({ ...errors, phoneNumber: 'Phone number is required' });
      return;
    }
    if (!dateOfBirth) {
      setErrors({ ...errors, dateOfBirth: 'Date of birth is required' });
      return;
    }

    // Simulate OTP API call
    setIsLoading(true);
    try {
      // You can replace this with your actual OTP API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setOtpCode('123456'); // Simulated OTP code
    } catch (error) {
      console.error('Error sending OTP:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={{backgroundColor: Colors.primary, flex: 1}}>
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      {errors.firstName ? <Text>{errors.firstName}</Text> : null}

      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      {errors.lastName ? <Text>{errors.lastName}</Text> : null}

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      {errors.email ? <Text>{errors.email}</Text> : null}

      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />
      {errors.phoneNumber ? <Text>{errors.phoneNumber}</Text> : null}

      <TextInput
        placeholder="Date of Birth"
        value={dateOfBirth}
        onChangeText={(text) => setDateOfBirth(text)}
      />
      {errors.dateOfBirth ? <Text>{errors.dateOfBirth}</Text> : null}

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Button title="Next" onPress={handleSignUp} />
      )}

      {otpCode && <Text>OTP Code: {otpCode}</Text>}
    </View>
  );
}

export default SignUpCard;
